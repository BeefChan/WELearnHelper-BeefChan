import styled from "@emotion/styled";

export const MenuBar = styled.div<{ isDragging: boolean }>(
    {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        userSelect: "none",
        padding: "14px 16px",
        position: "relative",
        minHeight: 68,
        height: "auto",
        flexShrink: 0,
        background: "#fff",
        borderBottom: "1px solid #dce5ec",
    },
    ({ isDragging }) => ({
        cursor: isDragging ? "grabbing" : "grab",
    }),
);
