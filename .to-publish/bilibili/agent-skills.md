# Agent Skills 入门:把"你的技能"打包成 AI 可复用能力,3 层渐进式披露

> B 站长文 | 直接从博客搬
>
> 原文:https://ant-cyj.github.io/blog/agent-skills/

Agent Skills = 把人类技能(流程 + 配方 + 工具 + 材料)打包成 AI 可复用、**按需加载**的能力单元。Anthropic 官方定义的 3 层渐进式披露机制:元信息始终加载、指令命中才加载、脚本只执行不读取(0 token)。

---

## 一句话定论

**Agent Skill = 把"人类技能"打包成 AI 可复用、**按需加载**的能力单元 — 一个文件夹(SKILL.md + references/ + scripts/ + assets/)。**

---

## Skill 是什么

Skill ≈ **人类技能**。厨师有炒菜 / 处理食材 / 摆盘技能,每个技能内含:
- **流程** — 先炒什么后放什么
- **配方** — 油温、盐量、时长
- **工具** — 煤气灶、炒锅
- **材料** — 秘制辣椒酱

把这些打包成 AI 可理解的格式,就是 Agent Skill。

**工程上** = 一个文件夹:
```
skill-name/
├── SKILL.md          ← 必填(大写 S)
├── references/       ← 可选,复杂规格
├── scripts/          ← 可选,直接执行脚本
└── assets/           ← 可选,logo/素材
```

---

## 核心机制:三层渐进式披露

| 层 | 内容 | 加载时机 | 占 token |
|----|------|---------|---------|
| **第 1 层 · 元信息** | name + description(2 行) | **始终加载**(像目录) | 极少 |
| **第 2 层 · 指令** | SKILL.md 完整指令 | 命中才加载 | 中 |
| **第 3 层 · 资源** | references/ scripts/ assets/ | 按需加载 | 多 |

**关键机制**:**脚本只执行不读取,一行代码都不占 token**。

类比:你点外卖,只关心"点了什么菜 + 多少钱",不看后厨怎么做。

---

## 4 大工程优势(对比朴素提示词)

| 优势 | 说明 |
|------|------|
| **按需加载** | 只有匹配需求才加载完整指令 |
| **多技能共存** | 一个项目可有几十个 skill,互不干扰 |
| **回答更精准** | 没有无关提示词干扰 |
| **省 token** | 平时只加载 2 行元信息 |

---

## 实战:创建最简单的 Skill

**场景**:轻食店"秋知餐厅"品牌物料创意 skill。

```bash
mkdir -p .claude/skills/qiuzhi-creative
```

**SKILL.md**:
```markdown
---
name: qiuzhi-creative
description: 按秋知餐厅品牌调性出物料创意。触发:海报/菜单/餐盒/推文配图。
---

# 品牌调性:米白 + 浅绿 + 原木色,圆体,自然轻食
# 输出:3 个创意方向(标题 + 视觉 + 文案),不出图
```

**测试**:Claude Code 问"你有哪些 skill" → 识别;说"做春节海报" → 加载 skill 输出创意。

---

## 进阶:加 references/(复杂规格拆包)

物料规格变复杂时,全塞 SKILL.md 太长。**拆 references/**:

```
qiuzhi-creative/
├── SKILL.md               ← 精简 + 指引
└── references/
    ├── 实体物料规格.md    ← 海报/菜单/餐盒
    └── 社交媒体规格.md    ← 公众号/微博/小红书
```

**SKILL.md 加指引**:
```markdown
线下实体物料 → 读 references/实体物料规格.md
社交媒体物料 → 读 references/社交媒体规格.md
```

**效果**:常规物料时 references 完全不看(0 token),精准加载。

---

## 加 scripts/(直接生图)

AI 给创意后,人工再调 API 生图步骤多。**scripts/ 放可执行脚本**:

```
scripts/
└── generate-image.py    ← 调 Nano Banana API 生图
```

**SKILL.md 加指引**:
```markdown
要直接出图 → 把创意转成生图提示词 + assets/ 参考图 → 调用 generate-image.py
```

---

## 加 assets/(保持 logo 不变)

```
assets/
├── logo-primary.png    ← 横向主 logo
└── logo-square.png    ← 方形备用
```

生图时把 logo 作为参考图传给脚本,**AI 永远画出**一致的 logo。

---

## 完整一句话流程

> "做一张周六饮料免费的实体海报"

AI 内部:
```
加载 skill(1 层元信息命中 → 2 层指令加载)
判断物料类型:实体
读 references/实体物料规格.md
判断需要直接生图
生成生图提示词 + logo 参考图
调 scripts/generate-image.py
输出图片到 ./output/
```

AI 没读过一行脚本代码,但执行了脚本。

---

## 用 Skill Creator 创建 Skill(零基础友好)

**秋芝 Skill Creator** = "创建 skill 的 skill"。

1. 下载放到 `.claude/skills/skill-creator/`
2. 打开 Claude Code 说需求(或斜杠调用)
3. AI 用**选择题**一步步引导追问
4. 问完 → 核对方案 → 自动生成全部 skill 文件

适用:**有明确的输出要求 / 有方法/流程 / 验证过的事情**。

---

## 核心哲学:你不需要成为 Skill 开发者

> "一个游戏英雄只需要 4 个技能,QWER 就能杀遍全场。"

❌ 不要装一堆用不上的 skill
✅ 把**最高频做的几件事**打磨成**独家的、稳定产出的 skill**

| 场景 | 沉淀 |
|------|------|
| 打工人周报 | skill 主动采访 → 自动出周报 |
| 老师备课 | 给课题 → 整套课件 + 习题 + PPT |
| 文章配图 | 给文章 → 按你风格出图 |
| 审合同 | 按你的规矩 → 自动批阅写备注 |

---

## 给普通人的 3 条建议

1. **先装 Skill Creator,不要手写** — 用"创建 skill 的 skill"零基础友好
2. **从你最高频的一件事开始** — 周报 / 备课 / 配图都行
3. **先装现成的官方/社区 skill** — Anthropic 官方 frontend-design / PPT / Excel skill

**Skill 是 2026 年最被低估的个人生产力倍增器 — 不只是工程师,普通人也能用**。

---

📖 完整博客 + 配图建议:https://ant-cyj.github.io/blog/agent-skills/

#Agent Skills #Claude Code #教程 #渐进式披露 #Vibe Coding #Harness