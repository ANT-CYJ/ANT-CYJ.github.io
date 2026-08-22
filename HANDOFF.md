# Neo Blog 交接文档

> 写给"下一个会话的我"。读完这个文件,应该能 5 分钟内接手所有上下文。
> 最后更新:2026-08-22(本会话结束时)

---

## 0. 一句话总览

**项目**:Neo 的个人技术博客 + 知识 IP 主阵地(Astro 5 静态站,部署在 `ant-cyj.github.io`)

**当前状态**:博客内容机制 + 跨平台分发机制 + 知识 IP 战略框架已全部上线;**待办是"博客架构/UI/体验/功能升级"**。

---

## 1. 项目物理信息

```
本地根目录:C:\Users\王永芳\Desktop\Agent Project\neo-blog
远程仓库:https://github.com/ANT-CYJ/ANT-CYJ.github.io
线上地址:https://ant-cyj.github.io/
部署链路:push main → GitHub Actions → 自动 build + deploy
```

**关键命令**:
```bash
npm install            # 一次性
npm run dev            # 本地预览 → http://localhost:4321
npm run build          # 验证能 build
```

---

## 2. 已上线的机制(本次会话新建)

### 2.1 三份核心文档

| 文件 | 职责 | 大小 |
|---|---|---|
| `AGENTS.md` | 项目身份 / 关键命令 / 用户偏好 / 触发场景 | 5KB |
| `BLOG-MAINTENANCE.md` | 博客对外输出运行规则(4 条核心规则 + 扫描 + 写作 + 跨平台 + 调整记录) | 15KB |
| `KNOWLEDGE-IP.md` | 知识 IP 战略(架构 / 内容方向 / 推进计划 / 风险) | 13KB |
| `HANDOFF.md`(本文件) | 会话交接,每次会话结尾更新 | — |

### 2.2 4 条核心规则(最常引用)

1. **JOURNAL → Blog 联动** — 在 `LEARNING-JOURNAL.md` 加新卡片时主动问"要不要同步博客"
2. **Vault 主动扫描(伪自动)** — 每次新会话开头扫 `C:\MyObsidianWiki\MyObsidianWiki\wiki\{concepts,entities,sources,syntheses}\`
3. **复盘 / 写博客触发** — 写完笔记额外问"要不要写博客"
4. **权限边界** — 笔记私有随便写;博客必须脱敏 + 预览 + 点头才发;客户 vault 默认不发

### 2.3 7 大内容方向(基于 Neo GitHub bio + repos)

| # | 方向 | 优先级 |
|---|---|---|
| 1 | 知识学习类 | ⭐ |
| 2 | AI 相关 | ⭐ |
| 3 | 技术相关 | ⭐ |
| 4 | 项目管理(PMP/ACP/NPDP) | 📌 |
| 5 | 产品经理视角 | 📌 |
| 6 | 工具评测 / 自建工具 | 💭 |
| 7 | 行业观察 / 个人思考 | 💭 |

### 2.4 资源池(`.to-publish/`)

```
.to-publish/
├── README.md                # 资源池索引
├── bilibili/                # B 站长文(4 篇,直接搬博客)
│   ├── ai-collaboration-4-things.md
│   ├── hermes-wechat-integration.md
│   ├── harness-engineering-1.md
│   └── harness-engineering-2.md
└── wechat/                  # 微信公众号短文(3 篇,300-500 字)
    ├── ai-collaboration.md
    ├── hermes.md
    └── harness-engineering.md
```

**当前资源池状态**:5 篇博客(4 篇有跨平台版本,1 篇 welcome meta 跳过)
**未发资源**:4 + 3 = 7 个待发布资源待 Neo 手动复制粘贴

---

## 3. 当前博客内容(5 篇已上线)

| Slug | 主题 | 类别 | 跨平台版本 |
|---|---|---|---|
| `welcome` | 重启博客理由 | meta | ❌ 跳过(不适合) |
| `ai-collaboration-4-things` | 4 个性质心智模型 | AI | ✅ B 站 + 微信 |
| `hermes-wechat-integration` | Hermes 微信集成实战 | 工具 | ✅ B 站 + 微信 |
| `harness-engineering-1` | Harness 是什么(概念) | 工程 | ✅ B 站 |
| `harness-engineering-2` | Harness 怎么落地(实战) | 工程 | ✅ B 站 + 微信合并 |

---

## 4. ⚠️ 已知问题 / 待优化点

### 4.1 架构 / UI / 体验 / 功能(本次会话确认要做的,优先级 ★★★★★)

**当前博客太朴素,缺转发 / 评论 / 其他功能。** 需要升级的方向:

| 类别 | 现状 | 待升级 |
|---|---|---|
| **评论系统** | 无 | Giscus(接 GitHub Discussions,免费) |
| **分享 / 转发** | 无 | 站点分享按钮(微信 / 微博 / 复制链接) |
| **访问统计** | 无 | Plausible / Umami(隐私友好型) |
| **SEO 优化** | 基础 | 完善 OG 图、Twitter Card、canonical URL |
| **RSS 增强** | 基础 | 输出全文 / 摘要可配置 |
| **站内搜索** | 无 | 客户端搜索(等内容 > 20 篇时再加) |
| **标签聚合页** | 无 | `/tags/[tag]`(schema 已有 tags 字段) |
| **暗色切换按钮** | 仅跟随系统 | 手动切换按钮 |
| **首页 Hero** | 静态 | 可考虑加点动态效果 |
| **文章目录(TOC)** | 无 | 长文自动生成目录 |
| **代码块复制按钮** | 无 | 通用体验提升 |
| **阅读时长估算** | 无 | 提升浏览体验 |
| **相关推荐** | 无 | 读完一文后推荐下一篇 |
| **sitemap 提交** | 自动生成 | 主动提交到 Google Search Console / 百度站长 |

### 4.2 内容机制(已 OK,不需要动)

- ✅ 4 条核心规则
- ✅ Vault 扫描路径正确(`MyObsidianWiki\wiki\`)
- ✅ 客户 vault 关键词过滤
- ✅ 跨平台自动准备(.to-publish/)
- ✅ KNOWLEDGE-IP 战略框架

### 4.3 其他可能需要

- 主题切换(目前是默认)
- Logo 设计
- 完整的 about 页面(目前简陋)
- 个人签名 / 自定义域名(ant-cyj.github.io 还是 ant.cyj.io?)

---

## 5. 后续推进方向(本会话确认,3 大块)

### 5.1 博客架构升级(优先级最高)

**目标**:把博客从"能看"升级到"能转、能评论、能被搜到"

**待做**:
- [ ] 接 Giscus 评论系统
- [ ] 加分享按钮
- [ ] 接 Plausible / Umami 访问统计
- [ ] 完善 SEO meta(OG 图、Twitter Card)
- [ ] 加标签聚合页 `/tags/[tag]`
- [ ] 加暗色切换按钮
- [ ] 加文章 TOC
- [ ] 加代码块复制按钮
- [ ] 提交 sitemap 到搜索引擎

### 5.2 平台同步(3 块同步推进)

#### ① 学习笔记 → 博客同步
- **机制**:已上线(BLOG-MAINTENANCE.md §1.1)
- **现状**:本次会话没触发(没新 LEARNING-JOURNAL 卡片)
- **下一步**:Neo 后续加新卡片时,Mavis 主动问"要不要同步博客"

#### ② 博客精选 → B 站专栏
- **资源已备**:4 篇 B 站长文在 `.to-publish/bilibili/`
- **待做**:Neo 手动复制粘贴(API 受限,见 BLOG-MAINTENANCE.md §6.6)
- **下一步**:Neo 找时间发布

#### ③ 微信公众号服务
- **资源已备**:3 篇短文在 `.to-publish/wechat/`
- **待做**:Neo 手动复制粘贴
- **下一步**:Neo 找时间发布

### 5.3 长期(3 个月后)

- 视频类内容(B 站视频 / 视频号) — **W36+ 计划,见 KNOWLEDGE-IP.md §4**
- 自动化辅助(只生成脚本,不直接出视频)
- 内容方向覆盖(7 大方向轮换)

---

## 6. 当前 git 状态(2026-08-22 18:24 截止)

```
远程 main:8d3513a1... (本地同步)
最近 5 个 commit:
- 4cec9f0 feat(blog): add Harness Engineering 2-part series
- 650fb69 fix: correct vault path to Neo's actual LLM Wiki V2 vault
- 06a4d41 docs: split B站 into long-form + video, mark Neo's existing accounts
- e237e4d docs: add KNOWLEDGE-IP.md as knowledge IP strategy framework
- 8d3513a feat: add cross-platform publishing resource pool (.to-publish/)
```

---

## 7. ⚠️ 本次会话未做但重要的事

1. ❌ **没生成封面图** — Neo 决定自己用豆包/元宝生成(免费,更可控)
2. ❌ **没修 PostCard.astro 死代码**(组件定义了但页面没引用)
3. ❌ **没接评论 / 分享 / 统计** — 这是 4.1 里的"博客架构升级"内容
4. ❌ **没写更详细的 about 页** — Neo 决定推迟
5. ❌ **没把博客资源同步到 B 站 / 微信** — 资源已备,等 Neo 手动

---

## 8. 下次会话第一件事

新会话开头,Mavis 读 `AGENTS.md` + 本文件 + `BLOG-MAINTENANCE.md` + `KNOWLEDGE-IP.md`,然后问 Neo:

> "今天从哪开始?(候选:
> ① 博客架构升级(Giscus + 分享 + 统计 + SEO 改 4 个一起做)
> ② 手动发布 .to-publish/ 里的 B 站长文 / 微信短文
> ③ 等 LEARNING-JOURNAL 触发了再写新博客
> ④ 改 PostCard 死代码
> ⑤ 别的)"

---

## 9. 调整记录

### 2026-08-22
- 创建本文件,作为会话交接文档
- 记录了当前项目状态 + 4.1 待优化清单 + 5 后续推进方向
- Neo 决定:博客升级一次性做完(评论/分享/统计/SEO 一起上)+ 平台同步按资源池手动执行
- 关联 commit:本文档首次提交
