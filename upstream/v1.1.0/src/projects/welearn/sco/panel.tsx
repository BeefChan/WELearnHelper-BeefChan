import logger from "@utils/logger";

import { collectScoItems, ScoItem } from "./parser";
import { loadScoSelection, saveScoSelection, scoSelectionStorageKey, ScoSelection } from "./selection";

const PANEL_ID = "eocs-sco-panel";
const TOGGLE_ID = "eocs-sco-toggle";
const STYLE_ID = "eocs-sco-style";

interface ScoTreeNode {
    children: Map<string, ScoTreeNode>;
    ids: string[];
    items: ScoItem[];
}

interface PanelGroup {
    checkbox: HTMLInputElement;
    ids: string[];
}

interface PanelLeaf {
    checkbox: HTMLInputElement;
    id: string;
}

/** 只在这种「课程播放页」生效，避免影响其它页面 */
export function isCoursePlayerPage(): boolean {
    return /\.sflep\.com\/(?:student|Student|Course)\/(?:StudyCourse|TryCourse)\.aspx/i.test(
        location.href,
    );
}

/** 面板样式，取自发布版 ui.css 中 #eocs-sco-panel 相关规则 */
const PANEL_STYLE = [
    "#eocs-sco-toggle{position:fixed;right:24px;bottom:100px;z-index:2147483001;display:block;padding:9px 13px;border:1px solid #b9dfe3;border-radius:12px;background:#fff;color:#087581;box-shadow:0 4px 16px #20374b18;font:600 13px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft YaHei',sans-serif;cursor:pointer}",
    "#eocs-sco-toggle[aria-expanded=true]{background:#eaf7f7}",
    "#eocs-sco-toggle:focus-visible{outline:3px solid #14a6b3;outline-offset:3px}",
    "#eocs-sco-panel{position:fixed;right:24px;bottom:148px;z-index:2147483000;display:none;box-sizing:border-box;width:390px;max-width:calc(100vw - 32px);max-height:calc(100dvh - 176px);overflow:auto;background:#fff;color:#182c3c;border:1px solid #dce5ec;border-radius:16px;box-shadow:0 14px 42px #20374b26;font:13px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI','Microsoft YaHei',sans-serif;color-scheme:light}",
    "#eocs-sco-panel.eocs-open{display:block}",
    "#eocs-sco-panel *{box-sizing:border-box}",
    "#eocs-sco-panel .eocs-head{position:sticky;top:0;z-index:1;padding:14px;background:#fff;border-bottom:1px solid #dce5ec}",
    "#eocs-sco-panel .eocs-range-heading{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:15px;font-weight:700}",
    "#eocs-sco-panel .eocs-range-note{margin-top:3px;font-size:12px;color:#536779}",
    "#eocs-sco-panel .eocs-actions{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}",
    "#eocs-sco-panel .eocs-actions button{min-height:30px;padding:3px 10px;border:1px solid #dce5ec;border-radius:7px;background:#f4f8fa;color:#35546a;font:inherit;cursor:pointer}",
    "#eocs-sco-panel .eocs-actions button:hover{background:#eaf7f7}",
    "#eocs-sco-panel label{display:flex;align-items:flex-start;gap:8px;width:100%;min-width:0;min-height:32px;margin:0;padding:6px 10px;cursor:pointer}",
    "#eocs-sco-panel label span{flex:1;min-width:0;overflow-wrap:anywhere}",
    "#eocs-sco-panel input[type=checkbox]{flex:none;width:15px;height:15px;margin:3px 0 0;accent-color:#087f8c;cursor:pointer}",
    "#eocs-sco-panel .eocs-unit-title{background:#eaf4f6;border-left:3px solid #087f8c;color:#164957}",
    "#eocs-sco-panel .eocs-skill-title{background:#f3f7fa;color:#35546a}",
    "#eocs-sco-panel .eocs-sub-title{background:#fbfcfd;color:#526779}",
    "#eocs-sco-panel .eocs-row:hover{background:#f0fafa}",
    "#eocs-sco-panel .eocs-tip{padding-top:6px;font-size:11px;line-height:1.6;color:#526779}",
    "#eocs-sco-panel [hidden]{display:none}",
    "#eocs-sco-panel::-webkit-scrollbar{width:7px;height:7px}",
    "#eocs-sco-panel::-webkit-scrollbar-thumb{background:#c8d5df;border-radius:6px}",
    "@media (max-width:600px){#eocs-sco-toggle{right:16px;bottom:84px}#eocs-sco-panel{right:16px;bottom:130px;max-height:calc(100dvh - 146px)}}",
].join("\n");

let panelSignature = "";
let refreshPanelSelection: (() => void) | null = null;

function injectPanelStyle() {
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = PANEL_STYLE;
    document.head.appendChild(style);
}

/** 按目录结构构建分层树，保留原始顺序与每一级目录 */
function buildScoTree(items: ScoItem[]): ScoTreeNode {
    const root: ScoTreeNode = { children: new Map(), ids: [], items: [] };

    for (const item of items) {
        let node = root;
        node.ids.push(item.id);
        for (const title of item.path.length ? item.path : ["课程目录"]) {
            let child = node.children.get(title);
            if (!child) {
                child = { children: new Map(), ids: [], items: [] };
                node.children.set(title, child);
            }
            node = child;
            node.ids.push(item.id);
        }
        node.items.push(item);
    }

    return root;
}

/** 构建（或按需重建）刷题范围面板 */
export function buildScoSelectionPanel(): void {
    if (window !== window.top || !isCoursePlayerPage() || !document.body) return;

    const items = collectScoItems(document);
    const signature =
        scoSelectionStorageKey(document) +
        JSON.stringify(items.map(({ id, title, path }) => [id, title, path]));

    const previous = document.getElementById(PANEL_ID);
    if (previous && signature === panelSignature) return;
    const wasOpen = !!previous && previous.classList.contains("eocs-open");
    if (previous) previous.remove();

    const oldToggle = document.getElementById(TOGGLE_ID);
    if (oldToggle) oldToggle.remove();

    if (!items.length) {
        refreshPanelSelection = null;
        return;
    }
    panelSignature = signature;

    let selection: ScoSelection = loadScoSelection();
    const root = buildScoTree(items);

    injectPanelStyle();

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.id = TOGGLE_ID;
    toggle.textContent = "刷题范围";
    toggle.setAttribute("aria-controls", PANEL_ID);
    toggle.setAttribute("aria-expanded", String(wasOpen));

    const panel = document.createElement("div");
    panel.id = PANEL_ID;
    if (wasOpen) panel.classList.add("eocs-open");

    const head = document.createElement("div");
    head.className = "eocs-head";

    const heading = document.createElement("div");
    heading.className = "eocs-range-heading";
    heading.textContent = "刷题范围";

    const note = document.createElement("div");
    note.className = "eocs-range-note";
    note.textContent = "自动切换只进入勾选章节";

    const actions = document.createElement("div");
    actions.className = "eocs-actions";

    const tip = document.createElement("div");
    tip.className = "eocs-tip";

    const list = document.createElement("div");

    head.append(heading, note, actions, tip);
    panel.append(head, list);
    document.body.append(toggle, panel);

    toggle.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", String(panel.classList.toggle("eocs-open")));
    });

    const groups: PanelGroup[] = [];
    const leaves: PanelLeaf[] = [];

    const refreshAll = () => {
        leaves.forEach(({ checkbox, id }) => {
            checkbox.checked = selection[id] !== false;
        });
        groups.forEach(({ checkbox, ids }) => {
            const count = ids.filter((id) => selection[id] !== false).length;
            checkbox.checked = count === ids.length;
            checkbox.indeterminate = count > 0 && count < ids.length;
        });

        const count = items.filter((item) => selection[item.id] !== false).length;
        tip.textContent =
            `已选 ${count} / ${items.length} 节` +
            (count
                ? " · 自动保存；当前已打开的节不会撤销"
                : " · 未选择任何节，自动切换将停止");
    };

    const changeSelection = (ids: string[], checked: boolean | undefined) => {
        // 只应用本次操作前先重读，尽量保留其它标签页的改动
        selection = loadScoSelection();
        ids.forEach((id) => {
            if (checked === undefined) delete selection[id];
            else selection[id] = checked;
        });
        saveScoSelection(selection);
        refreshAll();
    };

    const rangeActions: [string, boolean | undefined][] = [
        ["全选", true],
        ["全不选", false],
        ["恢复默认", undefined],
    ];
    for (const [text, checked] of rangeActions) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = text;
        button.addEventListener("click", () => changeSelection(root.ids, checked));
        actions.appendChild(button);
    }

    const renderNode = (node: ScoTreeNode, depth: number) => {
        for (const [name, child] of node.children) {
            const row = document.createElement("label");
            row.className =
                depth === 0 ? "eocs-unit-title" : depth === 1 ? "eocs-skill-title" : "eocs-sub-title";
            row.style.paddingLeft = `${10 + Math.min(depth, 6) * 12}px`;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute(
                depth === 0 ? "data-unit" : depth === 1 ? "data-skill" : "data-sub",
                JSON.stringify(child.ids),
            );
            checkbox.addEventListener("change", () => changeSelection(child.ids, checkbox.checked));

            const label = document.createElement("span");
            label.textContent = name;

            row.append(checkbox, label);
            list.appendChild(row);
            groups.push({ checkbox, ids: child.ids });
            renderNode(child, depth + 1);
        }

        for (const item of node.items) {
            const row = document.createElement("label");
            row.className = "eocs-row";
            row.style.paddingLeft = `${10 + Math.min(depth, 6) * 12}px`;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("data-scoid", item.id);
            checkbox.addEventListener("change", () => changeSelection([item.id], checkbox.checked));

            const label = document.createElement("span");
            label.textContent = item.title;

            row.append(checkbox, label);
            list.appendChild(row);
            leaves.push({ checkbox, id: item.id });
        }
    };

    renderNode(root, 0);

    refreshPanelSelection = () => {
        selection = loadScoSelection();
        refreshAll();
    };
    refreshAll();
}

/**
 * 监听目录与存储变化，自动重建 / 同步面板
 *
 * 注意：必须在课程播放页调用；其它页面调用会被直接忽略。
 */
export function watchScoSelectionPanel(): void {
    if (window !== window.top || !isCoursePlayerPage()) return;

    buildScoSelectionPanel();

    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new MutationObserver((records) => {
        const onlySelfMutation = records.every((record) => {
            const target =
                record.target instanceof Element ? record.target : record.target.parentElement;
            return !!target && !!target.closest(`#${PANEL_ID},#${TOGGLE_ID}`);
        });
        if (onlySelfMutation) return;

        if (timer !== undefined) clearTimeout(timer);
        timer = setTimeout(buildScoSelectionPanel, 200);
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["onclick"],
    });

    window.addEventListener("storage", (event) => {
        if (
            (event.key === null || event.key === scoSelectionStorageKey()) &&
            refreshPanelSelection
        ) {
            refreshPanelSelection();
        }
    });

    logger.debug("已监听刷题范围面板");
}
