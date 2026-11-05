// 生成扩展清单并打包 dist（替代上游的 python 脚本，避免额外依赖）
// 用法（在 upstream/v1.1.0 下）：node scripts/package-extension.mjs [输出 zip 路径]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const dist = path.join(root, "dist");
const meta = JSON.parse(fs.readFileSync(path.join(root, "metadata.json"), "utf8"));
const project = meta.projects[process.env.COMPILE_PLATFORM || "welearn"];
const template = JSON.parse(fs.readFileSync(path.join(root, "scripts/manifest.template.json"), "utf8"));

if (!fs.existsSync(path.join(dist, "index.js"))) {
    throw new Error("dist/index.js 不存在，请先运行 npm run build:crx");
}

const manifest = {
    ...template,
    version: project.version,
    name: project.name,
    description: project.description,
    homepage_url: meta.homepage,
    action: { ...template.action, default_title: project.name },
    host_permissions: [...project.connect.map((host) => `*://${host}/*`), ...project.matches],
    content_security_policy: {
        ...template.content_security_policy,
        extension_pages:
            "default-src 'self'; " +
            "script-src 'self'; " +
            `connect-src ${project.connect.map((host) => `http://${host}`).join(" ")};`,
    },
};
manifest.content_scripts[0].matches = project.matches;

fs.writeFileSync(path.join(dist, "manifest.json"), JSON.stringify(manifest, null, 4) + "\n", "utf8");
fs.copyFileSync(path.join(root, "static", "welearn.png"), path.join(dist, "icon.png"));

const out = process.argv[2] || `WELearnHelper-${project.version}-ts.zip`;
const abs = path.resolve(root, out);
if (fs.existsSync(abs)) fs.rmSync(abs);
execFileSync("powershell", [
    "-NoProfile",
    "-Command",
    `Compress-Archive -Path '${dist}\\*' -DestinationPath '${abs}' -Force`,
], { stdio: "inherit" });

console.log("打包完成:", abs);
console.log("版本:", manifest.version, "| 主页:", manifest.homepage_url);
