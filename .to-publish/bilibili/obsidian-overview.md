# Obsidian 全景:从"装个笔记软件"到"搭一个会生长的知识库"

> B 站长文 | 直接从博客搬
>
> 原文:https://ant-cyj.github.io/blog/obsidian-overview/

我用了 Obsidian 8 个月,从一开始当 OneNote 用,到现在搭出 200+ 笔记的知识库。这篇讲清楚它到底是什么、为什么离不开、以及 AI 时代它怎么从"记事本"变成"个人 IDE"。

---

## 一句话定论

**Obsidian 不是笔记软件,是本地优先的 Markdown IDE。**

对你的知识库做的最重要的事,不是"帮你写笔记",而是**让笔记互相认识**。

---

## 8 个月心路

- 头 3 个月:当 OneNote 用,完全没 get 到
- 第 4 月转折:把 B 站技术视频全存进去,加 `[[]]` 链接。一周后,打开"Transformer"笔记,Backlinks 自动列出 7 篇提到它的笔记
- 后 4 个月:系统化搭 LLM Wiki(`concepts/entities/sources/syntheses` 四目录),让 Claude 维护

**那一刻我才懂:双向链接不是"我链接别人",是"别人会回链我"。**

---

## 核心特性:7 个,只离不开 3 个

### ⭐ 双向链接(`[[wikilinks]]`)

**单 vs 双向的本质区别:**

| | 单向链接 | 双向链接 |
|--|---------|---------|
| A 链 B | A 知道,B 不知道 | A 知道,B **自动记录**被链 |
| 可见性 | 只有发出方 | 双方互相可见 |
| 知识网络 | 无法自生长 | 自然织网,反链即上下文 |
| 类比 | 信件 | 社交网络关注 |

**在 Obsidian 里写 `[[B]]`,打开 B 笔记会看到 Backlinks 自动列出 A。** 这是构建知识图谱的基础。

### ⭐ 本地纯文本 `.md` 文件

- 整个 vault 就是一堆 `.md` 文件在你硬盘上
- 卸载 Obsidian,数据原封不动
- **解锁两个能力:**(1) Git 版本管理 (2) AI 直接读写

**对比 Notion**:数据在云端,导出是 HTML,AI 难直接读写。Obsidian 走"反 SaaS"路线 — **你拥有你的数据,工具只是渲染器。**

### ⭐ 插件生态

数千社区插件,覆盖你能想到的所有功能。但**别装太多,5-8 个精品顶 50 个闲置。** 我自己只装:Dataview、Excalidraw、Hover Editor、Local REST API、Claudian。

---

## 建筑师 vs 室内设计师 — AI 时代的新角色

| 角色 | 工具 | 做什么 |
|------|------|--------|
| 🏗️ **建筑师** | Cursor / Claude Code / TRAE | 操作系统文件,批量建库、建链接 |
| 🎨 **室内设计师** | Obsidian AI 插件(Copilot、Claudian) | 对已有笔记做精装修、改写 |

**为什么编程 IDE 更擅长建库?** 它们天生设计来操作项目文件结构。Obsidian 插件虽能调 API,但几乎没人做"批量文件操作"。

**为什么 Obsidian 插件更适合精装修?** 它们能看到 vault 的链接关系、Graph、Backlinks — 改写一篇时能自动感知"会影响哪些反链"。

**我的工作流:** Claude Code 建库(建筑师) + Claudian 改写(室内设计师)。

---

## 同步方案:7 种,只推荐 1 种

| 方案 | 场景 | 成本 |
|------|------|------|
| OneDrive 原生同步 | 纯桌面端 | 免费 |
| iCloud Drive | 苹果生态 | 免费 |
| Obsidian Sync(官方付费) | 全平台最省心 | $4/月 |
| **Remotely Save + S3/R2/COS** | ✅ **跨平台首选** | 近乎零 |
| Syncthing | 私有 P2P | 免费 |
| Obsidian Git | 需版本管理 | 免费 |

**我的方案:Remotely Save + 腾讯云 COS,一年 6 块。** 跨 Win/Mac/iOS/Android 全自动同步。

⚠️ 切勿混用多个同步方案(文件冲突会让你抓狂)。

---

## LLM Wiki 范式:Obsidian ↔ Claude 双向维护

```
Obsidian (IDE)  ← 浏览、看图谱、读笔记
       ↕
Claude Code    ← 读、写、编辑 vault 里的 .md
       ↕
Wiki (代码库)   ← Markdown 文件,所有内容都在这里
```

**跟传统 AI 问答的区别:**

- 传统 AI 问答:你问一次,答一次,对话结束就忘
- LLM Wiki 范式:Claude 读整个 vault → 答 → 写新笔记沉淀 → 下次问类似问题,知识已经在那

**效果:** 8 个月后,vault 里笔记互相引用 1000+ 次,反链区域直接列出"在哪些上下文被提过"。

---

## 输入工具链:外部工具 → 直接写进 vault

```
[HoverNotes]   ──HTTP──> [Local REST API] ──> [Vault]
[B站 Clipper]  ──HTTP──> [Local REST API] ──> [Vault]
```

- **HoverNotes** — AI 给 B 站视频生成带时间戳的笔记
- **B站 Obsidian Clipper** — 抓 B 站视频字幕
- **Local REST API** — 上面两个的桥梁(必须装)

**这个生态是 Obsidian 真正的护城河 — 笔记纯文本,任何工具都能自由读写。**

---

## RAG 边界:别过度神化

### 主流插件

| 插件 | 关键能力 |
|------|---------|
| Knowledge AI | 多格式索引 + BM25+向量混合检索 + citation 跳源 |
| Copilot(LoganYang) | DeepSeek 对话 + 阿里云 embedding,国内网络友好 |
| Smart Connections | 向量相似度自动推荐 |
| Analogy - RAG in your vault | 索引暴露为 MCP 服务,供 Claude Code/Cursor 调用 |

### 适用边界

| 场景 | Obsidian RAG | 传统 RAG 平台 |
|------|-------------|--------------|
| 一二百文件,混合文档 | ✅ 够用 | 杀鸡用牛刀 |
| 上千文档,团队协作 | ❌ 撑不住 | ✅ 必须上 |
| 表格 pinpoint 精确查询 | ❌ chunk 容易腰斩 | ✅ rerank 强 |
| 边看边问带 citation 跳源 | ✅ 沉浸 | ❌ 网页对话框不如 |

**判断:个人知识库 ≤ 200 笔记,Obsidian + 一个 RAG 插件就够。** 超过该上 Dify/FastGPT。

---

## 收尾:Obsidian 是认知基础设施

✅ **该用**:长期个人知识管理、读书笔记、跨学科串联、AI 时代让数据自己长
❌ **不该用**:纯临时记事、纯团队协作、对本地文件有恐惧

**3 条给新手:**

1. 别看教程,先装上用一周 — 反链是写多了才长出来的
2. 别装几十插件,只装 3-5 个 — Dataview + Excalidraw + Local REST API 起步
3. 把 vault 放进 Git — 跨设备 + AI 直接读写

**1 条给老用户:**

试试让 AI Agent 直接维护 vault — `Read/Write/Edit` 你的 `.md`,让它帮你建笔记、改写、加链接。**2026 年最被低估的个人生产力倍增器。**

---

📖 完整博客 + 配图建议:https://ant-cyj.github.io/blog/obsidian-overview/

#Obsidian #工具评测 #知识管理 #LLM Wiki
