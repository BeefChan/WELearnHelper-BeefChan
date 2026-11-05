# 相对上游 v1.1.0 的修改清单

本仓库包含两套代码：

| 目录 | 内容 |
| --- | --- |
| `src/` | **实际安装使用的扩展**。由上游 v1.1.0 的构建产物修改而来，可直接加载 |
| `upstream/v1.1.0/` | **上游原始工程**（TypeScript + Vite + 锁文件 + 构建脚本），只读参考 |

`upstream/v1.1.0/` 未做任何修改，与上游标签 `v1.1.0`（提交 `3dddb2a`）逐字节一致，可直接用于重建上游基线或作为移植目标。

## 为什么修改的是构建产物

本分支的修改起于已发布的 CRX 解包脚本，因此直接改的是打包后的 `src/index.js` 等文件，而非 TypeScript 源码。这意味着：

- 仓库**提供了本版本的完整可修改源码**（即 `src/` 下的脚本），满足 GPL 对外提供对应源码的要求；
- 仓库也**提供了可重建的上游工程**，任何人可以 `pnpm install && pnpm build:crx` 得到 1.1.0 基线，再对照本清单核对差异；
- 但本分支的修改**尚未合并回 TypeScript 源码**。要彻底消除这一差异，需将下述改动逐条移植到 `upstream/v1.1.0/src/` 后重新构建。

## 修改项对照

### 1. 模块结构（`src/index.js`）

| 位置 | 改动 |
| --- | --- |
| 目录解析 | 新增 `collectScoItems`、`scoIdFromLink`、`scoSelectionStorageKey`，按 `courseware_list_1_N` 层级还原「单元 → 技能 → 子模块」 |
| 范围面板 | 新增 `buildScoSelectionPanel`、`watchScoSelectionPanel`、`loadScoSelection`、`saveScoSelection` |
| 章节跳转 | 新增 `jumpToNextSelectedSco`、`getCurrentScoId`；`nextChapter` 改为优先按所选范围跳转 |
| 自动流程 | 新增 `etAutoWait*`、`etAutoSubmitCurrent`、`etAutoNextFlow`、`etSleepWithAbort` |
| 消息处理 | 重写 `handleAutoNextMessage`，按 iframe 来源树与 SCO 校验通知 |
| 设置同步 | 新增 `settingsFingerprint` 与 `settingsChanged` 消息接收，避免回写循环 |
| 版本检查 | 移除 `WELearnAPI.checkVersion()` 调用 |

### 2. 题型处理（`src/index.js`）

填空、选词、多空格、下拉、判断及连线题的答案写入改为操作课件组件数据模型，而非仅修改 DOM 文本。

### 3. 界面（`src/ui.css` + `src/index.js`）

新增独立样式表并由 `manifest.json` 的 `content_scripts.css` 加载；主面板、设置页、范围面板、悬浮球改为统一的卡片式布局，设置分类改为标签栏。

### 4. 扩展清单与通信

| 文件 | 改动 |
| --- | --- |
| `manifest.json` | 版本 1.1.0 → 1.3.3；`homepage_url` 改为本仓库；新增 `ui.css` 注入 |
| `content.js` | 新增 `chrome.storage.onChanged` 监听，向已打开页面广播 `settingsChanged` |

## 移植回 TypeScript 时的对应位置

供后续把改动搬回上游工程时参考：

| 本仓库文件 | 上游对应位置 |
| --- | --- |
| `src/index.js` 中的 SCO 范围逻辑 | `upstream/v1.1.0/src/projects/welearn/`（时间 / 课程切换相关） |
| `src/index.js` 中的题型处理 | `upstream/v1.1.0/src/projects/welearn/exercise/` |
| `src/index.js` 中的自动流程 | `upstream/v1.1.0/src/projects/welearn/onetap/` 与 `time/` |
| `src/ui.css` 与面板样式 | `upstream/v1.1.0/src/views/` |
| `src/content.js` 设置同步 | `upstream/v1.1.0/src/utils/polyfill/extension/` |

## 重建上游基线

```powershell
cd upstream/v1.1.0
node <pnpm.mjs> install --frozen-lockfile
node <pnpm.mjs> build:crx
```

构建产物输出到 `upstream/v1.1.0/dist/`，可与本仓库 `src/` 对照，确认差异只来自上述修改项。
