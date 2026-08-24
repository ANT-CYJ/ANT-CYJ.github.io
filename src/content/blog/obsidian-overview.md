---
title: 'Obsidian 全景:从"装个笔记软件"到"搭一个会生长的知识库"'
description: '我用 Obsidian 8 个月,从懵懂到搭出 200+ 笔记的 LLM Wiki。本文讲清楚 Obsidian 是什么、双向链接为什么是灵魂、AI 时代它怎么从"记事本"变成 IDE。'
pubDate: 2026-08-24
tags: ['工具评测', 'Obsidian', '知识管理', 'LLM Wiki']
---

> 这篇博客的素材来自我自己 LLM Wiki 知识库里的 Obsidian 实体笔记(7/13 起草,7/17 完善)。原文 9KB,是 vault 里最高频被引用的"基础设施"类笔记。我把它重写成一篇"个人分享向"的全景文章,讲清楚我为什么离不开它、它跟传统笔记到底有什么不一样。

---

## 0. 一句话总结

**Obsidian 不是笔记软件,是本地优先的 Markdown IDE。** 它对你的知识库做的最重要的事,不是"帮你写笔记",而是"让你的笔记互相认识"。

---

## 1. 我跟 Obsidian 的 8 个月

2026 年 1 月,我装了 Obsidian。当时的理由很朴素:"听说程序员都在用,试试。"

装完头三个月,我把它当 OneNote 用 — 写点待办、抄点链接、堆几个 `.md` 文件。**完全没有 get 到它好在哪。** 双向链接?打两个 `[[]]` 跟普通 Markdown 链接有啥区别?Graph View?就一坨毛线球,看不清任何东西。

转折点发生在 4 月。**我把"读过的所有 B 站技术视频"全存进了 Obsidian,按主题分类,加上 `[[]]` 链接。** 一周后,我打开"Transformer"那个笔记,看到 Backlinks 区域自动列出了 7 篇提到 Transformer 的笔记 — 有的是讲架构的、有的是讲训练的、有的是讲应用的。**那一刻我才懂:双向链接不是"我链接别人",是"别人会回链我"。**

知识不是写完就死,是会自己长出网络。

之后 4 个月,我开始系统化搭一个叫 **LLM Wiki** 的知识库 — 按 `concepts/`(概念)、`entities/`(实体)、`sources/`(资料)、`syntheses/`(综合) 四个目录组织,所有笔记用 `[[双向链接]]` 串联,再让 Claude 帮我维护。**到今天,vault 里 200+ 笔记,Obsidian 是我每天打开次数最多的软件(比微信还多)。**

---

## 2. 核心特性:7 个,但我只离不开 3 个

Obsidian 的特性清单在它的官网上能列 30 多个。我用 8 个月后,真正每天用、离不开的就 3 个:

### ⭐ 双向链接(`[[wikilinks]]`)— 灵魂

`[[双向链接]]` 是 Obsidian 跟其他所有笔记软件的分水岭。

**传统笔记软件**:你在 A 笔记里写"参考 B 笔记",A 知道 B,B 完全无感知。你忘了 B,B 就沉在文件夹里再也找不到。

**Obsidian**:你在 A 笔记里写 `[[B]]`,**A 自动知道 B,B 自动知道 A。** 打开 B 笔记,Backlinks 区域会列所有链到 B 的笔记 — 哪些上下文提过它、谁依赖它、谁质疑它。

**这个区别看起来小,实际是认知模型的根本切换:**
- 单向链接 = 信件。你给张三发了封信,张三不知道你给李四也发了
- 双向链接 = 社交网络。你关注了张三,张三的关注者列表里也有你

**类比给你:** 单向链接像 Excel 的"超链接"列,点了就跳走,但谁引用过这行数据你不知道。双向链接像 Notion 的"Relation"字段,行之间互相反查,自动织网。

### ⭐ 本地纯文本 `.md` 文件 — 独立性

Obsidian 不存数据库。**你的整个 vault 就是一堆 `.md` 文件夹在你硬盘上。** 卸载 Obsidian、换电脑、装别的软件,数据原封不动。

**这个特性让我做了两件以前不敢做的事:**
1. 用 Git 给整个 vault 做版本管理(`Obsidian Git` 插件,每次保存自动 commit)
2. 用 Claude Code 直接 `Read/Write/Edit` vault 里的 `.md` 文件 — AI 直接维护知识库

**对比其他笔记软件:** Notion 数据在云端,导出是 HTML,AI 很难直接读写。Evernote 数据在自家服务器,迁移成本极高。Obsidian 走的是"反 SaaS"路线 — **你拥有你的数据,工具只是渲染器。**

### ⭐ 插件生态 — 可扩展性

Obsidian 有数千社区插件,几乎覆盖你能想到的所有功能:
- **Dataview** — 用 SQL-like 语法查 frontmatter(我用来自动生成"未读笔记清单")
- **Canvas** — 无限白板,自由排布
- **Marp** — 把 Markdown 渲染成 PPT
- **Web Clipper** — 浏览器剪藏 → 直接存到 vault
- **Graph View** — 内置,可视化整个知识库的网络

**我的判断:插件不是越多越好,5-8 个精品插件顶 50 个装上不用。** 我自己只装:Dataview、Excalidraw(画图)、Hover Editor(浮动编辑)、Local REST API(给外部工具用)、Claudian(AI 助手)。

---

## 3. 建筑师 vs 室内设计师 — AI 时代的新角色

这是 2026 年 AI 普及后,Obsidian 用户最该想清楚的一个问题:**Obsidian 的 AI 插件,跟 Cursor/Claude Code 这类编程 IDE,到底哪个更适合建知识库?**

**答案是:它们是建筑师和室内设计师的关系,不是竞争。**

| 角色 | 工具 | 做什么 |
|------|------|--------|
| 🏗️ **建筑师** | Cursor / Claude Code / TRAE | 操作系统文件,批量建文件夹、写笔记、建链接 |
| 🎨 **室内设计师** | Obsidian AI 插件(Copilot、Claudian) | 对已有笔记做精装修、改写、扩写、润色 |

**为什么编程 IDE 更擅长建库?** 因为它们天生被设计用来操作项目文件结构 — 一次建 50 个 `.md`、批量加 frontmatter、跨笔记替换链接,这些是 IDE 的核心能力。Obsidian 插件虽然也能调 API 操作文件,但几乎没人会去做"批量文件操作"这种重活。

**为什么 Obsidian 插件更适合精装修?** 因为它们能看到 vault 的链接关系、Graph、Backlinks — 改写一篇笔记时能自动感知"会影响哪些反链",这是 IDE 看不到的。

**我的工作流:**
1. 用 Claude Code 写新笔记(建筑师) → `Read/Write/Edit` 跑通整个 vault
2. 用 Claudian 改写旧笔记(室内设计师) → 在 Obsidian 里直接调,看到完整上下文

**类比给你:** 建筑师盖好毛坯房,室内设计师来贴墙纸、装灯。Obsidian 的优势是"墙纸可以随时撕掉重贴" — 笔记文件就是纯文本,怎么改都不破坏结构。

---

## 4. 同步方案:7 种,只推荐 1 种

Obsidian 数据在本地,但你多半想在手机上也能看。**这是 90% 新手的第一个坑。**

| 方案 | 推荐场景 | 成本 |
|------|---------|------|
| **OneDrive 原生同步** | 纯桌面端(Win/Mac) | 免费 |
| **iCloud Drive** | 苹果生态用户 | 免费 |
| **Obsidian Sync**(官方付费) | 全平台最省心 | $4/月 |
| **Remotely Save + S3/R2/COS** | ✅ **跨平台首选** | 近乎零 |
| **Syncthing** | 私有 P2P | 免费 |
| **Obsidian Git** | 需要版本管理 + 折腾 | 免费 |
| **git + 手动 push** | 极客,完全控制 | 免费 |

**我的方案:Remotely Save + 腾讯云 COS。** 配置一次,跨 Windows / Mac / iOS / Android 全自动同步,一年成本 6 块(对象存储 + 流量,几乎白嫖)。

**避坑提醒:**
- ⚠️ **切勿混用多个同步方案**(比如同时开 iCloud 和 OneDrive) — 文件冲突会让你抓狂
- ⚠️ **手机端必须用 Remotely Save 或官方 Sync** — 其他方案手机体验都不行
- ⚠️ **同步前先备份一次** — 配置文件 `~/.obsidian/` 也要备份,不然插件配置会丢

---

## 5. Obsidian 怎么跟 AI 协作 — 我的 LLM Wiki 范式

这是我用 Obsidian 最深的一个用法 — 把它当成 AI 时代的"个人知识图谱 IDE"。

### 5.1 范式:L vault ↔ Claude 双向维护

```
Obsidian (IDE)  ← 浏览、看图谱、读笔记
       ↕
Claude Code    ← 读、写、编辑 vault 里的 .md
       ↕
Wiki (代码库)   ← Markdown 文件,所有内容都在这里
```

**这个范式跟传统"AI 问答"完全不一样:**
- 传统 AI 问答:你问一次,它答一次,对话结束就忘了
- LLM Wiki 范式:你问一次,Claude **读整个 vault**,给出答案,然后**写一篇新笔记沉淀到 vault**,下次你问类似问题,知识已经在那了

**效果:** 知识会自己长。8 个月后,我 vault 里的笔记互相引用 1000+ 次,每打开一篇新概念,反链区域直接列出"在哪些上下文被提过"。

### 5.2 输入工具链:外部工具 → 直接写进 vault

Obsidian 通过 **Local REST API** 插件暴露 HTTP 接口,外部工具可以直接 `.md` 文件,不用手动复制粘贴。

```
[HoverNotes]   ──HTTP + API Key──> [Local REST API] ──> [Vault]
[B站 Clipper]  ──HTTP + API Key──> [Local REST API] ──> [Vault]
```

- **HoverNotes** — AI 给 B 站视频生成带时间戳的笔记,直接写进 vault
- **B站 Obsidian Clipper** — 抓 B 站视频字幕,直接存 `.md`
- **Local REST API** — 上面两个工具的桥梁(必须装)

**这个生态是 Obsidian 真正的护城河 — 笔记是纯文本,任何工具都能自由读写。** 你不会被任何一家 AI 厂商锁死。

---

## 6. RAG 边界:Obsidian 不是万能的

Obsidian 通过插件能做轻量 RAG(检索增强生成),让 vault 里的 PDF/Excel/`.md` 可被语义检索。**但它有明确的适用边界,别过度神化。**

### 6.1 主流 RAG 插件

| 插件 | 关键能力 |
|------|---------|
| **Knowledge AI** | 多格式直接索引(MD/PDF/DOCX/XLSX),BM25+向量混合检索,回答带 `[N]` 跳源 |
| **Copilot**(LoganYang) | 老牌方案,DeepSeek 对话 + 阿里云 embedding,国内网络友好 |
| **Smart Connections** | 向量相似度自动推荐 + 问答 |
| **Analogy - RAG in your vault** | 把索引暴露为 MCP 服务,供 Claude Code/Cursor 调用 |

### 6.2 适用边界(选型决策)

| 场景 | Obsidian RAG | 传统 RAG 平台(Dify/FastGPT) |
|------|-------------|------------------------------|
| 一二百文件,混合文档 | ✅ 够用,体验好 | 杀鸡用牛刀 |
| 上千文档,扫描合同,团队协作 | ❌ 撑不住 | ✅ 必须上 |
| 表格 pinpoint 精确查询 | ❌ chunk 容易腰斩 | ✅ rerank + 表格专项 |
| 边看边问带 citation 跳源 | ✅ 沉浸 | ❌ 网页对话框不如 Vault |
| 跨用户协作 | ❌ 弱(本地为主) | ✅ 强 |

**我的判断:个人知识库 ≤ 200 笔记,Obsidian + 一个 RAG 插件就够。** 超过这个规模,该上 Dify/FastGPT 了 — 那是另一个话题。

---

## 7. 收尾:Obsidian 不是工具,是认知基础设施

**用 8 个月,我对 Obsidian 的评价是:**

✅ **该用的场景**:长期个人知识管理、读书笔记、跨学科概念串联、AI 时代想让数据"自己长"
❌ **不该用的场景**:纯临时记事、纯团队协作、对本地文件有恐惧

**对我自己的最大改变:**

它让我从"读一遍就忘"变成"读一遍就织网"。每学一个新概念,我会立刻在 vault 里建笔记、链回相关概念。**一周后回来看,反链区域会告诉我"这概念还跟哪些东西相关" — 这是我 8 个月前想都不敢想的复利效应。**

**给新手的 3 条建议:**

1. **别先看教程,先装上用一周** — Obsidian 的价值不是"功能多",是"你写多了之后反链自然就长出来了"
2. **别装几十个插件,只装 3-5 个** — Dataview + Excalidraw + Local REST API 起步,够用半年
3. **把 vault 放进 Git** — 不光能版本管理,还能让 AI 直接读写,跨设备协作零成本

**给已经用的人的 1 条建议:**

试试让你的 AI Agent 直接维护 vault — `Read/Write/Edit` 你的 `.md` 文件,让它帮你建笔记、改写、加链接。**这是 2026 年最被低估的个人生产力倍增器。**

---

## 相关阅读

- [welcome](/blog/welcome) — 我为什么重启这个博客
- [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) — AI 时代的认知基础
- [Harness Engineering(上)](/blog/harness-engineering-1) — 上下文工程的实战范式
- [Context Engineering](/blog/context-engineering) — AI 工程三阶的中间一环

---

> 📌 **本文基于 LLM Wiki 知识库里的 Obsidian 实体笔记重写**,原文 9.1KB,7/13 起草,7/17 完善。后续 Obsidian 用法更新会同步回 vault。
