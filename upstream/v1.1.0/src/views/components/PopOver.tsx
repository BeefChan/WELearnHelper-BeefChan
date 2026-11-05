import { useRef, useState } from "react";
import {
    useHover,
    useFloating,
    useInteractions,
    flip,
    offset,
    shift,
    FloatingArrow,
    arrow,
    Placement,
    FloatingPortal,
} from "@floating-ui/react";

export default function PopOver({
    children,
    content,
    placement = "top-start",
    disabled = false,
    offsetPixel = 8,
    backgroundColor = "#fff",
    delay = false,
    openDelay = false,
    border = false,
}: {
    children: React.ReactNode;
    content: React.ReactNode;
    placement?: Placement;
    disabled?: boolean;
    offsetPixel?: number;
    backgroundColor?: string;
    delay?: boolean;
    openDelay?: boolean;
    border?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);

    // 部分弹层内容可交互（例如关于页里可展开的「使用引导」），
    // 鼠标移入弹层内部时先不关闭，避免用户点不到内容。
    const isHoveringContent = useRef(false);

    const arrowRef = useRef(null);
    const { x, y, strategy, refs, context } = useFloating({
        open: isOpen,
        onOpenChange: (open) => {
            if (!open && isHoveringContent.current) return;

            setIsOpen(open);
        },
        placement,
        middleware: [
            offset(offsetPixel),
            flip(),
            shift({ crossAxis: true, padding: 8 }),
            arrow({
                element: arrowRef,
            }),
        ],
    });

    const hover = useHover(context, {
        delay: {
            open: openDelay ? 500 : undefined,
            close: delay ? 250 : undefined,
        },
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <>
            <div
                key={`PopOver-content-${content}`}
                ref={refs.setReference}
                {...getReferenceProps()}
            >
                {children}
            </div>
            {/* 确保即使父容器overflow hidden时，popover也能正常显示，通过直接挂在在body上 */}
            <FloatingPortal>
                {isOpen && !disabled && (
                    <div
                        key={`PopOver-tooltip-${content}`}
                        className="eocs-popover"
                        ref={refs.setFloating}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                            maxWidth: 420,
                            maxHeight: "calc(100vh - 32px)",
                            overflow: "auto",
                            background: backgroundColor,
                            color: "#182c3c",
                            border: `1px solid ${border ? "#dce5ec" : "#e3eaf0"}`,
                            borderRadius: 10,
                            fontSize: 13,
                            padding: 10,
                            zIndex: 2147483100,
                            fontFamily:
                                '-apple-system, BlinkMacSystemFont, "Segoe UI", "Microsoft YaHei", sans-serif',
                            lineHeight: 1.6,
                            whiteSpace: "pre-wrap",
                            boxShadow: "0 12px 40px rgba(32, 55, 75, 0.15)",
                        }}
                        onMouseOver={() => {
                            isHoveringContent.current = true;
                        }}
                        onMouseOut={(event) => {
                            // 在弹层内部移动时不关闭；真正移出弹层后再关闭
                            const next = event.relatedTarget as Node | null;

                            if (next && event.currentTarget.contains(next)) return;

                            isHoveringContent.current = false;
                            setIsOpen(false);
                        }}
                        {...getFloatingProps()}
                    >
                        <FloatingArrow ref={arrowRef} context={context} fill={backgroundColor} />
                        {content}
                    </div>
                )}
            </FloatingPortal>
        </>
    );
}
