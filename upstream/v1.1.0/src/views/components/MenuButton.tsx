import styled from "@emotion/styled";

/** 标题栏右侧的图标按钮：32px 圆角方块，hover 时使用浅青底 */
export const MenuButton = styled.button<{ disabled?: boolean }>({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    padding: 0,
    color: "#3c566b",
    fontSize: 16,
    fontFamily: "inherit",
    lineHeight: "normal",
    background: "#f1f5f8",
    border: "1px solid transparent",
    borderRadius: 9,
    cursor: "pointer",
    transition: "background .15s, border-color .15s",
    "&:hover": {
        background: "#eaf7f7",
        borderColor: "#b9dfe3",
    },
    "&:focus-visible": {
        outline: "3px solid #14a6b3",
        outlineOffset: 3,
    },
    "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.55,
    },
});
