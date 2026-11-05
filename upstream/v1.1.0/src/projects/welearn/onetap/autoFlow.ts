import { subscribe } from "valtio";

import { collectScoItems, getCurrentScoId } from "@src/projects/welearn/sco/parser";
import {
    jumpToNextSelectedSco,
    loadScoSelection,
} from "@src/projects/welearn/sco/selection";
import { store } from "@src/store";
import { sleep } from "@utils";
import logger from "@utils/logger";

/**
 * 全自动刷题：自动等待 -> 自动提交 -> 自动下一节。
 *
 * 迁移自派生版仓库根 `src/index.js` 的同名实现，语义保持一致：
 * - 本节课件 iframe：等待（本页音视频总时长 + 随机区间，受总上限约束）后提交，
 *   再延迟一段时间向 `window.top` postMessage 一条 `AUTO_NEXT` 通知；
 * - 课程播放器顶层页面：校验消息来源（contentFrame 下的真实 frame 树）、
 *   当前 SCO、requestId 去重，延迟后切换到下一节。
 *
 * 上游 v1.1.0 没有现成的提交按钮/进度工具函数，本文件内的
 * `etQuery` / `etController` / `etAllItemsCompleted` / `etAllAnswersCorrect`
 * 即为此目的自行实现，判定依据见各函数注释。
 */

/** 全自动流程单轮运行标识，用于等待期间判断本轮是否已被取消。 */
export interface AutoNextRun {
    id: string;
}

/** 自动等待时长（秒）。 */
export interface AutoWaitInfo {
    /** 本页所有音视频可读时长之和（秒） */
    media: number;
    /** 叠加在媒体时长之后的随机等待（秒） */
    random: number;
    /** 最终等待毫秒数（受总上限约束） */
    totalMs: number;
    /** 是否被等待总上限截断 */
    capped: boolean;
}

/** 跨帧 `AUTO_NEXT` 通知体。 */
export interface AutoNextMessage {
    __eocs: true;
    type: "AUTO_NEXT";
    from?: string;
    submitted?: boolean;
    requestId?: string;
}

/** 顶层页面正在处理的切换请求，用于 requestId 去重与延迟后复核。 */
interface AutoNextRequest {
    source: Window;
    from: string;
    chapter: string;
    requestId: string;
}

interface AutoNextReady {
    url: string;
    hasAnswers: boolean;
}

interface AutoSubmitAnswerCheck {
    ok: boolean;
    keyed: number;
    correct: number;
    mismatch?: string;
}

/**
 * 本模块挂在 window 上的运行状态。
 * 不使用全局声明合并，避免与 sco / initial 等其它模块的同名挂载冲突。
 */
type AutoNextWindow = Window & {
    __eocsAutoNextRun?: AutoNextRun | null;
    __eocsAutoNextUrl?: string;
    __eocsAutoNextReady?: AutoNextReady | null;
};

function autoNextWindow() {
    return window as AutoNextWindow;
}

/** 查询课件自定义元素（et-item / et-button / et-blank ...）。 */
function etQuery<T extends Element = HTMLElement>(selector: string): T[] {
    return Array.prototype.slice.call(document.querySelectorAll(selector)) as T[];
}

/** 读取课件 Angular 组件 controller；页面不是 Angular 或元素没有 controller 时返回 null。 */
function etController(el: Element | null, name: string): any {
    if (!el) return null;
    try {
        if (typeof angular === "undefined") return null;
        const jq = angular.element(el);
        return jq.controller(name) || jq.data("$" + name + "Controller") || null;
    } catch (error) {
        return null;
    }
}

/** et-item 的 controller，进度/提交状态都从这里读。 */
function etItemController(el: Element | null): any {
    return etController(el, "etItem");
}

/**
 * 等待本节所有交互题完成。
 *
 * 注意：et-item controller 上没有 progressTotal（只是局部变量），
 * 所以只能用 interactionIds 判断是否存在交互题，用 scormInfo.progressMeasure 判断进度。
 * 无交互题的 item（视频/听力）直接跳过。
 */
async function etAllItemsCompleted(timeout = 20000): Promise<boolean> {
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) {
        const items = etQuery("et-item");
        if (!items.length) return true;
        let all = true;
        for (const el of items) {
            const item = etItemController(el);
            if (!item) {
                all = false;
                break;
            }
            const interactionIds = Array.isArray(item.interactionIds) ? item.interactionIds : [];
            if (!interactionIds.length) continue;
            const progressMeasure = item.scormInfo && item.scormInfo.progressMeasure;
            if (String(progressMeasure) === "1") continue;
            all = false;
            break;
        }
        if (all) return true;
        await sleep(400);
    }
    return false;
}

/**
 * 校验本页所有可判定答案是否已确认正确。
 *
 * 只统计有 key 的客观题（填空/选择/下拉/判断/连线），口语、排序等无法自动判定的题型不参与，
 * 避免把未确认正确的答案提交上去导致低分。
 */
function etAllAnswersCorrect(): AutoSubmitAnswerCheck {
    let keyed = 0;
    let correct = 0;
    let mismatch = "";

    for (const el of etQuery("et-blank")) {
        const controller = etController(el, "etBlank");
        if (!controller || !controller.hasKey) continue;
        keyed++;
        if (controller.isCorrect === true) correct++;
        else if (!mismatch) mismatch = `填空「${(controller.key && controller.key[0]) || ""}」`;
    }

    for (const el of etQuery("et-choice")) {
        const controller = etController(el, "etChoice");
        if (!controller || !controller.hasKey) continue;
        keyed++;
        if (controller.isCorrect === true) correct++;
        else if (!mismatch) mismatch = "选择题";
    }

    for (const el of etQuery("et-select")) {
        const controller = etController(el, "etSelect");
        if (!controller || !controller.hasKey) continue;
        keyed++;
        if (controller.isCorrect === true) correct++;
        else if (!mismatch) mismatch = "下拉题";
    }

    for (const el of etQuery("et-tof")) {
        const controller = etController(el, "etTof");
        if (!controller || !controller.hasKey) continue;
        keyed++;
        if (controller.isCorrect === true) correct++;
        else if (!mismatch) mismatch = "判断题";
    }

    for (const el of etQuery("et-matching")) {
        const controller = etController(el, "etMatching");
        if (!controller || !Array.isArray(controller.keys)) continue;
        keyed++;
        let ok = true;
        for (let ai = 0; ai < controller.keys.length; ai++) {
            const blanks = controller.keys[ai];
            if (!blanks || !blanks.length) continue;
            const got = Array.isArray(controller.answers[ai]) ? controller.answers[ai] : [];
            if (!blanks.every((bi: any) => got.indexOf(bi) !== -1)) {
                ok = false;
                break;
            }
        }
        if (ok) correct++;
        else if (!mismatch) mismatch = "连线题";
    }

    if (keyed === 0) return { ok: true, keyed, correct };
    return { ok: correct === keyed, keyed, correct, mismatch };
}

function etClampNumber(value: unknown, fallback: number, min: number, max: number): number {
    const n = Number(value);
    const v = Number.isFinite(n) ? n : fallback;
    return Math.min(max, Math.max(min, v));
}

function etMediaKey(src: string | null | undefined): string {
    const name = String(src || "")
        .split("/")
        .pop();
    return (name || "").replace(/\.[^.]+$/, "").toLowerCase();
}

/** 收集本页所有音视频的可读时长（秒）；同一段媒体的 audio/video 只算一次。 */
async function etCollectMediaDurations(): Promise<number[]> {
    const medias = etQuery<HTMLMediaElement>("audio, video");
    const seen: Record<string, boolean> = {};
    const durations: number[] = [];

    for (const media of medias) {
        try {
            let duration = Number(media.duration);
            if (!Number.isFinite(duration) || duration <= 0) {
                // 元数据尚未加载时等 loadedmetadata / error，最多等 3 秒
                await new Promise<void>((resolve) => {
                    let done = false;
                    const finish = () => {
                        if (done) return;
                        done = true;
                        resolve();
                    };
                    try {
                        media.addEventListener("loadedmetadata", finish, { once: true });
                        media.addEventListener("error", finish, { once: true });
                        if (media.readyState === 0) media.load();
                    } catch (error) {
                        finish();
                    }
                    setTimeout(finish, 3000);
                });
                duration = Number(media.duration);
            }
            if (!Number.isFinite(duration) || duration <= 0) continue;

            const key = etMediaKey(media.currentSrc || media.src);
            if (key && seen[key]) continue;
            if (key) seen[key] = true;
            durations.push(duration);
        } catch (error) {
            logger.debug(error);
        }
    }
    return durations;
}

/** 静音自动播放本页音视频（部分浏览器会拦截，失败忽略即可）。 */
function etAutoPlayMedia(): void {
    for (const media of etQuery<HTMLMediaElement>("audio, video")) {
        try {
            media.muted = true;
            const playing = media.play();
            if (playing && playing.catch) playing.catch(() => {});
        } catch (error) {
            logger.debug(error);
        }
    }
}

/**
 * 计算本节自动等待时长。
 * 本页音视频总时长 + 随机区间，受 `autoWaitCap`（分钟）总上限约束。
 */
export async function etComputeAutoWaitMs(): Promise<AutoWaitInfo> {
    let media = 0;
    if (store.userSettings.autoWaitMedia !== false) {
        const durations = await etCollectMediaDurations();
        media = durations.reduce((sum, duration) => sum + duration, 0);
        if (durations.length) {
            logger.debug(
                `本页媒体时长：${durations.map((duration) => Math.round(duration)).join(" + ")} = ${Math.round(
                    media,
                )} 秒`,
            );
        }
    }

    const min = etClampNumber(store.userSettings.autoWaitRandomMin, 60, 0, 3600);
    const max = etClampNumber(store.userSettings.autoWaitRandomMax, 180, min, 10800);
    const random = min + Math.random() * (max - min);

    const capMinutes = etClampNumber(store.userSettings.autoWaitCap, 90, 1, 600);
    const totalSec = Math.min(media + random, capMinutes * 60);

    return {
        media,
        random,
        totalMs: Math.round(totalSec * 1000),
        capped: media + random > capMinutes * 60,
    };
}

/**
 * 可中断的睡眠：等待期间只要开关关闭 / 页面变化 / 本轮被取消就立刻返回 false。
 *
 * 以 pageUrl 而不是「当前 iframe 的 src」判断页面是否变化：嵌套练习的地址与
 * 外层 iframe 的 src 不同，但仍在同一节里。
 */
export async function etSleepWithAbort(
    ms: number,
    pageUrl: string,
    run?: object,
): Promise<boolean> {
    const state = autoNextWindow();
    const active = () =>
        location.href === pageUrl &&
        !!store.userSettings.autoNext &&
        !!store.userSettings.autoSolve &&
        (!run || state.__eocsAutoNextRun === run);

    const deadline = Date.now() + ms;
    while (Date.now() < deadline) {
        if (!active()) return false;
        await sleep(Math.min(1000, Math.max(0, deadline - Date.now())));
    }
    return active();
}

/**
 * 提交当前练习节。
 *
 * 判定方法（上游没有现成的提交/进度工具函数，这里是自实现的）：
 * 1. 没有 `et-button[action="item.submit()"]` 的页面（视频/听力/主观题）直接跳过；
 * 2. 用 et-item controller 的 `scormInfo.progressMeasure === "1"` 判断进度是否完成；
 * 3. 用各题型 controller 的 `isCorrect` / `hasKey` 判断答案是否全部确认正确，有未确认的就不提交；
 * 4. 点击后以出现 `item.reset()` 按钮（未被 ng-hide 隐藏）或 controller.isSubmitted === true
 *    作为「提交成功」的依据。
 */
export async function etAutoSubmitCurrent(): Promise<boolean> {
    const items = etQuery("et-item");
    if (!items.length) return false;

    const buttons = etQuery<HTMLButtonElement>('et-button[action="item.submit()"] > button');
    if (!buttons.length) {
        logger.info({ content: "本节没有可提交的按钮（视频/听力/主观题页面），直接跳过提交" });
        return false;
    }

    const allDone = await etAllItemsCompleted(8000);
    if (!allDone) {
        logger.info({
            content: "本节还有题目未完成（可能是口语/录音/未适配题型），跳过自动提交，稍后切到下一节",
        });
        await sleep(600);
        return false;
    }

    const answerCheck = etAllAnswersCorrect();
    logger.debug(
        `自动提交检查：提交按钮 ${buttons.length} 个，进度已完成，答案校验 ${answerCheck.correct}/${answerCheck.keyed}`,
    );
    if (!answerCheck.ok) {
        logger.error({
            content: {
                message: `自动提交已跳过：仍有 ${
                    answerCheck.keyed - answerCheck.correct
                } 处答案未确认正确（${answerCheck.mismatch || "未知"}），为避免低分不提交`,
            },
        });
        return false;
    }

    // 播放器提交时可能弹出二次确认，这里临时绕过
    const oldConfirm = window.confirm;
    window.confirm = () => true;
    let clicked = 0;
    try {
        for (const btn of buttons) {
            if (btn.disabled) continue;
            btn.click();
            clicked++;
            await sleep(3000);
        }
    } catch (error) {
        logger.error({
            content: { message: "自动提交异常：" + ((error as Error)?.message || error) },
        });
    } finally {
        window.confirm = oldConfirm;
    }

    // 点击不等于提交成功：必须复核 reset 按钮 / isSubmitted
    let submitted = false;
    for (const el of items) {
        const item = etItemController(el);
        if (item && item.isSubmitted === true) submitted = true;
        const reset = el.querySelector('et-button[action="item.reset()"]');
        if (reset && !reset.classList.contains("ng-hide")) submitted = true;
    }

    if (submitted) {
        logger.info({ content: "本节已自动提交" });
        logger.debug(`本节已自动提交（点击提交按钮 ${clicked} 次）`);
    } else {
        logger.info({ content: "自动提交未成功（可能仍有题目未完成），继续自动切换" });
        logger.debug(`自动提交未成功（点击提交按钮 ${clicked} 次，isSubmitted 未置位）`);
    }
    return submitted;
}

/**
 * 全自动流程入口：等待 -> 提交 -> 延迟 -> 通知顶层页面切下一节。
 *
 * @param hasAnswers 本节是否解析出了答案；没有答案（视频/听力等）时只等待 + 切页，不提交。
 */
export async function etAutoNextFlow(hasAnswers: boolean): Promise<void> {
    const state = autoNextWindow();
    if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;
    if (state.__eocsAutoNextUrl === location.href) return;
    state.__eocsAutoNextUrl = location.href;

    const run: AutoNextRun = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    };
    state.__eocsAutoNextRun = run;
    let notified = false;
    const pageUrl = location.href;
    logger.debug(`全自动：本节处理开始（hasAnswers=${hasAnswers}）`);

    try {
        if (store.userSettings.autoWait !== false) {
            const waitInfo = await etComputeAutoWaitMs();
            logger.info({
                content: `自动等待 ${Math.round(waitInfo.totalMs / 1000)} 秒（媒体 ${Math.round(
                    waitInfo.media,
                )} 秒 + 随机 ${Math.round(waitInfo.random)} 秒${waitInfo.capped ? "，已达上限" : ""}）后提交…`,
            });
            if (store.userSettings.autoPlayMedia) etAutoPlayMedia();
            const stayed = await etSleepWithAbort(waitInfo.totalMs, pageUrl, run);
            if (!stayed) return;
        }

        if (!(await etSleepWithAbort(0, pageUrl, run))) return;

        let submitted = false;
        const wantSubmit = hasAnswers && store.userSettings.autoSubmit !== false;
        const canSubmit =
            wantSubmit && etQuery('et-button[action="item.submit()"] > button').length > 0;
        if (canSubmit) {
            submitted = await etAutoSubmitCurrent();
            if (!submitted && location.href === pageUrl) {
                if (!(await etSleepWithAbort(2500, pageUrl, run))) return;
                submitted = etQuery('et-button[action="item.reset()"]').some(
                    (el) => !el.classList.contains("ng-hide"),
                );
                if (!submitted) submitted = await etAutoSubmitCurrent();
            }
            if (!submitted) {
                logger.info({
                    content: "本节未能自动提交（为避免低分不会提交未确认的答案），直接切到下一节",
                });
            }
        } else if (wantSubmit) {
            logger.info({ content: "本节没有提交按钮（视频/听力/主观题页面），直接切到下一节" });
        }

        const delay = Math.max(1, Number(store.userSettings.autoNextDelay) || 3) * 1000;
        if (!(await etSleepWithAbort(delay, pageUrl, run))) return;

        logger.debug(`全自动：通知父页切换（submitted=${submitted}）`);
        try {
            window.top?.postMessage(
                {
                    __eocs: true,
                    type: "AUTO_NEXT",
                    from: pageUrl,
                    submitted,
                    requestId: run.id,
                } as AutoNextMessage,
                "*",
            );
            notified = true;
        } catch (error) {
            logger.debug(error);
        }
    } catch (error) {
        logger.error({
            content: { message: "自动下一节异常：" + ((error as Error)?.message || error) },
        });
    } finally {
        if (state.__eocsAutoNextRun === run) {
            state.__eocsAutoNextRun = null;
            // 已经发出通知时保留 url 标记，避免同一节被重复处理；
            // 被取消/异常中止时清掉，以便重新开启全自动后还能继续本节。
            if (!notified) state.__eocsAutoNextUrl = "";
        }
    }
}

/** 课程播放器顶层页面（StudyCourse / TryCourse）。 */
function isCoursePlayerPage(): boolean {
    return /\.sflep\.com\/(?:student|Student|Course)\/(?:StudyCourse|TryCourse)\.aspx/i.test(
        location.href,
    );
}

/**
 * 下一节跳转。
 *
 * 与派生版 `nextChapter` 一致：优先按用户勾选的「刷题范围」跳转
 * （`jumpToNextSelectedSco` 返回 null 表示没有设置范围，才走内置兜底），
 * 兜底逻辑与上游 v1.1.0 `time/main.ts` 的 `nextChapter` 相同：
 * 优先 `NextSCO()`，否则点课程目录中的下一个 SelectSCO 链接；
 * 最后一节按「循环挂机」回到开头。
 */
export function etNextChapter(): boolean {
    if (!isCoursePlayerPage()) return false;

    let topWindow: Window = window;
    try {
        topWindow = window.top || window;
    } catch (error) {
        topWindow = window;
    }

    let doc: Document;
    try {
        doc = topWindow.document;
    } catch (error) {
        logger.debug(error);
        return false;
    }

    // 按勾选的刷题范围跳转；null 表示没有设置范围，交回内置逻辑
    const selectionJump = jumpToNextSelectedSco(doc);
    if (selectionJump !== null) {
        if (selectionJump === false) {
            const selection = loadScoSelection(doc);
            const anySelected = collectScoItems(doc).some(
                (item) => selection[item.id] !== false,
            );
            logger.info({
                content: anySelected
                    ? "已到所选范围末尾，自动切换停止"
                    : "没有勾选任何要刷的节，自动切换停止",
            });
        }
        return selectionJump;
    }

    const jumpButtons = Array.prototype.slice.call(
        doc.querySelectorAll<HTMLAnchorElement>('a[onclick^="SelectSCO"]'),
    ) as HTMLAnchorElement[];
    if (!jumpButtons.length) {
        const fallback = Array.prototype.slice
            .call(doc.querySelectorAll<HTMLElement>("a,button"))
            .find((el: HTMLElement) => /下一节|下一课|下一章|Next/i.test(el.textContent || ""));
        if (fallback) {
            fallback.click();
            return true;
        }
        logger.info({ content: "未找到章节列表，无法自动切换（请确认在课程学习页面）" });
        return false;
    }

    const currentButton = doc.querySelector<HTMLAnchorElement>("li.courseware_current a");
    const isLast = !!currentButton && currentButton === jumpButtons[jumpButtons.length - 1];
    if (isLast) {
        if (!store.userSettings.loopRefresh) {
            logger.info({ content: "已到最后一节，循环挂机未开启，自动切换停止" });
            return false;
        }
        const real =
            jumpButtons.find((a) => !/说明|desc/i.test(a.textContent || "")) ||
            jumpButtons[1] ||
            jumpButtons[0];
        if (real) {
            real.click();
            return true;
        }
        return false;
    }

    try {
        if (typeof (topWindow as any).NextSCO === "function") {
            (topWindow as any).NextSCO();
            return true;
        }
    } catch (error) {
        logger.debug(error);
    }

    const index = currentButton ? jumpButtons.indexOf(currentButton) : -1;
    if (index >= 0 && jumpButtons[index + 1]) {
        jumpButtons[index + 1].click();
        return true;
    }
    logger.info({ content: "找不到下一节按钮" });
    return false;
}

/**
 * 按 contentFrame 的真实 frame 树判断消息来源是否属于当前课件。
 * 嵌套练习 iframe 的 URL 与外层 contentFrame.src 不同，所以不能只比较 URL。
 */
export function isActiveCourseFrame(
    source: Window | null,
    root: Window | null,
    depth = 0,
): boolean {
    if (!source || !root || depth > 8) return false;
    if (source === root) return true;
    try {
        const frames = root.frames as unknown as Window[];
        for (let i = 0; i < frames.length; i++) {
            if (isActiveCourseFrame(source, frames[i], depth + 1)) return true;
        }
    } catch (error) {
        // 跨域 frame 读取会抛异常，忽略
    }
    return false;
}

let autoNextPending: AutoNextRequest | null = null;
let autoNextCompleted: AutoNextRequest | null = null;

/**
 * 顶层页面处理课件 iframe 发来的 `AUTO_NEXT` 通知。
 *
 * 校验顺序与派生版一致：只顶层窗口处理 -> 校验 iframe 是否属于 contentFrame 的 frame 树
 * -> 校验当前 SCO -> 按请求来源/from/chapter/requestId 去重 -> 延迟 800ms 后再次复核并切下一节。
 */
export function handleAutoNextMessage(event: MessageEvent): void {
    const data = event.data as Partial<AutoNextMessage> | null;
    if (!data || data.__eocs !== true || data.type !== "AUTO_NEXT") return;
    if (window !== window.top || !isCoursePlayerPage()) return;
    if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;

    const frame = document.getElementById("contentFrame") as HTMLIFrameElement | null;
    if (
        !frame ||
        !isActiveCourseFrame(event.source as unknown as Window | null, frame.contentWindow)
    ) {
        return;
    }

    const source = event.source as Window;
    const chapter = getCurrentScoId(document);
    const from = typeof data.from === "string" ? data.from : "";
    const requestId = typeof data.requestId === "string" ? data.requestId : "";

    const same = (request: AutoNextRequest | null) =>
        !!request &&
        request.source === source &&
        request.from === from &&
        request.chapter === chapter &&
        request.requestId === requestId;
    if (same(autoNextPending) || same(autoNextCompleted)) return;

    const request: AutoNextRequest = { source, from, chapter, requestId };
    autoNextPending = request;
    logger.info({ content: "本节已处理，准备切换到下一节…" });

    setTimeout(() => {
        if (autoNextPending !== request) return;
        autoNextPending = null;
        try {
            if (!store.userSettings.autoNext || !store.userSettings.autoSolve) return;
            const activeFrame = document.getElementById("contentFrame") as HTMLIFrameElement | null;
            if (
                !activeFrame ||
                !isActiveCourseFrame(request.source, activeFrame.contentWindow) ||
                getCurrentScoId(document) !== request.chapter
            ) {
                return;
            }
            const ok = etNextChapter();
            if (ok) autoNextCompleted = request;
            else logger.info({ content: "自动切换已停止，请检查所选范围和课程目录" });
        } catch (error) {
            logger.error({
                content: { message: "自动切换失败：" + ((error as Error)?.message || error) },
            });
        }
    }, 800);
}

let messageListenerRegistered = false;

/** 注册 `AUTO_NEXT` 消息监听；重复调用无副作用。 */
export function registerAutoNextListener(): void {
    if (messageListenerRegistered) return;
    messageListenerRegistered = true;
    window.addEventListener("message", handleAutoNextMessage, false);
}

/** 记录本节解析完成状态，供之后开启「全自动刷题」时接着本节的等待/提交流程。 */
export function markAutoNextReady(hasAnswers: boolean): void {
    autoNextWindow().__eocsAutoNextReady = { url: location.href, hasAnswers };
}

let readyWatcherRegistered = false;

/**
 * 监听设置变化：
 * - 关闭「全自动刷题」或「自动答题」时作废进行中的等待，避免继续切换；
 * - 本节已解析完成后再开启「全自动刷题」，接着本节的等待/提交流程。
 *
 * 只在课件页面（centercourseware）注册。
 */
export function watchAutoNextReady(): void {
    if (readyWatcherRegistered) return;
    if (!location.href.includes("centercourseware.sflep.com")) return;
    readyWatcherRegistered = true;

    subscribe(store.userSettings, () => {
        const state = autoNextWindow();
        if (!store.userSettings.autoNext || !store.userSettings.autoSolve) {
            state.__eocsAutoNextRun = null;
            state.__eocsAutoNextUrl = "";
            return;
        }
        const ready = state.__eocsAutoNextReady;
        if (ready && ready.url === location.href) {
            void etAutoNextFlow(ready.hasAnswers);
        }
    });
}
