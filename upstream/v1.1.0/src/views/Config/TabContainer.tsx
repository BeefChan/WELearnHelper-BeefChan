import styled from "@emotion/styled";

import { store, useStore } from "../../store";

export interface IPanel {
    label: string;
    content: JSX.Element;
}

const Tabs = styled.div({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: 0,
    overflow: "hidden",
});

/** 横向可滚动的分类标签栏 */
const TabList = styled.div({
    display: "flex",
    gap: 6,
    padding: "10px 14px",
    margin: 0,
    overflowX: "auto",
    flexShrink: 0,
    background: "#f7f9fb",
    borderBottom: "1px solid #dce5ec",
});

const Tab = styled.button<{ $selected: boolean }>(
    {
        height: 34,
        minWidth: 60,
        flexShrink: 0,
        margin: 0,
        padding: "0 13px",
        border: 0,
        borderRadius: 9,
        background: "transparent",
        color: "#536779",
        fontSize: 13,
        fontWeight: 600,
        fontFamily: "inherit",
        lineHeight: "normal",
        cursor: "pointer",
        transition: "background .15s, color .15s",
        "&:focus-visible": {
            outline: "3px solid #14a6b3",
            outlineOffset: 2,
        },
    },
    ({ $selected }) => ({
        background: $selected ? "#087f8c" : "transparent",
        color: $selected ? "#fff" : "#536779",
        "&:hover": {
            background: $selected ? "#0a6d78" : "#eaf2f5",
            color: $selected ? "#fff" : "#182c3c",
        },
    }),
);

const TabBody = styled.div({
    minHeight: 0,
    margin: 0,
    padding: 14,
    overflowY: "auto",
    maxHeight: "calc(100vh - 240px)",
    background: "#f4f7fa",
});

export function TabContainer({ panel }: { panel: IPanel[] }) {
    const { tabIndex } = useStore();

    const active = Math.min(tabIndex, Math.max(0, panel.length - 1));

    return (
        <Tabs className="eocs-tabs">
            <TabList className="eocs-tab-list" role="tablist" aria-label="设置分类">
                {panel.map((item, index) => (
                    <Tab
                        key={item.label}
                        type="button"
                        className="eocs-tab"
                        id={`eocs-tab-${index}`}
                        role="tab"
                        aria-selected={active === index}
                        aria-controls="eocs-settings-content"
                        tabIndex={active === index ? 0 : -1}
                        $selected={active === index}
                        onClick={() => {
                            store.setTabIndex(index);
                        }}
                        onKeyDown={(event) => {
                            let next = index;

                            if (event.key === "ArrowRight") next = (index + 1) % panel.length;
                            else if (event.key === "ArrowLeft")
                                next = (index + panel.length - 1) % panel.length;
                            else if (event.key === "Home") next = 0;
                            else if (event.key === "End") next = panel.length - 1;
                            else return;

                            event.preventDefault();
                            store.setTabIndex(next);
                            document.getElementById(`eocs-tab-${next}`)?.focus();
                        }}
                    >
                        {item.label}
                    </Tab>
                ))}
            </TabList>

            <TabBody
                className="eocs-tab-body"
                id="eocs-settings-content"
                role="tabpanel"
                aria-labelledby={`eocs-tab-${active}`}
            >
                {panel[active]?.content}
            </TabBody>
        </Tabs>
    );
}
