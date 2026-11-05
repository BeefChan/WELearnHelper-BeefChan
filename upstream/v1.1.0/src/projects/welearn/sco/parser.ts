import logger from "@utils/logger";

/** 课件目录中的一节（叶子节点） */
export interface ScoItem {
    id: string;
    title: string;
    /** 从一级目录到叶子所在父级的标题链 */
    path: string[];
    /** 所属单元，便于分组展示 */
    unit: string;
    link: HTMLAnchorElement;
}

/** 压缩 HTML 里的空白，便于展示与比较 */
function cleanText(text: string | null | undefined) {
    return (text || "").replace(/\s+/g, " ").trim();
}

/**
 * 从 SelectSCO 的 onclick 中取出 SCO id
 *
 * 真实页面形如 onclick="SelectSCO('xxx','yyy')" 或 SelectSCO("xxx")
 */
export function scoIdFromLink(link: Element): string {
    const matched = /SelectSCO\s*\(\s*(['"])(.*?)\1\s*(?:\)|,)/i.exec(
        link.getAttribute("onclick") || "",
    );
    return matched ? matched[2] : "";
}

/**
 * 读取 WE Learn 扁平列表的层级编号
 *
 * 真实目录用 CSS 类名后缀编码层级：courseware_list_1_3 为技能，
 * courseware_list_1_4 为子模块，courseware_list_1_5 为叶子。
 */
function readLevel(element: Element): number | null {
    const matched = /(?:^|\s)courseware_list_1_(\d+)(?:\s|$)/.exec(element.className || "");
    return matched ? Number(matched[1]) : null;
}

/**
 * 收集当前课件目录中所有可选的节
 *
 * - 优先解析 WE Learn 的「扁平同级列表 + CSS 层级编号」结构；
 * - 同时兼容其它播放模板使用的标准嵌套 ul/li 结构。
 */
export function collectScoItems(doc: Document = document): ScoItem[] {
    const items: ScoItem[] = [];
    const seen = new Set<string>();
    const links = doc.querySelectorAll<HTMLAnchorElement>('a[onclick*="SelectSCO"]');

    for (const link of links) {
        const id = scoIdFromLink(link);
        if (!id || seen.has(id)) continue;
        seen.add(id);

        const path: string[] = [];
        const row = link.closest("li");
        const level = row ? readLevel(row) : null;
        const isFlatList =
            !!row && level !== null && !!row.parentElement?.classList.contains("categoryitems");

        if (isFlatList && row && level !== null) {
            // 真实目录是扁平的同级 li，只能靠类名里的层级数字回溯上层兄弟
            let parentLevel = level;
            for (
                let sibling = row.previousElementSibling;
                sibling;
                sibling = sibling.previousElementSibling
            ) {
                const siblingLevel = readLevel(sibling);
                if (siblingLevel === null || siblingLevel >= parentLevel) continue;
                parentLevel = siblingLevel;
                const heading = sibling.querySelector('a[onclick*="ShowSubMenu"]');
                if (heading) path.unshift(cleanText(heading.textContent));
            }

            const unitContainer = row.closest(".courseware_list_1");
            const unitHeading = unitContainer?.querySelector(".courseware_list_1_1 .v_1");
            if (unitHeading) path.unshift(cleanText(unitHeading.textContent));
        } else {
            // 标准嵌套列表：向上找带子列表的 li，去掉子列表后剩下的文本即标题
            for (
                let ancestor: Element | null = link.parentElement;
                ancestor && ancestor !== doc.body;
                ancestor = ancestor.parentElement
            ) {
                if (ancestor.tagName !== "LI" || !ancestor.querySelector("ul,ol")) continue;
                const heading = ancestor.cloneNode(true) as Element;
                heading
                    .querySelectorAll('ul,ol,a[onclick*="SelectSCO"],script,style,input,button')
                    .forEach((child) => child.remove());
                const title = cleanText(heading.textContent);
                if (title) path.unshift(title);
            }
        }

        // 去掉「Unit 1」之前可能混入的课程名等噪声标题
        const unitIndex = path.findIndex((title) => /\bunit\b|单元/i.test(title));
        if (unitIndex > 0) path.splice(0, unitIndex);

        items.push({
            id,
            title: cleanText(link.textContent) || id,
            unit: path[0] || "课程目录",
            path,
            link,
        });
    }

    return items;
}

/**
 * 获取当前正在学习的一节
 *
 * SelectSCO 通常只更新 li.courseware_current，并不一定改写 ?sco=，
 * 所以优先读取高亮行，读取失败时再回退到 URL 参数。
 */
export function getCurrentScoId(doc: Document = document): string {
    try {
        const current = doc.querySelector('li.courseware_current a[onclick*="SelectSCO"]');
        const id = current ? scoIdFromLink(current) : "";
        if (id) return id;

        const href = doc.location ? doc.location.href : location.href;
        const matched = /[?&]sco=([^&]+)/i.exec(href);
        if (matched) return decodeURIComponent(matched[1]);
    } catch (error) {
        logger.debug(error);
    }

    return "";
}
