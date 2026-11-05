import { store } from "@src/store";
import logger from "@utils/logger";

import { collectScoItems, getCurrentScoId } from "./parser";

/** 节 id -> 是否勾选；缺省视为勾选 */
export type ScoSelection = Record<string, boolean>;

const SCO_SELECTION_KEY = "eocs_sco_selection";
const SCO_SELECTION_VERSION = "v2";
const LEGACY_OWNER_KEY = `${SCO_SELECTION_KEY}:legacy-owner`;

/** localStorage 不可用时的内存兜底 */
const scoSelectionCache = new Map<string, ScoSelection>();

/**
 * 存储 key 以课程（cid/classid）+ 目录为维度隔离
 *
 * 参数名大小写不敏感；没有课程 id 时退化为「按目录 id 排序后的指纹」，
 * 避免把同一门课不同目录（或不同课程）的范围混在一起。
 */
export function scoSelectionStorageKey(doc: Document = document): string {
    const url = new URL(doc.location ? doc.location.href : location.href);
    const params = new Map<string, string>();
    url.searchParams.forEach((value, key) => {
        params.set(key.toLowerCase(), value);
    });

    const course = params.get("cid") || params.get("courseid") || params.get("course_id");
    const classId = params.get("classid") || params.get("class_id") || "";
    const identity = course
        ? [course, classId]
        : collectScoItems(doc)
              .map((item) => item.id)
              .sort();

    return `${SCO_SELECTION_KEY}:${SCO_SELECTION_VERSION}:${JSON.stringify(identity)}`;
}

/** 过滤非法结构、非布尔值与原型污染键 */
function validScoSelection(value: unknown): ScoSelection {
    if (!value || typeof value !== "object" || Array.isArray(value)) return {};

    const selection: ScoSelection = {};
    for (const [id, checked] of Object.entries(value as Record<string, unknown>)) {
        if (id === "__proto__" || id === "constructor") continue;
        if (typeof checked === "boolean") selection[id] = checked;
    }
    return selection;
}

/**
 * 读取刷题范围
 *
 * 非法 JSON / localStorage 异常时回退到内存缓存；
 * 旧的全局 key 只会迁移到第一门访问到的课程，避免污染其它课程。
 */
export function loadScoSelection(doc: Document = document): ScoSelection {
    const key = scoSelectionStorageKey(doc);
    try {
        let raw = window.localStorage.getItem(key);

        if (raw === null && !window.localStorage.getItem(LEGACY_OWNER_KEY)) {
            const legacy = window.localStorage.getItem(SCO_SELECTION_KEY);
            if (legacy !== null) {
                raw = JSON.stringify(validScoSelection(JSON.parse(legacy)));
                window.localStorage.setItem(key, raw);
                window.localStorage.setItem(LEGACY_OWNER_KEY, key);
            }
        }

        const selection = validScoSelection(JSON.parse(raw || "{}"));
        scoSelectionCache.set(key, selection);
        return { ...selection };
    } catch (error) {
        logger.debug(error);
        return { ...(scoSelectionCache.get(key) || {}) };
    }
}

/** 保存刷题范围（同时写入内存缓存，localStorage 失败时仍可用） */
export function saveScoSelection(selection: ScoSelection, doc: Document = document): void {
    const key = scoSelectionStorageKey(doc);
    const clean = validScoSelection(selection);
    scoSelectionCache.set(key, clean);
    try {
        window.localStorage.setItem(key, JSON.stringify(clean));
    } catch (error) {
        logger.debug(error);
    }
}

/**
 * 跳到下一节被勾选的节
 *
 * - null：目录为空，或没有任何节被取消勾选（交回原来的切换逻辑）；
 * - false：当前之后没有可跳的节（范围末尾 / 一节都没勾）；
 * - true：已触发跳转。
 *
 * 开启循环挂机时允许回绕到自身，使「只勾一节」也能原地循环。
 */
export function jumpToNextSelectedSco(doc: Document = document): boolean | null {
    const items = collectScoItems(doc);
    if (!items.length) return null;

    const selection = loadScoSelection(doc);
    if (!items.some((item) => selection[item.id] === false)) return null;

    const startIndex = items.findIndex((item) => item.id === getCurrentScoId(doc));
    let next = items.slice(startIndex + 1).find((item) => selection[item.id] !== false);

    if (!next && store.userSettings.loopRefresh && startIndex >= 0) {
        next = items.slice(0, startIndex + 1).find((item) => selection[item.id] !== false);
    }

    if (!next) return false;

    logger.info({ content: `切换到勾选的节 -> ${next.title}` });
    next.link.click();
    return true;
}
