---
title: 'DeepSeek V4.1 Flash:Flash 价位拿到旗舰能力,V4 Pro 请求自动切换到 V4.1 Flash'
description: '2026-09-10 正式上线的 DeepSeek V4.1 Flash:原生一体化多模态(不再外挂视觉)、300-500 token/s 速度、性能反超 V4 Pro、降价 77%。最大的坑是 V4 Pro 请求会被自动路由到 V4.1 Flash,直到 V4.1 Pro 上线。'
pubDate: 2026-09-10
tags: ['AI', 'DeepSeek', '工具', '趋势', '国产']
---

> 这篇博客的素材来自我自己 LLM Wiki 知识库里今天(9/10)刚写的 V4.1 Flash 发布笔记,综合了 DeepSeek 官方通知 + 5 个外部新闻源(澎湃 / 中关村在线 / IT之家 / 凤凰科技 / Pandaily)+ 社区实测。原文 7.2KB。我把它重写成一篇"V4 Pro 用户迁移指南"视角的实战文章,跟已发的 [DeepSeek Harness 全景](/blog/deepseek-harness-overview) 形成"老产品 + 新底层模型"对位。

---

## 0. 一句话定论

**DeepSeek V4.1 Flash = Flash 价位拿到旗舰能力**:原生一体化多模态、300-500 token/s 速度、官方称性能反超 V4 Pro、降价 77%。

**最关键的机制**:**V4 Pro 请求会被自动路由到 V4.1 Flash,按 Flash 低价计费**。你代码里写 `deepseek-v4-pro` 也照样切换,直到 V4.1 Pro 上线。

---

## 1. 3 个关键事实

### 事实 1:今天(9/10)正式上线

DeepSeek V4.1 Flash 2026-09-10 正式上线 + 新定价生效 + V4 Pro 自动路由开启。

时间线:
- **9/8** — V4.1 Flash 中间版内测,临时 ID `deepseek-v4.1-flash-expires-on-0910`
- **9/9** — 官方官宣:9/10 前后正式发布
- **9/10** — 正式上线 + 新定价生效 + 自动路由开启

产品节奏:**V4 Flash (7/31 公测) → V4 Pro (8/13 正式) → V4 Flash Vision Exp (8/21 / 8/31 开源) → V4.1 Flash (9/10 上线)**

### 事实 2:这是"Flash 价位 + 旗舰能力"

不是简单升级 V4 Flash — **是用 Flash 的钱,买到 V4 Pro 的能力**。官方称在性能/费用/速度/总用时上全面超越 V4 Pro,社区实测:
- 代码、数学、长文本、逻辑推理基准 V4.1 Flash 已超 V4 Pro
- 成本下降约 **77%**(受时段/缓存命中影响)

### 事实 3:会自动路由 V4 Pro

**最关键的暗坑** — V4.1 Flash 上线后、V4.1 Pro 上线前,**所有发往 `deepseek-v4-pro` 的请求自动路由到 V4.1 Flash,按 Flash 单价计费**。

表现:
- 调用端(CC-Switch / Claude Code / Codex / Hermes)的 model 字段**仍显示 `deepseek-v4-pro`**
- 只有 DeepSeek 开放平台账单能看到 Flash 计价
- 这种路由**非永久**,V4.1 Pro 发布后官方可能调整

---

## 2. 4 大核心亮点

### ⭐ 原生多模态(最大升级)

旧 V4-Flash-Vision-Exp(8/21)是"文本底座外挂视觉编码器",**图文割裂、延迟偏高**。

V4.1 Flash 是**原生一体化多模态** — 文本与图像同一套架构、同一 stack 处理,图文混合推理不再割裂。

**效果**:
- 看图同时理解代码逻辑
- 图表箭头、手写批注一气呵成
- 延迟大幅下降

**类比给你:** 旧 Vision 像是"戴个 VR 头显看手机屏幕",V4.1 Flash 是"双眼裸眼看 3D"。

### ⭐ 生成速度极强

社区实测 **284-507 token/s**(原文称稳定 427,峰值 500+),对比 V4 约 **97 token/s**。

长上下文检索、SVG 代码生成等任务比 V4-Flash-Vision-Exp 快约 **3.9-6 倍**。

**类比:** 从"高速列车"提速到"磁悬浮"。

### ⭐ 性能反超 V4 Pro + 成本下降

代码、数学、长文本、逻辑推理基准 V4.1 Flash 已超 V4 Pro。

成本下降约 **77%**(原文社区评测) — 但**注意**:这是单价与推理效率的下降,**不必然是总花费更低**(下面短板会讲)。

### ⭐ 百万 token 上下文

延续 V4 系列 1M 上下文,长文档/合同/简历一次性全文分析保留,推理效率优化。

---

## 3. 定价对比(降价 60%)

| 阶段 | 输入(缓存命中) | 输入(未命中) | 输出 |
|------|------:|------:|------:|
| 内测·空闲 | 0.05 元/M | 1.5 元/M | 4.5 元/M |
| 内测·高峰 | 0.1 元/M | 3 元/M | 9 元/M |
| **正式·空闲(9/10 起)** | **0.02 元/M** | **1 元/M** | **4 元/M** |
| **正式·高峰** | **0.04 元/M** | **2 元/M** | **8 元/M** |

(单位:每百万 tokens)

**核心变化**:正式上线后 Flash 系列降价,缓存命中输入**下调 60%**(0.05 → 0.02 元/M)。

---

## 4. 自动路由 + 两种调用模式

### 方案 A:自动路由(懒人模式)

- **不改任何配置**,继续用 `deepseek-v4-pro`
- 调用端 model 字段仍显示 V4 Pro,账单按 Flash 计价
- **风险**:官方路由策略可能调整

### 方案 B:独立直连(开发模式)

- CC-Switch / 各种工具**手动新增自定义模型**,填 V4.1 Flash 正式 ID
- model 字段真实显示 V4.1 Flash,链路清晰
- 不受官方路由策略影响,**稳定可控**

**我的建议**:
- **日常使用 / 不想折腾** → 方案 A(自动路由)
- **开发调试 / 需要对比测试 / 生产环境** → 方案 B(独立直连)

---

## 5. 6 条短板(必看)

新东西刚上线,这些坑必须心里有数:

1. **过度思考** — 简单问题易写冗长推理,可用系统提示词限制长度
2. **复杂任务 token 消耗更高** — 实测 14 组任务累计 3 亿 token / 61.96 元,比 V4 多约 **36%**(多 Agent 倾向)
3. **长上下文仍有短板** — 长文写作曾出现前后数字不一致
4. **非视觉端到端任务** — 完成时间无明显变化(速度提升主要在多模态场景)
5. **刚上线边界未验证** — 复杂 Agent 循环、多轮长对话幻觉/指令跟随稳定性需生产环境踩坑
6. **PDF 需转图** — API 不支持直接上传 PDF,需转图片页或提取文本

**关键洞察**:"更便宜"指**单价 + 推理效率**下降,但**多 Agent 场景总花费可能更高**。如果你的工作流重度依赖 V4.1 Flash 多 Agent,实际账单要重新算。

---

## 6. 迁移配置指南(5 工具)

**通用前置**:
- 拿到 V4.1 Flash 正式模型 ID
- API Key 沿用现有 DeepSeek 密钥
- API 地址统一 `https://api.deepseek.com/v1`
- ⚠️ **全部新增条目,保留旧 V4 Pro,不覆盖不删除**

| 工具 | 操作要点 |
|------|---------|
| **CC-Switch**(Claude Code + Codex 共用) | 模型管理 → 添加自定义模型:名称 `DeepSeek V4.1 Flash`,Model ID 填正式 ID;`/switch model` 选中 |
| **MiniMax** | 模型设置 → 添加模型:服务商 DeepSeek,API 地址 `.../v1`,Model ID 填正式 ID |
| **Hermes** | Settings → Model Providers → Add Provider → DeepSeek → Add Model |
| **CodeBuddy** | API 模型配置 → 添加 DeepSeek → 模型别名 + Model ID |
| **WorkBuddy** | 模型/API 配置 → 添加 DeepSeek → 模型显示名 + Model ID |

**统一验证**:
- 每工具跑 ①纯代码任务 ②上传报错截图定位 bug
- 核对 DeepSeek 后台日志 `model=V4.1 Flash`、账单为 Flash 单价

---

## 7. 跟 DeepSeek Harness + Kiro 的对位

V4.1 Flash 不是孤立事件,是 **2026 年 9 月 AI 编程赛道升级**的缩影:

| 维度 | DeepSeek Harness(8/22 发的老产品) | V4.1 Flash(9/10 新底层) | Kiro(AWS · 国际) |
|------|----------------------------------|-----------------------|------------------|
| **层面** | 产品层(Harness 框架) | 模型层(底层引擎) | 工具层(IDE 工作流) |
| **核心价值** | 插件化系统级治理 | 原生多模态 + 速度 + 降价 | 规范驱动开发 |
| **价位** | 暂未公布 | **Flash 低价 + V4 Pro 能力** | $20-$200/月 |
| **地区** | 国内全功能 | 国内全功能 | 大陆受限 |

**关键洞察**:V4.1 Flash 出现 = **DeepSeek 在模型层把"V4 Pro 能力"做到"Flash 价位"**,意味着所有基于 DeepSeek 的 AI 编程工具(Harness / Codex / Hermes / Claude Code 转接)都**自动获得更强的底层能力**。

完整 DeepSeek Harness 产品视角见 [DeepSeek Harness 全景](/blog/deepseek-harness-overview)。

---

## 8. 跟 AI 编程三阶的关系

| 层级 | V4.1 Flash 带来的影响 |
|------|---------------------|
| **Prompt Engineering** | 多模态输入成为可能(图文混合 prompt) |
| **Context Engineering** | 1M 上下文 + 原生多模态让 Context 维度从"文本"扩展到"图文" |
| **Harness Engineering** | 速度 + 降价让 Agent 多轮循环成本可控,系统级治理更可行 |

**V4.1 Flash 让 Context Engineering 的天花板抬高了一截**。完整 Context 拆解见 [Context Engineering](/blog/context-engineering)。

---

## 9. 收尾:3 条建议

### 给"已经在用 V4 Pro"的人

1. **别急着删 V4 Pro 配置** — 9/10 起会自动路由,先观察一周账单再说。如果有生产环境,**立即配置方案 B(独立直连 V4.1 Flash)**,避免路由策略调整时被坑
2. **算清"单价低" vs "总花费"** — 多 Agent 场景可能反而更贵。建议先在 1-2 个项目里用 V4.1 Flash 跑一周,看实际账单
3. **长上下文 + 多模态 = 新场景** — V4.1 Flash 真正的杀手锏是"看图 + 1M 上下文",想想你的工作流有没有这类需求(看 PDF/截图分析 / 长文档检索)

### 给"还在用 Claude/GPT"的人

V4.1 Flash 出现后,DeepSeek 第一次在 **"原生多模态 + 速度 + 价位"** 三维度同时有竞争力。如果你的项目:
- 不强依赖 Claude 的代码风格
- 多模态是常见需求(看截图 / PDF)
- 对成本敏感

**可以认真考虑把 DeepSeek V4.1 Flash 列为主力模型之一**。

### 给"AI 编程赛道观察者"的人

**2026 年 9 月是分水岭** — DeepSeek 解决了"低价 + 旗舰能力"的矛盾,国际厂商(Kiro)走规范驱动路径,**AI 编程正式进入"模型 + 工具双线竞争"时代**。

---

## 相关阅读

- [DeepSeek Harness 全景](/blog/deepseek-harness-overview) — 跟 V4.1 Flash 形成"老产品 + 新底层"对位
- [Kiro AI IDE](/blog/kiro-ai-ide) — 国际 AI 编程工具的代表(规范驱动)
- [Context Engineering](/blog/context-engineering) — V4.1 Flash 抬高 Context 天花板
- [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap) — 多 Agent 趋势的成本考量
- [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) — 认知基础

---

> 📌 **本文基于 LLM Wiki 知识库里 9/10 今天新写的 V4.1 Flash 笔记重写**,原文 7.2KB。后续 V4.1 Pro 发布时同步回 vault。
