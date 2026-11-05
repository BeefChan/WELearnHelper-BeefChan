import { useState } from "react";
import Draggable from "react-draggable";

import { store, useStore } from "../../store";
import PopOver from "../components/PopOver";

export function FloatingBall() {
    const { visibility } = useStore();

    const [isDragging, setIsDragging] = useState(false);

    const openLogPanel = () => {
        store.setVisibility("floating", false);
        store.setVisibility("log", true);
    };

    return (
        <Draggable
            handle="#floating-ball"
            bounds="body"
            onStart={() => {
                setIsDragging(true);
            }}
            onStop={() => {
                setIsDragging(false);
            }}
        >
            <div
                id="floating-ball"
                role="button"
                tabIndex={0}
                aria-label="WELearn 助手；双击打开记录面板"
                title="双击打开助手面板，拖动可移动"
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openLogPanel();
                    }
                }}
                onDoubleClick={openLogPanel}
                style={{
                    position: "fixed",
                    top: "auto",
                    right: 24,
                    bottom: 24,
                    zIndex: 101,
                    width: 64,
                    height: 64,
                    display: visibility.floating ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                    background: "#123f4b",
                    color: "#fff",
                    border: "1px solid #32636d",
                    borderRadius: 20,
                    boxShadow: "0 8px 28px rgba(18, 63, 75, 0.25)",
                    fontWeight: 700,
                    fontSize: 15,
                    lineHeight: 1.4,
                    cursor: isDragging ? "grabbing" : "grab",
                }}
            >
                <PopOver
                    content={"双击悬浮球可以显示日志面板"}
                    disabled={isDragging}
                    placement={"top"}
                    offsetPixel={24}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <span
                            className="eocs-launcher-label"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                lineHeight: 1.4,
                            }}
                        >
                            WE
                            <small
                                style={{
                                    fontSize: 10,
                                    letterSpacing: 1,
                                    color: "#c4e9ed",
                                }}
                            >
                                助手
                            </small>
                        </span>
                    </div>
                </PopOver>
            </div>
        </Draggable>
    );
}
