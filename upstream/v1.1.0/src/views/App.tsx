import { css, Global, Theme, ThemeProvider } from "@emotion/react";

import { ErrorBoundary } from "./components/ErrorBoundary";
import { ConfigPanel } from "./Config";
import { FloatingBall } from "./Floating";
import { LogPanel } from "./Log";

export const theme: Theme = {
    colors: {
        primary: "rgb(255, 255, 255)", // 60%
        secondary: "#f1f5f8", // 30%
        active: "#087f8c", // 10%
        activeSecondary: "#eaf7f7",
        error: "rgb(231, 71, 93)",
    },
    answerTypeColorMapping: {
        GPT: "orange",
        标答: "limegreen",
        无答案: "rgb(231, 71, 93)",
    },
};

export default function App() {
    return (
        <>
            <Global
                // 某些页面，会修改lineHeight，所以手动重置回来
                styles={css`
                    #eocs-helper {
                        all: initial;
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei",
                            sans-serif !important;
                        font-size: 14px;
                        line-height: normal !important;
                        color: #182c3c;
                        color-scheme: light;
                        /* 页面可能很长，所以这里使用 fixed 定位 */
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 99;
                    }

                    #eocs-helper *,
                    .eocs-popover * {
                        box-sizing: border-box;
                    }

                    #eocs-helper button,
                    #eocs-helper input,
                    #eocs-helper textarea {
                        font-family: inherit;
                    }

                    #eocs-helper button {
                        cursor: pointer;
                    }

                    #eocs-helper button:disabled,
                    #eocs-helper input:disabled,
                    #eocs-helper textarea:disabled {
                        cursor: not-allowed;
                    }

                    #eocs-helper :where(button, input, textarea, [role="button"], [role="tab"]):focus-visible {
                        outline: 3px solid #14a6b3;
                        outline-offset: 3px;
                    }

                    #eocs-helper ::-webkit-scrollbar {
                        width: 7px;
                        height: 7px;
                    }

                    #eocs-helper ::-webkit-scrollbar-thumb {
                        background: #c8d5df;
                        border-radius: 6px;
                    }
                `}
            ></Global>
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <LogPanel />
                    <ConfigPanel />
                    <FloatingBall />
                </ErrorBoundary>
            </ThemeProvider>
        </>
    );
}
