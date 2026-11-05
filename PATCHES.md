# 源码结构与修改清单

## 现在以 TypeScript 源码为准

修改已经**合并回 TypeScript 源码**，`upstream/v1.1.0/` 不再是只读的上游副本，而是本分支的正式源码工程：

| 目录 | 内容 | 状态 |
| --- | --- | --- |
| `upstream/v1.1.0/` | **正式源码**（TypeScript + Vite）。本分支全部改动都在这里，可构建 | 可构建，`npm run build:crx` |
| `src/`（仓库根） | 已发布 1.3.3 的**构建产物**（解包后可直装的脚本），保留用于对照与回滚 | 归档，不再修改 |

也就是说：以后改功能请改 `upstream/v1.1.0/src/`，然后重新构建，不要再改根目录 `src/`。

## 从源码构建

```powershell
cd upstream/v1.1.0
npm install                 # 首次；已安装可跳过
npm run build:crx           # 产出 dist/{index,inject,content,background}.js
npm run package             # 生成 dist/manifest.json + icon.png 并打包 zip
```

`npm run package` 会读取 `metadata.json` 写入版本、主页、权限，避免手改清单。首次需要先在 `package.json` 的 scripts 里加 `"package"`（见下）。

## 本分支相对上游 v1.1.0 的改动

### 新增模块

| 文件 | 作用 |
| --- | --- |
| `src/projects/welearn/sco/parser.ts` | 解析课程目录：真实播放页是「同级列表 + `courseware_list_1_N` 层级编号」，按数字回溯拼出「单元 → 技能 → 子模块」；同时兼容标准嵌套 ul/li |
| `src/projects/welearn/sco/selection.ts` | 按课程 / 班级隔离的勾选存储，非法数据与 storage 异常兜底，旧全局 key 一次性迁移；`jumpToNextSelectedSco` 负责按所选范围跳转 |
| `src/projects/welearn/sco/panel.tsx` | 「刷题范围」浮层（纯 DOM），全选 / 全不选 / 恢复默认、半选、目录变化重建、跨标签页同步 |
| `src/projects/welearn/onetap/autoFlow.ts` | 自动等待（媒体时长 + 随机）→ 自动提交（进度与答案校验）→ 自动下一节；iframe 来源树校验与 `AUTO_NEXT` 消息去重 |

### 修改模块

| 文件 | 改动 |
| --- | --- |
| `src/projects/welearn/time/main.ts` | `nextChapter()` 优先按所选范围跳转，再走原有逻辑 |
| `src/projects/welearn/exercise/et/solver.ts` | 作答改为写入课件 Angular 组件数据模型（`blank.value`、`choice.value`、`select.value`、`tof.value`），连线改为点圆圈由课件写 `answers`；新增组件就绪等待、两轮重试、按组件幂等 |
| `src/projects/welearn/exercise/et/parser.ts` | 答案去首尾空白；`key` 属性缺失时不再把 null 当字符串用 |
| `src/projects/welearn/exercise/initial.ts` | 设置未加载完成不解析；同一页不重复处理 |
| `src/projects/welearn/exercise/setting.ts` | 新增 9 个全自动相关设置项 |
| `src/projects/welearn/exercise/main.ts` | 等待作答完成后再进入提交流程；记录可继续状态；开启全自动时启动流程 |
| `src/projects/welearn/initial.ts` | 注册刷题范围面板；移除上游版本检查调用 |
| `src/utils/polyfill/extension/content.ts` | 设置变化广播给已打开页面 |
| `src/views/**` | 主窗口卡片化、运行状态条、设置页标签栏与卡片、关于页署名与使用引导、悬浮球改版 |
| `metadata.json` | 版本 1.3.3 / 展示 1.33、主页改本仓库、维护者与协作署名 |

### 已知与上游不一致的小取舍

- 日志窗口沿用 `react-rnd` 固定像素宽度，未复刻发布版基于 CSS 的窄屏自适应；设置面板已自适应。
- 数据源里的「口语 / 排序」等无标准答案题型仍不作答。

## 已发布产物说明

- Release `v1.3.3` 里的 ZIP 来自根目录 `src/`（当时直接改产物的版本）。
- 由 TypeScript 源码重新构建的版本在 `upstream/v1.1.0/dist/`，可作为下一版（如 1.3.4）发布；两者的功能集合一致，实现位置不同。
