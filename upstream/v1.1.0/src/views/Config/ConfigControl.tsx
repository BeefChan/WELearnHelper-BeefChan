import { useDebounceFn } from "ahooks";
import { useEffect, useState } from "react";

import { animated, config, useSpring } from "@react-spring/web";

import { store, useStore } from "../../store";
import { GenericSetting } from "../../utils/setting";
import Switch from "../components/Switch";

const inputStyle = {
    background: "#f7fafc",
    color: "#182c3c",
    border: "1px solid #cfdae4",
    borderRadius: 8,
    padding: "6px 8px",
    fontSize: 13,
    fontFamily: "inherit",
    lineHeight: "normal",
} as const;

export function ConfigControl({
    genericSetting: { id, name, valueType, readonly },
}: {
    genericSetting: GenericSetting;
}) {
    const [statusText, setStatusText] = useState("");

    const [spring, api] = useSpring<{ right: string; opacity: number }>(() => ({
        config: {
            ...config.wobbly,
        },
    }));

    const { userSettings } = useStore();

    const value = userSettings[id as keyof typeof userSettings];

    const [localValue, setLocalValue] = useState(value);

    const { run: onChangeDebounced } = useDebounceFn(
        (newValue: any) => {
            if (newValue === value) return;

            // @ts-ignore
            store.userSettings[id as keyof typeof userSettings] = newValue;
            setStatusText("保存成功");

            setTimeout(() => {
                setStatusText("");
            }, 1000);
        },
        {
            wait: 1000,
        },
    );

    useEffect(() => {
        api.start({
            right: statusText ? "0%" : "-100%",
            opacity: statusText ? 1 : 0,
        });
    }, [statusText]);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    useEffect(() => {
        onChangeDebounced(localValue);
    }, [localValue]);

    const elementId = `eocs-setting-${String(id)}`;

    let element: JSX.Element;

    switch (valueType) {
        case "string":
            element = (
                <textarea
                    id={elementId}
                    aria-label={name}
                    value={localValue as string}
                    onBlur={(e) => setLocalValue(e.target.value)}
                    onChange={(e) => setLocalValue(e.target.value)}
                    disabled={readonly}
                    style={{
                        ...inputStyle,
                        width: 160,
                        maxWidth: "100%",
                        minHeight: 34,
                        height: 40,
                        resize: "none",
                    }}
                ></textarea>
            );

            break;
        case "number":
            element = (
                <input
                    id={elementId}
                    aria-label={name}
                    type={"number"}
                    value={localValue as number}
                    onBlur={(e) => setLocalValue(e.target.value)}
                    onChange={(e) => setLocalValue(e.target.value)}
                    style={{
                        ...inputStyle,
                        width: 82,
                        minHeight: 34,
                        textAlign: "center",
                    }}
                    disabled={readonly}
                ></input>
            );

            break;
        case "boolean":
            element = (
                <Switch
                    id={elementId}
                    height={22}
                    checked={localValue as boolean}
                    onChange={setLocalValue}
                    disabled={readonly}
                />
            );

            break;
    }

    return (
        <div
            style={{
                lineHeight: "normal",
                display: "flex",
                alignItems: "center",
                position: "relative",
            }}
        >
            <animated.div
                style={{
                    position: "relative",
                    marginRight: 4,
                    ...spring,
                }}
            >
                {statusText}
            </animated.div>
            <div
                style={{
                    maxWidth: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {element}
            </div>
        </div>
    );
}
