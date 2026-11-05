// import Swal from "sweetalert2";
import logger from "@/src/utils/logger";
import { collectScoItems } from "@src/projects/welearn/sco/parser";
import { jumpToNextSelectedSco, loadScoSelection } from "@src/projects/welearn/sco/selection";
import { CONSTANT, store } from "@src/store";
import { getValue, setValue } from "@utils/polyfill";

let time = Date.now();
let buffer = time;
function generateRandomInterval() {
    let rate = 1;
    const { randomRefresh, refreshIntervalMin, refreshIntervalMax } = store.userSettings;

    if (randomRefresh) {
        rate = Math.random();
        let currentRate = refreshIntervalMin / refreshIntervalMax;
        if (rate < currentRate) rate = currentRate;
    }

    if (CONSTANT.DEBUG_MODE) {
        logger.debug(refreshIntervalMax * rate * 60 * 1000);
        logger.debug(Date.now() - buffer);
        logger.debug(Date.now() - time);
        buffer = Date.now();
    }

    return rate;
}

function nextChapter() {
    const topWindow = top as Window;

    // 先按用户勾选的「刷题范围」跳转；null 表示没有设置范围，交回原来的逻辑
    const selectionJump = jumpToNextSelectedSco(topWindow.document);
    if (selectionJump !== null) {
        if (selectionJump === false) {
            const selection = loadScoSelection(topWindow.document);
            const anySelected = collectScoItems(topWindow.document).some(
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

    const jumpButtons =
        topWindow.document.querySelectorAll<HTMLLinkElement>('a[onclick^="SelectSCO"]');
    const currentButton = topWindow.document.querySelector("li.courseware_current a");
    // const currentNext = topWindow.document.querySelector(
    //     '[href="javascript:NextSCO();"]',
    // ) as HTMLLinkElement;

    if (currentButton == jumpButtons[jumpButtons.length - 1]) {
        if (store.userSettings.loopRefresh) {
            jumpButtons[1].click(); //跳到开头，并跳过可能的课程说明页
        }
    } else {
        // currentNext.click();
        NextSCO();
    }
}

async function notify() {
    let status = await getValue("hasInformed", false);
    if (!status) {
        // Swal.fire({
        //     title: "挂机(时长)提示",
        //     text: "如果将浏览器置于后台，不一定能自动切换页面",
        //     icon: "info",
        //     confirmButtonText: "了解",
        // });
        await setValue("hasInformed", true);
    }
}

function recur() {
    setTimeout(() => {
        nextChapter();
        recur();
    }, store.userSettings.refreshIntervalMax * generateRandomInterval() * 60 * 1000);
}

export async function autoRefresh() {
    if (store.userSettings.autoRefresh) {
        recur();
        notify();
    }
}
