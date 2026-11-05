import { useEffect, useMemo, useState } from "react";
import Draggable from "react-draggable";

import styled from "@emotion/styled";
import Close from "@icon-park/react/es/icons/Close";
import { animated, config, useSpring } from "@react-spring/web";
import { store, useStore } from "../../store";
import { MenuBar } from "../components/MenuBar";
import { MenuButton } from "../components/MenuButton";
import PopOver from "../components/PopOver";
import { ConfigSection } from "./ConfigSection";
import { IPanel, TabContainer } from "./TabContainer";

/** 设置项卡片 */
export const ConfigItem = styled.div({
    position: "relative",
    marginBottom: 8,
    padding: "12px 14px",
    border: "1px solid #e0e7ee",
    borderRadius: 12,
    background: "#fff",
    transition: "border-color .15s",
    "&:hover": {
        borderColor: "#b6d6db",
    },
});

const ConfigPanelContainer = styled(animated.div)({
    flexDirection: "column",
    width: "min(590px, calc(100vw - 32px))",
    maxHeight: "calc(100vh - 104px)",
    position: "fixed",
    top: 80,
    right: 24,
    zIndex: 2147482001,

    background: "#f4f7fa",
    border: "1px solid #dce5ec",
    borderRadius: 16,
    boxShadow: "0 16px 52px rgba(32, 55, 75, 0.16), 0 2px 8px rgba(32, 55, 75, 0.05)",
    overflow: "hidden",
});

export function ConfigPanel() {
    const { sectionSettings, visibility } = useStore();

    const panel: IPanel[] = useMemo(() => {
        return sectionSettings.map((sectionSetting) => ({
            label: sectionSetting.title,
            content: <ConfigSection settings={sectionSetting.settings} />,
        }));
    }, [sectionSettings]);

    const [isDragging, setIsDragging] = useState(false);

    const [spring] = useSpring(
        () => ({
            opacity: visibility.config ? 1 : 0,
            scale: visibility.config ? 1 : 0,

            config: {
                ...config.wobbly,
            },
            onRest: () => {
                if (!visibility.config) {
                    setDisplay(false);
                }
            },
        }),
        [visibility.config],
    );

    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (visibility.config) {
            setDisplay(true);
        }
    }, [visibility.config]);

    return (
        <Draggable
            handle="#config-panel-menu-bar"
            cancel="#config-panel-close-button"
            bounds="body"
            onStart={() => {
                setIsDragging(true);
            }}
            onStop={() => {
                setIsDragging(false);
            }}
        >
            <ConfigPanelContainer
                id="config-panel"
                style={{
                    display: display ? "flex" : "none",
                    ...spring,
                }}
            >
                <MenuBar id="config-panel-menu-bar" isDragging={isDragging}>
                    <div
                        style={{
                            fontSize: 16,
                            fontWeight: 700,
                            color: "#182c3c",
                        }}
                    >
                        偏好设置
                    </div>

                    <PopOver key="config-panel-close-button" content="关闭设置面板">
                        <MenuButton
                            id="config-panel-close-button"
                            aria-label="关闭设置面板"
                            onClick={() => {
                                store.setVisibility("config", false);
                            }}
                        >
                            {/* ❌ */}
                            <Close
                                theme="filled"
                                size="20"
                                fill="#b84949"
                                strokeWidth={7}
                            />
                        </MenuButton>
                    </PopOver>
                </MenuBar>

                <TabContainer panel={panel} />
            </ConfigPanelContainer>
        </Draggable>
    );
}
