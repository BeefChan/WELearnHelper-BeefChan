import { SectionSetting } from "@utils/setting";

export interface IWELearnExerciseSettings {
    showReference: boolean;
    autoSolve: boolean;
    solveInterval: number;
    defaultBlankAnswer: string;
    autoSubmit: boolean;
    autoNext: boolean;
    autoNextDelay: number;
    autoWait: boolean;
    autoWaitMedia: boolean;
    autoWaitRandomMin: number;
    autoWaitRandomMax: number;
    autoWaitCap: number;
    autoPlayMedia: boolean;
}

export const WELearnExerciseSettings: SectionSetting<IWELearnExerciseSettings>[] = [
    {
        title: "练习",
        settings: [
            {
                id: "showReference",
                name: "显示参考",
                default: true,
                valueType: "boolean",
                description: "是否显示听力、口语参考(适用视听说)",
            },
            {
                id: "autoSolve",
                name: "自动答题",
                default: false,
                valueType: "boolean",
                description: "自动答题开关",
            },
            {
                id: "solveInterval",
                name: "答题间隔",
                default: 1000,
                valueType: "number",
                description: "单位毫秒；自动答题间隔",
            },
            {
                id: "defaultBlankAnswer",
                name: "默认填空",
                default: "Default answer.",
                valueType: "string",
                description: "填空题没有固定|正确答案时，填入的默认值",
            },
            {
                id: "autoSubmit",
                name: "自动提交",
                default: true,
                valueType: "boolean",
                description: "全自动刷题时，答完本节后自动点击提交（会临时绕过二次确认弹窗）",
            },
            {
                id: "autoNext",
                name: "全自动刷题",
                default: false,
                valueType: "boolean",
                description: "自动答题 + 自动提交 + 自动切换到下一节（需要同时开启自动答题）",
            },
            {
                id: "autoNextDelay",
                name: "全自动切换间隔",
                default: 3,
                valueType: "number",
                description: "单位秒；本节提交后再等待多久切到下一节",
            },
            {
                id: "autoWait",
                name: "自动等待",
                default: true,
                valueType: "boolean",
                description: "全自动时，先等待「本页音视频总时长 + 随机时间」再提交/切下一节",
            },
            {
                id: "autoWaitMedia",
                name: "等待计入媒体时长",
                default: true,
                valueType: "boolean",
                description: "是否把本页所有音频/视频的时长计入等待时间（关闭则只按随机时间等待）",
            },
            {
                id: "autoWaitRandomMin",
                name: "随机等待下限",
                default: 60,
                valueType: "number",
                description: "单位秒；媒体时长之外的随机等待下限",
            },
            {
                id: "autoWaitRandomMax",
                name: "随机等待上限",
                default: 180,
                valueType: "number",
                description: "单位秒；媒体时长之外的随机等待上限",
            },
            {
                id: "autoWaitCap",
                name: "等待总上限",
                default: 90,
                valueType: "number",
                description: "单位分钟；防止超长视频把全自动卡住（超过则按上限等待）",
            },
            {
                id: "autoPlayMedia",
                name: "自动播放媒体",
                default: false,
                valueType: "boolean",
                description: "等待期间静音自动播放本页音频/视频（部分浏览器会拦截自动播放）",
            },
        ],
    },
];
