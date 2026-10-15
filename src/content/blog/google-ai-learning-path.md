---
title: "Google AI 产品全家桶 — 1 天学习路径"
description: "Google I/O 2026 之后,Google AI 产品矩阵(Gemini 3.5 + NotebookLM + Antigravity + Spark)已经成型。本文给零基础者一个 8 小时的最小可行学习路径,学完能在公司做 30-40min 的 Google AI 全产品线分享,内含 3 个演示炸点。"
pubDate: 2026-10-15
tags: [Google AI, Gemini, NotebookLM, Antigravity, 学习路径, AI]
---

## 引子:Google AI 已经从"对话工具"变成"全栈 AI 平台"

Google I/O 2026 之后,Google AI 已经不是"Gemini App 那个聊天机器人"了 —— **它已经是一整套从模型层、平台层到消费层的全栈 AI 产品矩阵**。

如果你是产品经理 / 开发者 / AI 爱好者,你想在公司内部分享 Google AI 全家桶,通常会被这 3 个问题卡住:

1. **产品太多**(Gemini / AI Studio / Vertex / NotebookLM / Antigravity / Spark / Stitch / Opal / Veo / Canvas),看完每个的官方文档要 3 天
2. **不知道演示什么**(每个产品都说自己厉害,真正能在分享里炸场的不超过 3 个)
3. **国内访问不稳定**(Google 服务国内网络经常掉,提前准备什么)

本文给你一个**8 小时最小可行学习路径**,按 MVP 主义展开。学完你能:
- 在公司 AI 小组做一场 30-40 分钟的 Google AI 全产品线分享
- 知道每个产品的定位 + 怎么选 + 怎么用
- 现场演示 3 个炸场点(NotebookLM 播客 / Antigravity 93 Agent / Gemini 多模态)

**重要原则**:本文按"**MVP 主义 + 拿来主义**"展开。所有推荐视频都是已存在的免费资源,所有演示都是 0 成本实操。

---

## 一、Google AI 产品矩阵全景(2026 版)

Google AI 2026 年已经形成清晰的三层架构:

```
┌─ 基础模型层 ─────────────────────────────────┐
│ Gemini 3.5 Flash │ Gemini 3.5 Thinking │ Omni  │
│ (快+便宜,主力)   │ (推理+自反思)        │(视频) │
└───────────────────────────────────────────────┘
         ↓                          ↓
┌─ 开发者平台 ──────┐  ┌─ 消费级产品 ─────────────┐
│ AI Studio (免费入口) │  │ Gemini App (对话/生图)      │
│ Vertex AI (企业级)  │  │ NotebookLM (AI 知识库)      │
│ Antigravity (Agent) │  │ Veo 3.1 (视频生成)          │
│ agy CLI             │  │ Canvas (多模态协作编辑)     │
│ Gemini SDK          │  │ Gemini Spark (个人 AI Agent)│
└─────────────────────┘  └────────────────────────────┘
         ↓                          ↓
┌─ 生态集成 ─────────────────────────────────────┐
│ Workspace (Docs/Sheets/Gmail/Drive 内嵌 AI)     │
│ Chrome (Ask Gemini 侧边栏)                      │
│ Android Halo / Wear OS 7                        │
└─────────────────────────────────────────────────┘
```

**3 层架构意味着什么**:
- **基础模型层**:决定 AI 智能上限(选 Flash 还是 Pro)
- **平台层 + 消费层**:决定你能拿 AI 干什么(AI Studio 给开发者 / NotebookLM 给消费者)
- **生态层**:决定 AI 在你日常环境里用不用得上(Workspace 集成)

**2 个对开发者的关键点**:
1. **AI Studio 是免费入口**(谷歌账号就行),Vertex AI 是企业部署(要收费)
2. **Antigravity 是 Agent-First 开发平台**(对标 Codex / Cursor / Windsurf,但走"管一队 Agent"路线)

---

## 二、8 小时最小可行学习路径(分 5 站)

### 第 1 站(1.5h):Google I/O 2026 快速扫盲

**目标**:建立 Google AI 全局认知,知道有哪些产品、各自解决什么问题。

**推荐资源**(全部免费视频):
- ⭐⭐⭐⭐⭐ [一条视频总结 2026 年谷歌 I/O 大会](https://www.bilibili.com/video/BV163Lk6fEYt/)(~15min,中文精炼,覆盖 Omni / Flash / Antigravity / Spark 全部重磅发布)
- ⭐⭐⭐⭐⭐ [Fireship 熟肉 谷歌 I/O 亮点汇总](https://www.bilibili.com/video/BV1JMVA6rExJ/)(~10min,海外开发者快报,信息密度极高)
- ⭐⭐⭐⭐ [黑鸦 Heya 一个视频带你看完 Google I/O 2026](https://www.bilibili.com/video/BV1EBLC6cEq4/)(~15min,中文深度解读)

**观看建议**:先看 #1 建立全局认知 → #2 用英语视角加深理解 → #3 可选。

### I/O 2026 四个核心发布(必背)

| 发布 | 一句话总结 |
|---|---|
| **Gemini Omni** | "视频版 Nano Banana" —— 任意模态输入 → 视频输出,AI 开始创造世界 |
| **Gemini 3.5 Flash** | Flash 级成本 + 旗舰级智能,**289 tok/s,比竞品快 4 倍** |
| **Antigravity 2.0** | **93 个 Agent 并行,12 小时从零造出操作系统,API 费 < $1000** |
| **Gemini Spark** | 7×24 小时个人 AI Agent,合上笔记本它还在替你干活 |

### 第 2 站(1.5h):Gemini 模型家族 + AI Studio

**目标**:理解 Gemini 模型档位选择 + 能用 AI Studio 动手实操。

**模型档位速查**(对标已发 Q3-Q4 AI 模型行业全景):

| 模型 | 特点 | 适用场景 |
|---|---|---|
| **3.5 Flash** | 289 tok/s,成本低,智能接近上代 Pro | 🔧 日常主力,Agent 多步推理 |
| **3.5 Thinking** | 可见思考过程,复杂推理能力强 | 🧩 数学题、逻辑分析、方案设计 |
| **3.5 Pro** | 最深度推理,上下文窗口大 | 🏗️ 深度研究、Canvas 协作、复杂项目 |
| **Omni** | 任意模态输入 → 视频输出 | 🎬 视频创作、物理模拟、数字人 |

**模型选择口诀**:**Flash(日常)/ Thinking(推理)/ Pro(深度)/ Omni(创作)**。

**推荐资源**:
- ⭐⭐⭐⭐⭐ [Gemini 3.0 从入门到精通,2 小时纯干货](https://www.bilibili.com/video/BV1gsFrzEEbo/)(⚠️ 只看前 30 分钟:模型介绍 + 提示词 + 界面操作)
- ⭐⭐⭐⭐ [Google Gemini 3 入门教程 | 10 种功能一次学会](https://www.bilibili.com/video/BV1XicAzEEHK/)(~20min,界面操作 + 模型选择)
- ⭐⭐⭐⭐ [12 分钟学会 Google AI Studio](https://www.bilibili.com/)(12min,AI Studio 最快入门)

**动手环节(20min)**:
1. 打开 [Google AI Studio](https://aistudio.google.com)(免费,需 Google 账号)
2. 用同一个问题分别测试 3 个模型:
   - **Flash**:问"帮我总结这篇文章的核心观点"
   - **Thinking**:问"这道复杂数学题怎么解,一步步来"
   - **Pro**:上传一张图表让它分析数据趋势
3. 记录速度 / 智能差异的感受

### 第 3 站(1.5h):NotebookLM + 创作工具

**目标**:掌握 Google 最强免费知识库工具 + 了解生成类产品。

**推荐资源**:
- ⭐⭐⭐⭐⭐ [NotebookLM + Gemini 完整课程 3 小时](https://www.bilibili.com/video/BV1U5ZaBLEAD/)(⚠️ 只看前 40 分钟:上传 → 知识库 → 音频播客 → 信息图)
- ⭐⭐⭐⭐ [实测谷歌 I/O 2026 新品全家桶](https://www.bilibili.com/video/BV1HALS6EEpq/)(~12min,中文实测 Veo 3 视频生成 + Canvas + Nano Banana 图像设计)

**NotebookLM 核心能力**:

| 功能 | 说明 | 演示效果 |
|---|---|---|
| **多源知识库** | 上传 PDF/网页/YouTube/文档,构建统一知识库 | ⭐⭐⭐ |
| **AI 音频播客** | **一键生成两个 AI 主持人讨论你文档的播客** | 🔥🔥🔥🔥🔥 |
| **信息图生成** | 自动将文字内容转为可视化信息图 | ⭐⭐⭐⭐ |
| **深度阅读** | 跨文档问答、关联分析、关键点提取 | ⭐⭐⭐⭐ |

**动手环节(15min)**:打开 [NotebookLM](https://notebooklm.google.com)(免费) → 上传一份你熟悉的文档 → 点"**生成音频概览**" → 听 AI 播客怎么讨论你的文档。**这是分享时最炸裂的 Demo**。

### Google 免费 AI 工具清单(全部 0 成本)

| 工具 | 用途 | 免费额度 |
|---|---|---|
| **NotebookLM** | 资料研读 + 音视频摘要 | ✅ 充足 |
| **AI Studio** | 低代码搭建 AI 应用 | ✅ 充足 |
| **Veo 3.1** | 电影感视频生成(通过 AI Studio) | ✅ 有限 |
| **Stitch** | 自然语言生成 UI 设计 | ✅ 免费 |
| **Opal** | AI 工作流自动化 | ✅ 免费 |

### 第 4 站(1.5h):Antigravity + Agent 平台

**目标**:理解 Google 的 Agent-First 开发平台 — 分享中最硬核也最亮眼的部分。

**推荐资源**:
- ⭐⭐⭐⭐⭐ [Antigravity 2.0 保姆级入门 + 进阶](https://www.bilibili.com/video/BV1d9Lm6vEzb/)(~30min,安装 → 创建 → 调用全流程,含 Agent Skills 实战)
- ⭐⭐⭐⭐ [Antigravity IDE 零基础保姆级教程](https://www.bilibili.com/video/BV1RCVB6eEHh/)(~30min,MCP/Skill/Rules/Workflows/Agents 完整演示,免费可用)

**Antigravity 五件套**:

| 组件 | 对标 | 说明 |
|---|---|---|
| **Desktop App** | Codex App | 独立桌面应用,管多 Agent 并行跑 |
| **IDE** | Cursor / Windsurf | VS Code fork,写代码用 |
| **CLI(`agy`)** | Claude Code CLI | Go 重写,启动 < 1 秒 |
| **SDK** | — | `pip install google-antigravity` |
| **Managed Agents** | — | 云端 API 调 Gemini |

### 💡 分享杀手锏:93 个 Agent 造操作系统

> I/O 2026 最震撼 Demo:
> - **93 个子 Agent** 并行工作
> - **12 小时**完成从空白到功能完整的 OS 内核
> - 超 **15,000 次**模型请求,处理 **26 亿 token**
> - API 费用**不到 $1,000**
> - 收尾名场面:**在这个 AI 写的 OS 上跑 DOOM** 🎮

### Antigravity vs 其他 Agent 工具

| 维度 | Antigravity | Codex | Cursor / Windsurf |
|---|---|---|---|
| 设计理念 | 管一队 Agent | 一个 AI 陪你工作 | AI 辅助编程 |
| 核心模型 | Gemini 3.5 Flash | GPT 5.5 | 多模型可选 |
| 独特优势 | Mission Control 多 Agent 并行 | 内置浏览器 + image-2 | pair programming |
| 适合人群 | 架构师 / 团队 lead | 全能用户 / 白领 | 专业开发者 |
| 国内可用性 | ⚠️ 需特殊网络 | ✅ 较友好 | ✅ 较友好 |

### 第 5 站(1.5h):整理分享大纲 + 准备 Demo

**目标**:把学到的东西组织成可分享的结构。

**建议分享大纲(30-40min)**:

```
1. 开场(3min)
   - 一句话定调:Google AI 已从"对话工具"进化为"全栈 AI 平台"
   - I/O 2026 四个关键词:Omni · 3.5 Flash · Antigravity 2.0 · Spark

2. 基础模型层(8min)
   - Gemini 3.5 Flash:旗舰智能 + Flash 级成本,289 tok/s,快 4 倍
   - Gemini Omni:任意模态 → 视频输出(物理世界理解)
   - 📊 模型选择口诀:Flash(日常)/ Thinking(推理)/ Pro(深度)/ Omni(创作)

3. 消费级产品(10min)
   - 🔥 NotebookLM 现场 Demo(上传文档 → 生成播客 → 效果炸裂)
   - Veo 3.1 视频生成 + Canvas 多模态编辑
   - Gemini App + Workspace 集成(Gmail/Docs/Drive 内嵌 AI)

4. Agent 平台(10min,⭐ 重点)
   - Antigravity 2.0:五件套 +"93 Agent 从零造 OS"案例
   - Gemini Spark:7×24 小时个人 AI Agent
   - 💬 讨论:"人类正在被移出回路"——值得讨论的趋势

5. 总结 + Q&A(5min)
   - Google AI 的护城河:模型 × 生态 × Agent 三位一体
   - 对中国用户的影响:生态壁垒 vs 国产替代
   - 推荐进一步学习资源
```

### 分享准备清单

- [ ] AI Studio 账号已注册,能现场打开演示
- [ ] NotebookLM 已上传一份演示文档,音频播客已生成好(备用)
- [ ] Antigravity 93 Agent 案例截图 / 录屏已准备好
- [ ] 关键数字记住:289 tok/s、93 agents、< $1000、26 亿 token
- [ ] 分享大纲打印 / 投屏备注

---

## 三、3 个演示炸场点(选你最熟的 1-2 个)

### 炸点 1:NotebookLM 音频播客(最容易)

**操作步骤**:
1. 上传一份 PDF / 网页 / YouTube 链接到 [NotebookLM](https://notebooklm.google.com)
2. 点"**音频概览**"按钮
3. **两个 AI 主持人会开始讨论你上传的内容**(~5-10 分钟音频)
4. 现场播放,全场震惊

**为什么炸**:
- 不需要你提前录播客,AI 自动生成
- 听起来像真人在讨论,**几乎听不出来是 AI**
- 适用于任何文档(论文 / 报告 / 视频字幕 / 网页)

### 炸点 2:Antigravity 93 Agent 造 OS(最硬核)

**操作步骤**:
1. 录屏准备好 Antigravity Mission Control 截图(12 小时压缩成 1 分钟)
2. 现场展示 93 个 Agent 并行的 Mission Control 界面
3. 关键数字:**93 Agent / 12h / < $1000 / 26 亿 token / DOOM 可运行**
4. 结尾 DOOM 跑起来的录屏是杀手锏

**为什么炸**:
- 单 Agent 已经强;**93 个并行**是降维打击
- 12 小时完成的工作,人类团队需要 **6 个月**
- **API 成本 < $1000**,任何企业都能负担

### 炸点 3:Gemini Omni 视频输出(最新最震撼)

**操作步骤**:
1. 准备一段文字描述(例:"一只机械鸟在日出时飞翔")
2. 用 Gemini Omni 生成 10 秒视频
3. 现场展示视频

**为什么炸**:
- "文字 → 视频"是 AI 内容生成的最终形态
- 1 年前还只能生成静态图像,现在能生成视频
- **创意行业的革命性变化**

### 选 1-2 个,不选 3 个

3 个都演示太花时间,选 1-2 个你最熟的。推荐:**NotebookLM(最容易)+ Antigravity 93 Agent(最硬核)**。

---

## 四、给中国用户的特别提醒

### 4 个限制 + 应对

| 限制 | 应对 |
|---|---|
| **网络不稳定** | 提前准备访问方案(自己解决);分享现场演示前录屏备用 |
| **AI Studio 免费额度国内** | 实际够用(2026 免费额度有所调整),不用过度担心 |
| **Antigravity 国内访问** | 需特殊网络(同 Gemini);现场演示前确认可访问 |
| **Workspace 国内企业版** | 跟 Google Workspace 跨境合规,需企业 IT 评估 |

### 国内替代方案

如果分享对象是纯国内用户,可以临时切到国产替代:
- **Gemini** → **DeepSeek V4.1 Flash**(成本低 + 性能反超,详见 [Q3-Q4 AI 模型行业全景](/blog/ai-models-q3-q4-2026))
- **AI Studio** → **豆包 MarsCode / 文心一言 / 通义千问**
- **NotebookLM** → **Kimi / 智谱清言**(国产 AI 知识库)
- **Antigravity** → **Codex CLI / Claude Code CLI / Kiro**

---

## 五、自测清单(学完后能不能做分享)

- [ ] Gemini 3.5 Flash 为什么是"行业催化剂"?(速度 + 成本双重碾压)
- [ ] Google AI Studio 和 Vertex AI 的区别?(开发者免费入口 vs 企业部署平台)
- [ ] NotebookLM 的核心差异化能力是什么?(多模态知识库 + AI 播客生成)
- [ ] Antigravity 和 Codex / Cursor 的本质区别?(管一队 Agent vs 一个 AI 陪你写)
- [ ] Gemini Omni 的"视频输出"意味着什么?(AI 开始创造世界)
- [ ] Google AI 的护城河是什么?(模型 × 生态 × Agent 三位一体)

**6 个问题都答对了 = 你可以准备 30 分钟开始的分享了。**

---

## 六、补充建议

1. **网络问题**:Google 服务在国内不稳定,提前准备好访问方案
2. **AI Studio 免费额度充足**:不花钱就能学完全部内容
3. **分享 Demo 首选**:
   - 🥇 NotebookLM 生成播客(最快出效果)
   - 🥈 Antigravity 93 Agent 案例(最震撼)
4. **时间砍哪**:Veo 3 / Canvas 部分可砍,NotebookLM + Antigravity 必保

---

## 总结:Google AI 1 天学完不是梦

按本文 8 小时 5 站路径,你可以在 1 天内:
- ✅ 掌握 Google AI 全产品矩阵(13 个产品)
- ✅ 能用 AI Studio 动手实操 4 个模型档位
- ✅ 现场演示 2-3 个 Demo(NotebookLM / 93 Agent / Omni)
- ✅ 在公司做 30-40min 的分享,引发同事惊呼

**最关键的认知**:**Google AI 不再是 Gemini App 那个聊天机器人**,它已经从"对话工具"变成"**全栈 AI 平台**"。

**护城河**:**模型 × 生态 × Agent 三位一体**(模型强 + Workspace 集成 + Antigravity 多 Agent)。这是国产 AI 厂商短期追不上的。

---

## 互链(给读者的延伸阅读)

- → [Q3-Q4 AI 模型行业全景](/blog/ai-models-q3-q4-2026) — Gemini 3.5 Flash 290 tok/s 在 Q3-Q4 大模型全景里的定位
- → [Agent Skills 入门](/blog/agent-skills) — Antigravity 的 Agent Skills 实战细节
- → [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap) — Antigravity IDE 对比学习类
- → [Kiro AI IDE 体验](/blog/kiro-ai-ide) — Kiro AI IDE 对比 Antigravity IDE
- → [Context Engineering 实战](/blog/context-engineering) — Antigravity Context 工程基础
- → [Harness Engineering 第一阶](/blog/harness-engineering-1) — Antigravity Harness 工作流