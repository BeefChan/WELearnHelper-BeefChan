import logger from "@/src/utils/logger";
import { store } from "@store";
import { determineCourseType, initialCourseCatalog } from "./main";

if (location.href.includes("centercourseware.sflep.com")) {
    let bufferUrl = "";
    let solvingUrl = "";
    let solvedUrl = "";

    /** 设置尚未从 storage 读出时不要开始解析，否则首屏会按默认值（全关）跑一次并留下错误状态 */
    function settingsReady() {
        return typeof store.userSettings.autoSolve !== "undefined";
    }

    function watcher() {
        const currentUrl = location.href;
        logger.debug(currentUrl);

        if (!settingsReady()) return;
        if (currentUrl === solvedUrl || currentUrl === solvingUrl) {
            bufferUrl = currentUrl;
            return;
        }

        if (currentUrl !== bufferUrl) {
            store.clearLogs();
            solvingUrl = currentUrl;
            bufferUrl = currentUrl;
            determineCourseType(currentUrl)
                .then(() => {
                    if (store.userSettings.autoSolve) solvedUrl = currentUrl;
                })
                .catch((error) => logger.debug(error))
                .finally(() => {
                    solvingUrl = "";
                });
        }
    }

    // 页面刷新时，会自动销毁，所以这里不主动处理也没啥问题
    setInterval(watcher, 250);
    initialCourseCatalog();
}
