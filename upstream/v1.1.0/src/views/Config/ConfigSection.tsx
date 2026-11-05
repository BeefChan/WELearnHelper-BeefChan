import { GenericSetting } from "../../utils/setting";
import { ConfigControl } from "./ConfigControl";
import { ConfigItem } from "./index";

export function ConfigSection({ settings }: { settings: readonly GenericSetting[] }) {
    return (
        <>
            {settings.map((setting) => {
                const settingId = String(setting.id);

                return (
                    <ConfigItem className="eocs-setting" key={settingId}>
                        <div
                            className="eocs-setting-title"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 10,
                                minHeight: 30,
                                marginBottom: 5,
                                fontSize: 14,
                                fontWeight: 600,
                                color: "#182c3c",
                                lineHeight: "normal",
                            }}
                        >
                            <label htmlFor={`eocs-setting-${settingId}`} style={{ cursor: "pointer" }}>
                                {setting.name}
                            </label>

                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    flexShrink: 0,
                                    lineHeight: "normal",
                                }}
                            >
                                <ConfigControl genericSetting={setting} />
                            </div>
                        </div>

                        <div
                            className="eocs-setting-description"
                            style={{
                                fontSize: 12,
                                lineHeight: 1.6,
                                color: "#536779",
                            }}
                        >
                            {setting.description}
                        </div>
                    </ConfigItem>
                );
            })}
        </>
    );
}
