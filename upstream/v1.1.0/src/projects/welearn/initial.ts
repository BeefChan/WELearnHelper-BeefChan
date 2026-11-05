// 在此处注册(直接调用)各个插件中，app初始化时要执行的函数
import "./exam/initial";
import "./exercise/initial";
import "./time/initial";

import { WELearnAPI } from "@/src/api/welearn";
import { watchScoSelectionPanel } from "./sco/panel";

// 刷题范围面板：只在课程播放页生效（内部有自守卫），
// 不能放进自动挂机的开关分支，否则没开挂机就没有范围选择。
watchScoSelectionPanel();

// 本分支不再调用上游版本检查：其公告只适用于原作者版本，
// 且会把本分支版本号发送到第三方服务器。
// WELearnAPI.checkVersion();
void WELearnAPI;
