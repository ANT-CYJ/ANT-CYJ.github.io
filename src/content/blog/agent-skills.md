---
title: 'Agent Skills 入门:把"你的技能"打包成 AI 可复用能力,3 层渐进式披露'
description: 'Agent Skills = 把人类技能(流程 + 配方 + 工具 + 材料)打包成 AI 按需加载的能力单元。Anthropic 官方定义的 3 层渐进式披露:元信息始终加载、指令命中才加载、脚本只执行不读取(0 token)。本文讲清楚是什么、怎么建、怎么用、为什么这是 AI 时代的"QWER"。'
pubDate: 2026-09-15
tags: ['AI', 'Claude Code', '教程', 'Agent Skills', '渐进式披露']
---

> 这篇博客的素材来自我自己 LLM Wiki 知识库里的 Agent Skills 教程笔记(8/3 写),基于秋芝 2046 的 B 站视频《手把手彻底学会 Agent Skills!【小白教程】》。原文 11KB,我把它重写成一篇"普通人都能学会"视角的实战教程,跟已发的 [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap) / [Hermes Agent 全景](/blog/hermes-agent-overview) / [Harness Engineering](/blog/harness-engineering-1) 形成系列。

---

## 0. 一句话定论

**Agent Skill = 把"人类技能"(流程 + 配方 + 工具 + 材料)打包成 AI 可复用、**按需加载**的能力单元 — 一个文件夹(SKILL.md + references/ + scripts/ + assets/)。**

**核心设计是 Anthropic 官方定义的"渐进式披露"三层结构**:
- 第 1 层 元信息:始终加载,像目录
- 第 2 层 指令:命中才加载
- 第 3 层 资源:按需加载,**脚本只执行不读取(0 token)**

---

## 1. Skill 是什么 — 类比厨师技能

Skill ≈ **人类技能**。

一个厨师有炒菜 / 处理食材 / 摆盘技能,每个技能内含:
- **流程** — 先炒什么后放什么
- **配方** — 油温、盐量、时长
- **工具** — 煤气灶、炒锅
- **材料** — 秘制辣椒酱、橄榄油

把这些打包成 AI 可理解的格式,就是 Agent Skill。

**在工程上** = 一个文件夹,内含:
```
skill-name/
├── SKILL.md          ← 必填(大写 S),元信息 + 指令
├── references/       ← 可选,复杂规格拆包
├── scripts/          ← 可选,直接执行脚本
└── assets/           ← 可选,logo/素材等参考图
```

---

## 2. 为什么不是简单存提示词?(核心机制)

### 朴素提示词的问题

把指令都塞进 system prompt 里,问题:
- **没必要的 prompt 也加载**(浪费 token)
- **多个技能混在一起互相干扰**(AI 难以判断)
- **想要换技能时,得改 prompt**(不灵活)

### Skill 的 4 大工程优势

| 优势 | 说明 |
|------|------|
| **按需加载** | 只有匹配需求时才加载完整指令 |
| **多技能共存** | 一个项目可以有几十个 skill,互不干扰 |
| **回答更精准** | 没有无关提示词干扰,AI 决策更纯粹 |
| **省 token** | 平时只加载 2 行元信息,命中才加载完整指令 |

---

## 3. 核心:三层渐进式披露(Anthropic 官方设计)

这是 Skill 机制最精妙的地方。

| 层 | 内容 | 加载时机 | 占 token |
|----|------|---------|---------|
| **第 1 层 · 元信息** | name + description(2 行) | **始终加载**(像目录) | 极少 |
| **第 2 层 · 指令** | SKILL.md 完整指令 | AI 判断命中才加载 | 中 |
| **第 3 层 · 资源** | references/ scripts/ assets/ | 任务需更多细节时按需加载 | 多 |

### 关键机制:脚本只执行不读取

**第 3 层的 scripts/ 是 0 token 占用的** — AI 不读脚本代码,只依据 SKILL.md 指引知道"传什么参数、输出什么"。

**类比**:你点外卖,只关心"点了什么菜 + 多少钱",不看后厨怎么做。

### 类比给你

- **第 1 层 元信息** = 菜单标题(看到名字)
- **第 2 层 指令** = 菜的介绍(点完才看)
- **第 3 层 资源** = 厨房(后厨跑,你看不见也不在乎)

---

## 4. 实战 1:创建最简单的 Skill(3 步)

**场景**:为轻食店"秋知餐厅"做一个按品牌调性出物料创意的 skill。

### 步骤 1:创建文件夹

skill 必须放在 `.claude/skills/` 下,**文件夹名 = skill 名**。

```bash
mkdir -p .claude/skills/qiuzhi-creative
```

### 步骤 2:写 SKILL.md(必填)

```markdown
---
name: qiuzhi-creative
description: 按秋知餐厅品牌调性出物料创意。当用户要做秋知餐厅相关海报、菜单、餐盒、推文配图时触发。
---

# 秋知创意 Skill

## 品牌调性
- 颜色:米白 + 浅绿 + 原木色
- 字体:圆体,年轻感
- 风格:自然、轻食、文艺

## 输出要求
- 物料类型 + 目标受众 + 使用场景
- 给出 3 个创意方向(标题 + 视觉描述 + 文案)
- 不直接出图,只给创意
```

### 步骤 3:测试

打开 Claude Code,问:
- "你有哪些 skill" → **被自动识别**
- "要做秋知餐厅春节促销海报" → **AI 加载 skill 并按要求输出创意**

**恭喜,你的第一个 Skill 跑通了。**

---

## 5. 实战 2:加 references/(复杂规格拆包)

**问题**:如果物料规格变复杂(海报/菜单/餐盒/杯子/工服/公众号封面/微博配图,尺寸配色平台规范各异),全塞进 SKILL.md 会巨长。

**解法**:拆 references/。

```
qiuzhi-creative/
├── SKILL.md               ← 精简:通用规则 + 指引
└── references/
    ├── 实体物料规格.md    ← 海报/菜单/餐盒
    └── 社交媒体规格.md    ← 公众号/微博/小红书
```

**SKILL.md 加一句指引**:

```markdown
## 物料规格指引
- 线下实体物料 → 读 references/实体物料规格.md
- 社交媒体物料 → 读 references/社交媒体规格.md
- 不确定时 → 问用户物料类型
```

**效果**:
- 做常规物料时,references 文件完全不被看(0 token)
- 做实体餐盒时,只读对应规格文件(精准加载)

**类比给你**:这跟编程里的"按需 import"或"懒加载"是一回事 — **不用的代码不读**。

---

## 6. 实战 3:加 scripts/(直接生图)

**问题**:AI 给创意后,人工再调 API 生图,步骤多。

**解法**:scripts/ 放可执行脚本,SKILL.md 指引 AI 调用。

```
qiuzhi-creative/
├── SKILL.md
├── references/
└── scripts/
    └── generate-image.py    ← 调 Nano Banana API 生图
```

**SKILL.md 补充**:

```markdown
## 生图流程
如果用户要求"直接出图":
1. 把创意转成生图提示词
2. 用 assets/ 里的 logo 作为参考图
3. 调用 scripts/generate-image.py 提示词+logo_path → 输出图片路径
```

**效果**:一句话"做一张周六饮料免费的实体海报" → AI 依次:加载 skill → 判断实体物料 → 读实体规格 → 需直接生图 → 生成提示词 → 调脚本 → 输出符合规范的图片。

**关键机制**:**脚本只执行不读取,一行代码都不占 token**。

---

## 7. 加 assets/(保持 logo 不变)

生图时最头疼的是 AI 每次画的 logo 都不一样。

**解法**:assets/ 放 2 张官方 logo 作为参考图。

```
qiuzhi-creative/
├── SKILL.md
├── references/
├── scripts/
└── assets/
    ├── logo-primary.png    ← 横向主 logo
    └── logo-square.png    ← 方形备用 logo
```

**SKILL.md 指引**:

```markdown
生图时把 assets/logo-primary.png 作为参考图传给脚本。
```

**AI 永远画出**一致的 logo,品牌识别度稳稳的。

---

## 8. 完整流程演示(一句话从需求到图片)

> **"做一张周六饮料免费的实体海报"**

AI 内部流程:
```
1. 加载 skill(第 1 层元信息命中 → 第 2 层指令加载)
2. 判断物料类型:实体物料
3. 读 references/实体物料规格.md
4. 判断需要直接生图
5. 生成生图提示词(创意 + 视觉规范)
6. 把提示词 + assets/logo-primary.png 传给 scripts/generate-image.py
7. 运行脚本,输出图片到 ./output/poster-saturday.jpg
```

整个对话中 AI **没读过一行脚本代码**(0 token 占用),但执行了脚本。

---

## 9. 用 Skill Creator 创建 Skill(零基础友好)

手写 SKILL.md + 脚本对普通人复杂。**秋芝 Skill Creator** = "创建 skill 的 skill"。

### 使用方式

1. 下载放到 `.claude/skills/skill-creator/`
2. 打开 Claude Code,直接说需求(或斜杠调用)
3. AI 用**选择题**一步步引导追问(上下键选)
4. 问完问题 → 核对方案 → 自动生成全部 skill 文件
5. 还可以帮想几个测试例子

### 适用场景

- **有明确的输出要求**(品牌规范、报告格式)
- **有明确的方法/规范/流程**(你做熟了)
- **验证过的事情**(知道怎么算"做对了")

---

## 10. 核心哲学:你不需要成为 Skill 开发者

> "一个游戏英雄也只需要四个技能,QWER 就能杀遍全场。"

**关键洞察**:
- ❌ 不要装一堆用不上的 skill
- ✅ 把**最高频做的几件事**打磨成**你独家的、稳定产出的 skill**

### 适合沉淀的场景(给普通人)

| 场景 | 沉淀方式 |
|------|---------|
| **打工人周报** | skill 主动采访你 → 自动出周报 |
| **老师备课** | 给课题 → 整套课件 + 习题 + PPT |
| **文章配图** | 给文章 → 按你风格出图 |
| **审合同** | 按你的规矩 → 自动批阅写备注 |
| **做饭菜谱** | 给食材 → 你的独家菜谱做法 |

**结论**:**大多数人不需要成为技能开发者,我们只要先把自己掌握的小技能交给 AI,让它替你重复劳动。**

---

## 11. 跟 AI 编程三阶的关系

| 层级 | Skill 的对应 |
|------|------------|
| **Prompt Engineering** | SKILL.md 的指令部分(第 2 层) |
| **Context Engineering** | references/ 的按需加载机制(第 3 层) |
| **Harness Engineering** | **整体 Skill 体系**(3 层渐进式披露本身就是 Harness 治理) |

**Skill 是 Harness 思维在"个人技能复用"维度的具体落地** — 它把"什么时候加载什么、加载多少"的决策交给 AI,人只管"做什么、怎么做"。

完整 Harness 视角见 [Harness Engineering(上)](/blog/harness-engineering-1)。

---

## 12. 跟 Vibe Coding + Hermes 的关系

### 跟 Vibe Coding 的关系(在 L2 维度)

Vibe Coding L2 讲"语境管理 = 把正确上下文喂给 AI"。**Skill 是语境管理的工程化实现** — 不是每次对话临时喂,而是**结构化、按需加载**。

完整 Vibe Coding 拆解见 [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap)。

### 跟 Hermes 的关系(在自进化维度)

Hermes Agent 的 Skills 自进化机制(已发 hermes-agent-overview 提到):**Hermes 可以自动沉淀高频模式为新 skill**,无需人工手写。

这意味着:
- **Claude Code 生态**:Skill 由人工创建/手动安装
- **Hermes 生态**:Skill 可**自我生成、自我进化**

**对比类比**:
- Claude Code Skill = 你手动整理的笔记
- Hermes Skill = 你做的事,它自动整理成笔记

完整 Hermes 视角见 [Hermes Agent 全景](/blog/hermes-agent-overview)。

---

## 13. 给"想试试 Skill"的人:3 条建议

1. **先装 Skill Creator,不要手写** — 普通人的第一选择是用"创建 skill 的 skill",一步步引导生成
2. **从你最高频、最稳定的一件事开始** — 周报、备课、配图都行,不要一开始就搞复杂的"全栈创作 skill"
3. **装几个现成的官方/社区 skill** — Anthropic 官方 frontend-design skill / 社区 PPT / Excel skill 都能立即用,先有体感再自创

### 给"AI 时代的重复劳动者"的人

**Skill 是 2026 年最被低估的个人生产力倍增器**。它不是工程师专属,普通上班族、设计师、运营都能用 — **把你掌握的小技能教给 AI,让它替你重复劳动**。

---

## 相关阅读

- [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap) — Skill 是 L2 语境管理的工程化实现
- [Hermes Agent 全景](/blog/hermes-agent-overview) — Skill 自进化的视角
- [Harness Engineering(上)](/blog/harness-engineering-1) — Skill 是 Harness 思维的具体落地
- [Context Engineering](/blog/context-engineering) — 渐进式披露背后的 Context 理论
- [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) — AI 重复劳动的认知基础

---

> 📌 **本文基于 LLM Wiki 知识库里的 Agent Skills 教程笔记重写**,原文 11KB,基于秋芝 2046 的 B 站视频(8/3)。后续 Skill 新生态会同步回 vault。