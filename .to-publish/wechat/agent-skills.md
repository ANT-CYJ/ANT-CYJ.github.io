# Agent Skills 入门:把"你的技能"打包成 AI 按需加载的能力单元

> 微信公众号短文 | 约 500 字
> 从博客《Agent Skills 入门》抽取精华

## 一句话定论

> **Agent Skill = 把"人类技能"(流程 + 配方 + 工具 + 材料)打包成 AI 可复用、**按需加载**的能力单元。**
>
> 核心是 Anthropic 官方定义的"三层渐进式披露":元信息始终加载、指令命中才加载、脚本只执行不读取(0 token)。

## 类比:Skill ≈ 人类技能

厨师有炒菜 / 处理食材 / 摆盘技能,每个技能内含:
- **流程** — 先炒什么后放什么
- **配方** — 油温、盐量
- **工具** — 煤气灶、炒锅
- **材料** — 秘制辣椒酱

工程上 = 一个文件夹:
```
skill-name/
├── SKILL.md          ← 必填,元信息 + 指令
├── references/       ← 复杂规格
├── scripts/          ← 执行脚本
└── assets/           ← logo / 素材
```

## 核心:三层渐进式披露

| 层 | 加载时机 | 占 token |
|---|---|---|
| **1 层 元信息**(2 行) | **始终加载** | 极少 |
| **2 层 指令**(SKILL.md) | 命中才加载 | 中 |
| **3 层 资源**(refs/scripts/assets) | 按需加载 | 多 |

**关键**:**脚本只执行不读取,0 token 占用**。类比点外卖 — 只关心"点了什么",不看后厨怎么做。

## 实战:5 步建一个 Skill

1. `mkdir -p .claude/skills/your-skill-name`
2. 创建 `SKILL.md`(frontmatter + 指令)
3. 复杂规格拆 `references/`
4. 自动化生图放 `scripts/`
5. logo 参考图放 `assets/`

## 用 Skill Creator(零基础友好)

秋芝 Skill Creator = "创建 skill 的 skill":
- 下载放到 `.claude/skills/`
- 说需求 → AI 用**选择题**引导追问
- 问完 → 自动生成全部 skill 文件

## 核心哲学

> "一个游戏英雄只需要 4 个技能,QWER 就能杀遍全场。"

- ❌ 不要装一堆用不上的 skill
- ✅ 把**最高频的几件事**打磨成**独家稳定产出的 skill**

| 场景 | 沉淀 |
|---|---|
| 周报 | skill 主动采访 → 自动出周报 |
| 备课 | 给课题 → 整套课件 + 习题 + PPT |
| 配图 | 给文章 → 按你风格出图 |
| 审合同 | 按你的规矩 → 自动批阅写备注 |

## 给普通人的 3 条建议

1. **先装 Skill Creator,不要手写**
2. **从你最高频的一件事开始**(周报 / 备课 / 配图)
3. **先装现成的官方 skill**(frontend-design / PPT / Excel)

**Skill 是 2026 年最被低估的个人生产力倍增器 — 不只是工程师,普通人也能用**。

---

📖 [完整博客:Agent Skills 入门](https://ant-cyj.github.io/blog/agent-skills/)

#Agent Skills #Claude Code #Vibe Coding #AI 协作 #教程