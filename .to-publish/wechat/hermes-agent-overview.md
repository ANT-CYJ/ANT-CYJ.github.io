# Hermes Agent:GitHub 228k⭐ 的本地优先 CLI Agent

> 微信公众号短文 | 约 450 字
> 从博客《Hermes Agent 全景》抽取精华

## 厨房比喻

Code IDE 工具(Codex/Cursor)像"料理包" — 你有食材,AI 帮你快速做出一道菜。

Hermes 像"整套厨房" — 锅碗瓢盆 + 冰箱 + 食材管理 + 自动清洁,你可以做整桌菜。

## 一句话定论

> **Hermes 是"AI Agent 操作系统"** — 7 大模块的完整体系:**2026 GitHub Trending Top 3,228k⭐ 的 Open Source AI Agent。**

## 5 个"其他工具做不到"的能力

**1. 自动进化(Auto-Evolution)** — 5 层机制。复杂任务无 skill 自动创建,执行失败自动修复,记忆周期性自我提醒。实测让 Hermes 监控 GitHub PR,反馈"未用中文"后自动接入翻译 API 优化。

**2. 3275 字符硬约束 + SQLite 全文检索** — OpenClaw 全量注入的痛点。Hermes 方案:记忆有上限,每 10 轮强制沉淀,历史对话可搜索召回。**反直觉设计**:记忆不是越多越好。

**3. Skills 自进化** — 启动即 27 工具 + 79 skills。OpenClaw/Claude Code 的 skill Hermes 能直接用。**Skills 是 AI 自己写给自己用**(LangChain Tools 是开发者写给 AI 用)。

**4. OpenClaw 一键迁移** — `hermes openclaw migrate --dry-run`,阅读理解后重新解析整合,不是机械复制。

**5. ACP 服务化** — `hermes acp` 接入 VS Code / Zed / JetBrains,配合 MCP 协议。

## 5 工具横评

| 工具 | 适合 |
|------|------|
| Hermes | 多场景跨任务,本地优先 |
| Codex/Cursor | 写代码 |
| OpenClaw | 平台覆盖全 |
| Kiro | 规范驱动,AWS 生态 |

## 4 条原则

1. 7 大模块按需选,不是都要开
2. 记忆要硬约束
3. 自动进化要"plan 模式 + 关键暂停"
4. Windows 必须 WSL2 fallback

---

📖 [完整博客:Hermes Agent 全景](https://ant-cyj.github.io/blog/hermes-agent-overview/)

#Hermes #AI #Agent #工具
