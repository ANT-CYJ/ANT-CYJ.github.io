# 待发布资源池

> **所有准备好的 B 站长文 / 微信公众号短文**。Mavis 自动准备,Neo 手动发布。
>
> **使用流程**:打开目标文件 → 全选复制 → 打开平台编辑器 → 粘贴 → 调格式 → 加配图 → 发

---

## ⭐ 当前资源(按推荐度排序)

### 🥇 Harness Engineering 系列 — ✅ 已发(2026-08-22)

| 平台 | 资源 | 推荐度 | 状态 |
|---|---|---|---|
| **B 站专栏** | `bilibili/harness-engineering-1.md`(3.7KB) | ★★★ | ✅ **已发** |
| **B 站专栏** | `bilibili/harness-engineering-2.md`(4.7KB) | ★★★ | ✅ **已发** |
| **微信公众号** | `wechat/harness-engineering.md`(450 字) | ★★★ | ✅ **已发** |

**Harness 是当前最值得发跨平台的内容** — 5 视频消化 + 2 大厂实战 + 量化证据,体量最大、原创度最高。**3 篇已全部发出(W35 完成)。**

### 🥇 Context Engineering 系列 — ✅ 已发(2026-08-24)

| 平台 | 资源 | 推荐度 | 状态 |
|---|---|---|---|
| **B 站专栏** | `bilibili/context-engineering.md`(4.2KB) | ⭐⭐⭐ | ✅ **已发** |
| **微信公众号** | `wechat/context-engineering.md`(2KB) | ⭐⭐⭐ | ✅ **已发** |

**补齐 AI 工程三阶的中间一环**(Prompt → Context → Harness),跟 Harness 系列互链成 IP 节奏。**2 篇已发,W36 完整闭环。**

### ★★ AI 协作必知 4 件事(2026-08-22 已发博客)

| 平台 | 资源 | 推荐度 | 备注 |
|---|---|---|---|
| **B 站专栏** | `bilibili/ai-collaboration-4-things.md`(4.4KB) | ★★ | 观点类,4 个性质心智模型,直接搬 |
| **微信公众号** | `wechat/ai-collaboration.md`(400 字) | ★★ | 4 件事速记表 + 3 条实操 |

### ★★ Hermes 微信集成(2026-08-22 已发博客)

| 平台 | 资源 | 推荐度 | 备注 |
|---|---|---|---|
| **B 站专栏** | `bilibili/hermes-wechat-integration.md`(6KB) | ★★ | 教程类,4 步 + 5 坑 + 4 模式 |
| **微信公众号** | `wechat/hermes.md`(400 字) | ★★ | 4 步代码 + 4 变量 + 3 真实感受 |

### ★★ Obsidian 全景(2026-08-24 已发博客)

| 平台 | 资源 | 推荐度 | 备注 |
|---|---|---|---|
| **B 站专栏** | `bilibili/obsidian-overview.md`(6.2KB) | ⭐⭐ | 工具评测类,跟 Neo 自己 vault 强相关 |
| **微信公众号** | `wechat/obsidian-overview.md`(500 字) | ⭐⭐ | 8 个月心路 + 7 特性 + 3 条建议 |

### ⛔ 跳过

- `welcome.md` — meta 类(重启理由),不适合跨平台

---

## 📁 目录结构

```
.to-publish/
├── README.md                # 本文件(资源池索引)
├── bilibili/                # B 站长文
│   ├── ai-collaboration-4-things.md
│   ├── hermes-wechat-integration.md
│   ├── harness-engineering-1.md
│   └── harness-engineering-2.md
└── wechat/                  # 微信公众号短文(300-500 字)
    ├── ai-collaboration.md
    ├── hermes.md
    └── harness-engineering.md
```

---

## 🎯 平台差异

| 平台 | 形式 | 推荐做法 | 时间 |
|---|---|---|---|
| **B 站专栏** | 长文(直接搬博客 markdown) | 复制 → 粘到 B 站专栏编辑器 → 调格式 → 加封面 → 发 | 5 分钟 |
| **微信公众号** | 短文(300-500 字抽取精华) | 复制 → 粘到公众号编辑器 → 加配图 → 调排版 → 群发 | 10 分钟 |

---

## 🔄 自动准备机制(2026-08-22 启用)

**触发**:博客 commit + push 后,Mavis 自动:
1. 生成 B 站长文(直接搬博客 markdown,加"作者说明"开头)
2. 生成微信公众号短文(从博客抽取 300-500 字,加金句开头 + 行动召唤)
3. 放到 `.to-publish/<平台>/<博客同名>.md`
4. 提示 Neo:"X 篇博客已上线 + 跨平台版本已准备好"

**规则详见**:`BLOG-MAINTENANCE.md` §1.5 + `KNOWLEDGE-IP.md` §4

---

## ✅ 强烈推荐立即发的(★★★)

> 截至 2026-08-24 14:25,**没有 ★★★ 待发资源**。Harness 和 Context Engineering 已闭环,Obsidian 全景已就绪(★★)。
>
> 下一篇 ★★★ 候选:扫 vault 找新的高价值笔记(产品/技术干货 + > 5KB + 能形成系列感),或等新博客上线自动生成。

### ⭐ 强推下一步:Obsidian 全景(已就绪)

刚 commit 的博客 + B 站/微信资源都已备好。**推荐先发**(★★ 但体感好,工具评测类是 Neo 的舒适区):
- B 站长文 `bilibili/obsidian-overview.md` 6.2KB
- 微信短文 `wechat/obsidian-overview.md` 2.5KB

---

## 💡 自查清单(发布前)

- [ ] 标题候选 3 选 1(每篇文件开头列了候选)
- [ ] 配图(每篇都附图建议)
- [ ] 标签 / 简介 / 封面(B 站必填)
- [ ] 摘要(微信公众号必填,已写在文件开头)
- [ ] 原文链接(已写在每篇末尾"完整博客"位置)
- [ ] 群发时间(公众号建议 19:00-21:00 高峰)

---

## 📋 维护记录

### 2026-08-22
- 机制启用
- 4 篇 B 站长文 + 3 篇微信公众号短文就绪
- 5 篇博客中的 4 篇覆盖(welcome meta 类跳过)
- 关联 commit:首次提交

### 2026-08-22 (2)
- Neo 决定:封面图自己用豆包/元宝生成(免费),Mavis 不再自动生成
- 资源池维持 4 + 3 = 7 篇状态
- 等待 Neo 手动发布
- 关联 commit:本次更新

### 2026-08-22 (3) — 发布进度
- ✅ **已发 3 篇**:B站长文 `harness-1/2` + 微信 `harness-engineering`
- ⏳ **待发 4 篇**:B站长文 `ai-collaboration` `hermes` + 微信 `ai-collaboration` `hermes`
- 关联 commit:本次更新

### 2026-08-24 — Context Engineering 系列就绪
- ✅ **新发 1 篇**:B站长文 `context-engineering` + 微信 `context-engineering`
- 关联 commit:本 commit

### 2026-08-24 (2) — Context Engineering 系列已发
- ✅ **已发 2 篇**:B站长文 `context-engineering` + 微信 `context-engineering`(Neo 手动复制发布)
- 博客端: `3ee8b3c feat(blog): add Context Engineering + cross-platform resources` 已 live
- 累计 W36 完成度:**博客 + B 站 + 微信 3 平台全到位**(2 篇)
- 关联 commit:本 commit
- **下一步**:扫 vault 找下一篇 ★★★ 候选(Kiro AI IDE 已在候选,跟 DeepSeek Harness 完美互链)

### 2026-08-24 (3) — Obsidian 全景就绪
- 🆕 **新发 1 篇博客**:`obsidian-overview` 12KB(commit `e36e693`)
- 🆕 **资源池新增 2 篇**:B站长文 `obsidian-overview` + 微信 `obsidian-overview`
- 累计:博客 9 篇 / B 站资源 7 篇 / 微信资源 6 篇
- 关联 commit:本 commit
- **下一步**:等 Neo 手动发 B 站/微信(预计 3-5 分钟/篇)
