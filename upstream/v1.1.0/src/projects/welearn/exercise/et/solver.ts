function ready_in(element: HTMLElement) {
    $(element)
        .trigger("click")
        .trigger("focus")
        .trigger("keydown")
        .trigger("input");
}

function event_trigger(element: HTMLElement) {
    $(element)
        .trigger("keyup")
        .trigger("change")
        .trigger("blur");
    try {
        angular.element(element).triggerHandler("hover");
        angular.element(element).triggerHandler("keyup");
        angular.element(element).triggerHandler("blur");
    } catch (error) {}
}

import logger from "@/src/utils/logger";
import { store } from "@src/store";
import { sleep } from "@src/utils";

/** 自动答题结果：写入成功 / 未能确认正确的处数 */
interface EtSolveReport {
    done: number;
    bad: number;
}

/** 统一全角空格、连续空白与大小写后再比较 */
function etNorm(text: any) {
    return String(text === null || text === undefined ? "" : text)
        .replace(/\u00a0/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

/** 页面里是否已经跑起课件自己的 Angular */
function etHasAngular() {
    try {
        if (typeof angular === "undefined" || !angular.element || !document.body) return false;
        return !!angular.element(document.body).injector();
    } catch (error) {
        return false;
    }
}

/** 在 Angular 的 digest 里执行，保证写入组件数据模型后界面和成绩都会更新 */
function etApply(fn: () => void) {
    try {
        const root = angular.element(document.body).injector().get("$rootScope");
        if (root.$$phase) {
            return fn();
        }
        return root.$apply(fn);
    } catch (error) {
        logger.debug(error);
        try {
            return fn();
        } catch (error2) {
            logger.debug(error2);
        }
    }
}

/** 取课件组件（etBlank / etChoice / etSelect / etTof / etMatching）的 controller */
function etController(element: Element | null | undefined, name: string): any {
    if (!element) return null;
    try {
        const jq = angular.element(element);
        return jq.controller(name) || jq.data("$" + name + "Controller") || null;
    } catch (error) {
        return null;
    }
}

function etQuery(selector: string) {
    return Array.prototype.slice.call(document.querySelectorAll(selector)) as HTMLElement[];
}

/** 课件是异步渲染的，等题目组件出现再作答；超时则放弃本节 */
async function etWaitForQuestions(timeout?: number) {
    const deadline = Date.now() + (timeout || 9000);
    while (Date.now() < deadline) {
        if (
            document.querySelector("et-item") &&
            document.querySelector(
                "et-blank, et-choice, et-select, et-tof, et-matching, et-sort, et-tick-list, et-crossword",
            )
        ) {
            await sleep(250);
            return true;
        }
        await sleep(150);
    }
    logger.info({ content: "题目渲染超时，已跳过本节自动答题" });
    return false;
}

/**
 * 写入填空题答案。
 *
 * 课件的成绩只认组件数据模型，所以优先写 blank.value；
 * 直接改 DOM 文本会出现“界面看得见、平台不算分”的问题，DOM 只作为兜底。
 * [noinput] 空格和词库选词没有输入框，只能点词库里的词条，由课件自己写回 blank.value。
 */
async function etSetBlankAnswer(element: HTMLElement, text: string) {
    const blank = etController(element, "etBlank");
    const wanted =
        blank && blank.key && blank.key.length
            ? blank.key[0]
            : String(text === null || text === undefined ? "" : text).trim();
    if (!wanted) return true;

    if (blank) {
        try {
            etApply(() => {
                blank.value = wanted;
            });
            await sleep(60);
            if (blank.isCorrect === true || etNorm(blank.value) === etNorm(wanted)) return true;
        } catch (error) {
            logger.debug(error);
        }
    }

    // 兜底：可编辑空格改 DOM 并补事件，让课件自己同步数据模型
    const span = element.querySelector("span.blank") as HTMLElement | null;
    if (
        span &&
        typeof $ !== "undefined" &&
        (span.isContentEditable || span.hasAttribute("contenteditable"))
    ) {
        try {
            ready_in(span);
            span.textContent = wanted;
            event_trigger(span);
            $(span).trigger("focusout");
            span.dispatchEvent(new Event("input", { bubbles: true }));
            span.dispatchEvent(new Event("change", { bubbles: true }));
            await sleep(100);
            const nowBlank = etController(element, "etBlank");
            if (
                nowBlank &&
                (nowBlank.isCorrect === true || etNorm(nowBlank.value) === etNorm(wanted))
            )
                return true;
            if (!nowBlank && etNorm(span.textContent) === etNorm(wanted)) return true;
        } catch (error) {
            logger.debug(error);
        }
    }

    return await etPickWordChip(span || element, wanted);
}

/**
 * [noinput] 空格与选词填空只能点词库里的词条：
 * 点词条会走课件自己的 optionToggle -> blank.value，界面和答案模型才会一起更新。
 */
async function etPickWordChip(span: HTMLElement, text: string) {
    if (!span) return false;
    const wanted = etNorm(text);
    if (!wanted) return true;
    if (typeof $ === "undefined") return false;

    // 先让空格拿到焦点，词库才知道要填哪一个空
    const item: Element = span.closest("et-item") || span.closest(".sco") || document.body;
    try {
        $(span).trigger("focus");
    } catch (error) {
        logger.debug(error);
    }
    await sleep(150);

    let pool = Array.prototype.slice.call(
        item.querySelectorAll(".optionsPicker.visible [option], et-options [option]"),
    ) as HTMLElement[];
    if (!pool.length) {
        pool = Array.prototype.slice.call(
            document.querySelectorAll("et-options [option]"),
        ) as HTMLElement[];
    }
    const strip = (text: string) => text.replace(/[.,;:!?]+$/, "");
    const pick =
        pool.find((node) => etNorm(node.textContent) === wanted) ||
        pool.find((node) => strip(etNorm(node.textContent)) === strip(wanted)) ||
        pool.find((node) => {
            const chipText = etNorm(node.textContent);
            return chipText.indexOf(wanted) === 0 || wanted.indexOf(chipText) === 0;
        });
    if (!pick) return false;

    pick.click();
    await sleep(180);
    const blankElement = span.closest("et-blank") || span;
    const blank = etController(blankElement, "etBlank");
    return (
        etNorm(blank ? blank.value : span.textContent || "") === wanted ||
        !!(blank && blank.isCorrect === true)
    );
}

/** 答题间隔限制在合理区间，避免设置过大导致明显等待 */
function etSolveInterval(cap?: number) {
    const raw = Number(store.userSettings.solveInterval);
    const interval = Number.isFinite(raw) && raw > 0 ? raw : 1000;
    return Math.min(Math.max(interval, 60), cap || 500);
}

/**
 * 按每个组件自己的 key 作答：
 * 与答案文件的顺序、web/mobile 副本、题型 id 全部解耦，只认课件里的答案模型。
 */
async function etSolveEtOnce() {
    const report: EtSolveReport = { done: 0, bad: 0 };
    const interval = etSolveInterval(500);

    for (const element of etQuery("et-blank")) {
        const blank = etController(element, "etBlank");
        if (!blank || !blank.hasKey || !blank.key || !blank.key.length) continue;
        try {
            if (await etSetBlankAnswer(element, blank.key[0])) report.done++;
            else {
                report.bad++;
                logger.info({ content: `填空题自动作答失败：${blank.key[0]}` });
            }
        } catch (error) {
            report.bad++;
            logger.debug(error);
        }
        await sleep(interval);
    }

    for (const element of etQuery("et-choice")) {
        const choice = etController(element, "etChoice");
        if (!choice || !choice.hasKey || !Array.isArray(choice.key)) continue;
        try {
            etApply(() => {
                choice.value = choice.key.slice();
            });
            await sleep(60);
            if (choice.isCorrect === true) report.done++;
            else report.bad++;
        } catch (error) {
            report.bad++;
            logger.debug(error);
        }
        await sleep(interval);
    }

    for (const element of etQuery("et-select")) {
        const select = etController(element, "etSelect");
        const selectElement = element.querySelector("select");
        if (!select || !select.hasKey || !select.key) continue;
        try {
            etApply(() => {
                select.value = select.key;
            });
            if (selectElement) {
                selectElement.value = select.key;
                selectElement.dispatchEvent(new Event("change", { bubbles: true }));
            }
            await sleep(80);
            if (select.isCorrect === true || (selectElement && selectElement.value === select.key))
                report.done++;
            else report.bad++;
        } catch (error) {
            report.bad++;
            logger.debug(error);
        }
        await sleep(interval);
    }

    for (const element of etQuery("et-tof")) {
        const tof = etController(element, "etTof");
        if (!tof || !tof.hasKey || !tof.key) continue;
        try {
            etApply(() => {
                tof.value = tof.key.slice();
            });
            await sleep(60);
            if (tof.isCorrect === true) report.done++;
            else report.bad++;
        } catch (error) {
            report.bad++;
            logger.debug(error);
        }
        await sleep(interval);
    }

    try {
        await etSolveMatchingAll();
    } catch (error) {
        logger.error({
            content: { message: `连线题自动作答异常：${(error as Error).message || error}` },
        });
    }

    return report;
}

/**
 * 连线题：等课件根据布局生成 svg 圆圈后，先点左栏再点右栏，
 * 由课件自己记录 matching.answers，而不是直接往 DOM 里塞 <line>。
 */
async function etSolveMatchingAll() {
    for (const element of etQuery("et-matching")) {
        const matching = etController(element, "etMatching");
        let pairs: Array<[number, number]> = [];
        if (matching && Array.isArray(matching.keys)) {
            matching.keys.forEach((bs: number[], ai: number) => {
                (bs || []).forEach((bi: number) => pairs.push([ai, bi]));
            });
        } else {
            const key = element.getAttribute("key") || "";
            pairs = key
                .split(",")
                .map((item): [number, number] | null => {
                    const matched = /(\d+)-(\d+)/.exec(item);
                    return matched ? [Number(matched[1]) - 1, Number(matched[2]) - 1] : null;
                })
                .filter((pair): pair is [number, number] => pair !== null);
        }
        if (!pairs.length) continue;

        // 连线题的 svg 圆圈由 $postLink 里根据布局坐标生成，需要等布局完成
        for (let wait = 0; wait < 40; wait++) {
            if (element.querySelectorAll("g.circles circle").length > 0) break;
            await sleep(150);
        }

        for (let attempt = 0; attempt < 3; attempt++) {
            const circles = Array.prototype.slice.call(
                element.querySelectorAll("g.circles circle"),
            ) as SVGCircleElement[];
            const leftCircles = circles.filter(
                (circle) => circle.getAttribute("data-circle") === "A",
            );
            const rightCircles = circles.filter(
                (circle) => circle.getAttribute("data-circle") === "B",
            );
            for (const [ai, bi] of pairs) {
                if (!leftCircles[ai] || !rightCircles[bi]) continue;
                $(leftCircles[ai]).trigger("click");
                await sleep(120);
                $(rightCircles[bi]).trigger("click");
                await sleep(160);
            }
            await sleep(250);
            if (element.querySelectorAll("g.answers .line line").length >= pairs.length) break;
        }
    }
}

/**
 * 视听说等 et 课件的自动答题入口。
 *
 * answers 参数保留以兼容调用方，实际不再按答案文件顺序填空：
 * 答案文件里的顺序、web/mobile 副本和课件组件经常对不上，
 * 所以改为逐个读取组件自己的 key，再做两轮重试（组件没渲染完时补答）。
 */
export async function solveEt(answers: any[]) {
    if (!etHasAngular()) return false;
    if (!(await etWaitForQuestions(9000))) return false;

    const report: EtSolveReport = { done: 0, bad: 0 };
    for (let attempt = 0; attempt < 2; attempt++) {
        const pass = await etSolveEtOnce();
        report.done = Math.max(report.done, pass.done);
        report.bad = pass.bad;
        if (pass.bad === 0) break;
        await sleep(600);
    }

    if (report.done || report.bad) {
        logger.debug({ content: `自动答题：成功 ${report.done} 处，失败 ${report.bad} 处` });
    }
    return report.done > 0;
}
