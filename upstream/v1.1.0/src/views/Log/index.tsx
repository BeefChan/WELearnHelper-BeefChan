import "simplebar-react/dist/simplebar.min.css";

import { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import SimpleBar from "simplebar-react";

import { Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Close from "@icon-park/react/es/icons/Close";
import Info from "@icon-park/react/es/icons/Info";
import SettingTwo from "@icon-park/react/es/icons/SettingTwo";
import { animated, config, useSpring } from "@react-spring/web";

import metadata from "../../../metadata.json";
import { store, useStore } from "../../store";
import { MenuBar } from "../components/MenuBar";
import { MenuButton } from "../components/MenuButton";
import PopOver from "../components/PopOver";
import { About } from "./About";
import { ErrorRecord } from "./records/Error";
import { InfoRecord } from "./records/Info";
import { QuestionRecord } from "./records/Question";

function dispatchRecord(record: any) {
    let recordDisplay;

    switch (record.type) {
        case "info":
            recordDisplay = <InfoRecord record={record} />;
            break;

        case "question":
            recordDisplay = <QuestionRecord record={record} />;
            break;

        case "error":
            recordDisplay = <ErrorRecord record={record} />;
            break;

        default:
            recordDisplay = (
                <div
                    style={{
                        lineHeight: "24px",
                    }}
                >
                    {JSON.stringify(record)}
                </div>
            );
            break;
    }

    return recordDisplay;
}

/** 运行状态胶囊：根据当前开启的自动功能显示模式 */
const StatusPill = styled.span<{ $active: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 9px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: ${(props) => (props.$active ? "#e7f7f0" : "#eef3f7")};
    color: ${(props) => (props.$active ? "#146848" : "#43586c")};

    &::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
    }
`;

/** 单条日志：白底卡片 + 左侧彩色竖条（错误红、题目青绿） */
const RecordContainer = styled.div<{ $recordType?: string }>(
    {
        marginBottom: 8,
        padding: "10px 12px",
        background: "#fff",
        border: "1px solid #e0e7ee",
        borderLeft: "3px solid #c4d4e2",
        borderRadius: 10,
        fontSize: 13,
        lineHeight: 1.7,
        overflowWrap: "anywhere",
        textAlign: "left",
        transition: "border-color .15s",
    },
    ({ $recordType }) => {
        const accent =
            $recordType === "error" ? "#d95757" : $recordType === "question" ? "#087f8c" : "#c4d4e2";

        return {
            ...($recordType === "error"
                ? { background: "#fffafa", borderLeftColor: accent }
                : $recordType === "question"
                ? { borderLeftColor: accent }
                : {}),
            "&:hover": {
                borderColor: "#c6dbe3",
                borderLeftColor: accent,
            },
        };
    },
);

export function LogPanel() {
    const { visibility, logs, userSettings } = useStore();

    // 新版「全自动刷题」开关由 projects/welearn/exercise/setting.ts 提供
    const { autoNext, autoSolve, autoRefresh } = userSettings;

    const modeLabel =
        autoNext && autoSolve
            ? "全自动已开启"
            : autoRefresh && !autoNext
            ? "定时挂机已开启"
            : autoSolve
            ? "自动答题已开启"
            : "自动功能已关闭";

    const modeActive = !!(autoSolve || autoRefresh);

    const [isDragging, setIsDragging] = useState(false);

    const theme = useTheme();

    const [spring] = useSpring(
        () => ({
            opacity: visibility.log ? 1 : 0,
            scale: visibility.log ? 1 : 0,
            config: {
                ...config.wobbly,
            },
            onRest: () => {
                if (!visibility.log) {
                    setDisplay(false);
                }
            },
        }),
        [visibility.log],
    );

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (visibility.log) {
            setDisplay(true);
        }
    }, [visibility.log]);

    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width: 520,
                height: 420,
            }}
            minWidth={350}
            maxWidth={600}
            minHeight={100}
            maxHeight={600}
            bounds="window"
            cancel="#log-panel-menu-buttons"
            dragHandleClassName="log-panel-menu-bar"
            onDragStart={() => {
                setIsDragging(true);
            }}
            onDragStop={() => {
                setIsDragging(false);
            }}
            // 默认grid为1，导致rerender次数过多，看起来很卡顿
            // 所以主动调大grid增加卡顿感，掩盖因为render导致的卡顿
            resizeGrid={[20, 20]}
            enableResizing={{
                top: false,
                right: true,
                bottom: false,
                left: true,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            }}
        >
            <animated.div
                className="eocs-log-window"
                style={{
                    zIndex: 2147482000,
                    width: "100%",
                    maxHeight: "min(640px, calc(100vh - 32px))",
                    background: "#fff",
                    border: "1px solid #dce5ec",
                    borderRadius: 16,
                    boxShadow:
                        "0 16px 52px rgba(32, 55, 75, 0.16), 0 2px 8px rgba(32, 55, 75, 0.05)",
                    display: display ? "flex" : "none",
                    flexDirection: "column",
                    lineHeight: 1.6,
                    overflow: "hidden",
                    ...spring,
                }}
            >
                <MenuBar
                    id="log-panel-menu-bar"
                    className="log-panel-menu-bar"
                    isDragging={isDragging}
                >
                    <div
                        className="eocs-brand-heading"
                        style={{
                            minWidth: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <span
                            className="eocs-brand-title"
                            style={{
                                fontSize: 16,
                                fontWeight: 700,
                                letterSpacing: ".15px",
                                color: "#182c3c",
                            }}
                        >
                            WELearn 学习助手
                        </span>

                        <span
                            className="eocs-brand-subtitle"
                            style={{
                                fontSize: 11,
                                fontWeight: 400,
                                color: "#536779",
                            }}
                        >
                            {`BeefChan · ${metadata.projects.welearn.displayVersion} 非官方修复版`}
                        </span>
                    </div>

                    <div
                        id="log-panel-menu-buttons"
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 6,
                            flexShrink: 0,
                        }}
                    >
                        <PopOver
                            key="about"
                            content={<About />}
                            openDelay
                            delay
                            placement="right"
                            border
                        >
                            <MenuButton aria-label="关于与使用引导">
                                <Info
                                    theme="filled"
                                    size="22"
                                    fill={theme.colors.active}
                                    strokeWidth={5}
                                />
                            </MenuButton>
                        </PopOver>

                        <PopOver
                            key="config"
                            content={`${visibility.config ? "关闭" : "打开"}设置面板`}
                        >
                            <MenuButton
                                aria-label={visibility.config ? "关闭设置" : "打开设置"}
                                onClick={() => {
                                    store.setVisibility("config", !visibility.config);
                                }}
                            >
                                <SettingTwo
                                    theme="multi-color"
                                    size="22"
                                    fill={["#35546a", "#dce5ec", "#087f8c", "#ffffff"]}
                                    strokeWidth={3}
                                />
                            </MenuButton>
                        </PopOver>

                        <PopOver key="minimize" content="最小化当前窗口">
                            <MenuButton
                                aria-label="最小化窗口"
                                onClick={() => {
                                    store.setVisibility("log", false);
                                    store.setVisibility("floating", true);
                                }}
                            >
                                <Close theme="filled" size="20" fill="#b84949" strokeWidth={7} />
                            </MenuButton>
                        </PopOver>
                    </div>
                </MenuBar>

                <SimpleBar
                    id="log-panel-log-container"
                    style={{
                        background: "#f4f7fa",
                        padding: 12,
                        flexGrow: 1,
                        minHeight: 120,
                        maxHeight: "min(450px, calc(100vh - 200px))",
                    }}
                >
                    <Global
                        styles={{
                            ".simplebar-track.simplebar-vertical": {
                                width: "9px !important",
                            },
                        }}
                    />

                    <div
                        className="eocs-status-bar"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "center",
                            gap: 8,
                            padding: "10px 16px",
                            background: "#fbfcfd",
                            borderBottom: "1px solid #dce5ec",
                            flexShrink: 0,
                        }}
                    >
                        <StatusPill className="eocs-status-pill" $active={modeActive} data-active={modeActive}>
                            {modeLabel}
                        </StatusPill>

                        <span style={{ fontSize: 12, color: "#607589" }}>
                            {`${logs.length} 条记录`}
                        </span>
                    </div>

                    {logs.length === 0 ? (
                        <div
                            className="eocs-empty-state"
                            style={{
                                padding: "26px 18px",
                                textAlign: "center",
                                fontSize: 13,
                                color: "#536779",
                            }}
                        >
                            <strong
                                style={{
                                    display: "block",
                                    marginBottom: 6,
                                    fontSize: 16,
                                    color: "#182c3c",
                                }}
                            >
                                暂无记录
                            </strong>
                            <span>
                                在「设置」中开启自动答题或定时挂机后，运行记录会显示在这里。
                            </span>
                        </div>
                    ) : (
                        logs.map((record) => {
                            return (
                                // hasExtra => !disabled，避免页面上的PopOver过多，略微优化一下性能
                                <PopOver
                                    key={record.timestamp}
                                    content={record.extra}
                                    placement={"right"}
                                    disabled={record.extra === undefined}
                                    delay={record.type === "error"}
                                >
                                    <RecordContainer
                                        className="eocs-log-record"
                                        data-type={record.type}
                                        $recordType={record.type}
                                        style={{
                                            // 某些页面会修改lineHeight，所以手动重置回来
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        {dispatchRecord(record)}
                                    </RecordContainer>
                                </PopOver>
                            );
                        })
                    )}
                </SimpleBar>
            </animated.div>
        </Rnd>
    );
}
