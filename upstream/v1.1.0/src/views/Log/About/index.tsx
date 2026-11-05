import { memo } from "react";

import metadata from "@/metadata.json";
import { useTheme } from "@emotion/react";
import type { CSSProperties } from "react";

const textStyle: CSSProperties = {
    margin: "6px 0",
    lineHeight: 1.7,
    overflowWrap: "anywhere",
};

export const About = memo(function () {
    const theme = useTheme();

    const project = metadata.projects.welearn;

    return (
        <div
            style={{
                width: 380,
                maxWidth: "100%",
                boxSizing: "border-box",
                padding: 16,
                color: "#182c3c",
                textAlign: "left",
            }}
        >
            <h3
                style={{
                    margin: "0 0 8px",
                    color: theme.colors.active,
                }}
            >
                {`WELearnHelper ${project.displayVersion} · 非官方修复版`}
            </h3>

            <div style={textStyle}>
                {`当前版本：${project.version}`}
            </div>

            <div style={textStyle}>
                原作者：
                <a
                    href={project.namespace}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: theme.colors.active }}
                >
                    {project.upstreamAuthor}
                </a>
                {` · 原版维护基线 ${project.upstreamVersion}`}
            </div>

            <div style={{ ...textStyle, fontWeight: 600 }}>
                {`后续修改维护：${project.maintainer} · 从 ${project.upstreamVersion} 修改至 ${project.version}`}
            </div>

            <div style={textStyle}>{`AI 协作：${project.aiContributors.join(" / ")}`}</div>

            <div style={{ ...textStyle, fontSize: 12, color: "#536779" }}>
                本分支以原作者 1.1.0
                为基础继续修改；不代表上游停更，也不代表原作者或平台官方。保留原作者署名及 GPL v3 许可证。
            </div>

            <div style={{ ...textStyle, fontSize: 12, color: "#b84949" }}>
                本版本未经过大规模充分测试，覆盖的教材、题型和页面结构有限，可能存在未适配或回归问题；请先在少量章节验证。
            </div>

            <div style={{ borderTop: "1px solid #d9dfe7", marginTop: 12, paddingTop: 10 }}>
                <strong>本版修复与新增</strong>
                <p style={textStyle}>
                    修复刷时长 / 自动挂机相关失效问题，重新适配填空、选词、多空格、选择、判断、下拉及连线等题型处理，并修复设置同步、章节识别和重复切换等问题。
                </p>
                <p style={textStyle}>
                    新增分层刷题范围、媒体时长与随机等待、自动提交和自动下一节组合流程。并非所有教材和题型均支持。
                </p>
            </div>

            <details style={{ marginTop: 10, lineHeight: 1.7 }}>
                <summary style={{ cursor: "pointer", color: theme.colors.active }}>使用引导</summary>
                <p style={textStyle}>1. 先在「刷题范围」勾选章节，并手动进入所选起点。</p>
                <p style={textStyle}>
                    2.
                    自动做题：开启「自动答题」和「全自动刷题」，按需开启「自动提交」。开启自动等待时，等日志中的等待结束后才切换。
                </p>
                <p style={textStyle}>
                    3.
                    仅刷时长：关闭「全自动刷题」及「自动答题」，开启「自动挂机」；切换上下限单位为分钟。按需开启随机延时和循环挂机。
                </p>
                <p style={textStyle}>
                    4.
                    更新后重新加载扩展并刷新整个课程页面。关闭开关不能撤回已提交的答案，时长和进度以平台记录为准。
                </p>
            </details>
        </div>
    );
});
