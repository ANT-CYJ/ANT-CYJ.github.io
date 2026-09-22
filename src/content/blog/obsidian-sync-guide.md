---
title: 'Obsidian 同步方案实战:Remotely Save + 腾讯云 COS,1 年 6 元搞定全平台'
description: 'Obsidian 同步本质就是同步一个普通文件夹。本文横评 9 种方案,重点拆解"Remotely Save + 腾讯云 COS"5 步配置,跨 Win/Mac/iOS/Android 全自动,一年成本 6 元。'
pubDate: 2026-09-22
tags: ['Obsidian', '工具评测', '同步', 'Remotely Save', '腾讯云 COS']
---

> 这篇博客的素材来自我自己 LLM Wiki 知识库里的 Obsidian 同步方案笔记(7/13 起草,8/7 更新,8/9 强化),原文 8.3KB。是我 8/24 发的 [Obsidian 全景](/blog/obsidian-overview) 的**姊妹篇** — 全景讲"是什么 / 为什么",本文讲"怎么用"。

---

## 0. 一句话定论

**Obsidian 同步 = 同步一个普通 Markdown 文件夹**。**推荐方案:Remotely Save + 腾讯云 COS / Cloudflare R2,跨 Win / Mac / iOS / Android 全平台,一年成本 6 元(对象存储 + 流量)**。

**为什么不用 Obsidian 官方 Sync?** 一年 $48($4/月),跟免费/近乎免费的方案比,性价比不高。**个人用户用 Remotely Save 一年省下的钱够买 2 年 Microsoft 365。**

---

## 1. 同步的本质 — 没那么玄

Obsidian 的 vault 就是硬盘上的一堆 `.md` 文件。**"同步"就是把这堆文件在多台设备之间保持一致**。

这意味着:
- 任何"能同步文件夹"的工具都能用
- 不用 Obsidian 官方 Sync 也能搞定
- 你可以混搭方案(但下面会说,**千万不要混搭**)

---

## 2. 9 种方案横评

| 方案 | 费用 | 难度 | 适用场景 |
|------|------|------|---------|
| **Obsidian Sync**(官方) | 💰 $48/年 | ⭐ 最低 | 全平台最省心 |
| **iCloud Drive** | 🆓 免费 | ⭐ 低 | 苹果生态(Mac + iPhone) |
| **OneDrive 原生** | 🆓 5GB / 💰 1TB | ⭐⭐ 中 | Win/Mac 桌面 |
| **Remotely Save + S3 / R2 / COS** | 🆓 近乎零 | ⭐⭐ 中 | **✅ 跨平台首选** |
| **坚果云 WebDAV** | 🆓 免费 | ⭐⭐ 中 | 国内网络稳定 |
| **Self-hosted LiveSync** | 🆓 免费 | ⭐⭐⭐⭐ 高 | 技术用户自建实时同步 |
| **Obsidian Git** | 🆓 免费 | ⭐⭐⭐ 中高 | 要 Git 版本控制 |
| **Syncthing** | 🆓 免费 | ⭐⭐⭐ 中 | 私有 P2P,注重隐私 |
| **百度网盘** | 💰 付费 | ⭐⭐ 中 | ⚠️ 不推荐,只适合冷备份 |

**对比下来,Remotely Save + 腾讯云 COS / Cloudflare R2 综合最优**:
- ✅ 跨全平台(含手机)
- ✅ 一年成本 ≈ 0-6 元
- ✅ 配置难度中等,跟着本文 5 步走完
- ✅ 国内访问快

---

## 3. 推荐方案:Remotely Save + 腾讯云 COS(5 步配置)

### 第一步:准备腾讯云 COS(对象存储)

1. **注册登录** 腾讯云控制台 → 对象存储 COS
2. **创建存储桶(Bucket)**:
   - 名称:如 `obsidian-vault`(需全局唯一)
   - 地域:选离你最近的(如 `ap-shanghai`)
   - 访问权限:**私有读写**(笔记是私密数据)
   - 其他默认
3. **获取 API 密钥**:
   - 控制台 → 访问管理 → API 密钥管理 → 新建密钥
   - 记录 **SecretId** 和 **SecretKey**(只显示一次,保存好)
4. **Endpoint**:格式 `cos.<region>.myqcloud.com`(如 `cos.ap-shanghai.myqcloud.com`)

> **Cloudflare R2 替代方案**:创建 Bucket → 生成 API Token → Endpoint `https://<account-id>.r2.cloudflarestorage.com` → Region 填 `auto` 或 `us-east-1`。
>
> **R2 优势**:10GB/月免费,免流出费(出口流量免费),长期用比 COS 更便宜。

### 第二步:安装 Remotely Save 插件

1. Obsidian → **设置 → 第三方插件**
2. **关闭"安全模式"**
3. 点击**浏览**,搜索 **Remotely Save**(作者 remotely-save)
4. **安装 + 启用**
5. 左侧栏出现 **⟳ 循环箭头** 图标,点击进入插件设置

### 第三步:配置插件(核心)

在 Remotely Save 设置页填写:

| 字段 | 值 |
|------|-----|
| **远程服务** | **S3 或兼容 S3** |
| **Endpoint** | `https://cos.ap-shanghai.myqcloud.com` |
| **Region** | `ap-shanghai`(R2 填 `auto`) |
| **Access Key ID** | 你的 SecretId |
| **Secret Access Key** | 你的 SecretKey |
| **Bucket Name** | `obsidian-vault` |
| **Prefix(可选)** | `vault`(多库时区分) |

填完拉到底部,点 **Check / Test Connection**,显示"连接成功"。

### 第四步:首次上传

1. **可选:开自动同步** — `Auto Sync Every N Minutes`(如 5 分钟),或"保存时同步"
2. **首次上传** — 点左侧 **⟳ 同步按钮**,或命令面板 `Remotely Save: Sync`
3. 选择**上传**,本地所有 `.md` 笔记和 `.obsidian` 配置上传到云端
4. **建议加忽略列表** — `.trash/`、`icloud` 临时文件,减少冲突

### 第五步:其他设备接入(手机/另一台电脑)

1. 新设备安装 Obsidian,创建**全新的空 Vault**
2. **重要**:手机端选本地存储,**不要**放 iCloud / 百度网盘目录
3. 同样安装 Remotely Save
4. **复用配置**:
   - 电脑端插件设置里生成**配置二维码**,手机扫码自动填入
   - 或手动填入**完全相同的 S3 参数**(Bucket、Prefix 必须一致)
5. 点同步按钮 → 选择**拉取(Download)** → 等待所有笔记下载

---

## 4. OneDrive 方案(纯桌面端用户)

如果你只用 Windows + Mac,**不用手机**,OneDrive 原生同步最省事。

### 免费额度

- 微软账号默认 **5 GB** 免费
- Obsidian 纯文字笔记完全够用
- 大量图片 / 附件超 5GB 才需升级 Microsoft 365

### 配置(4 步)

1. 安装 OneDrive 客户端 + 登录
2. 在 OneDrive 目录下创建 Vault 文件夹
3. 新建 / 移动 Obsidian Vault 到 OneDrive 目录
4. **关键**:右键 Vault 文件夹 → **"始终保留在此设备上"**(关闭"文件随选")

另一台设备登录同一账号,用 Obsidian 打开同步后的文件夹即可。

**OneDrive 限制:仅 Win / Mac 桌面,手机端难直接挂载**。

---

## 5. 不推荐的方案:百度网盘

⚠️ **百度网盘不适合 Obsidian 实时同步**,只适合定期冷备份(每周打包上传)。

**原因**:
- **冲突严重** — Obsidian 频繁自动保存,百度网盘缺乏智能合并
- **手机不可用** — 系统层无法提供双向同步本地文件夹
- **会漏同步** — `.obsidian` 隐藏文件夹可能被跳过
- **需付费** — 实时同步需要 VIP

---

## 6. 5 大避坑要点(必看)

⚠️ **不要混用同步方案**(最重要!)

混用 = 双倍冲突。**用了 Remotely Save 就不要**再把 Vault 文件夹放进 iCloud / OneDrive / 百度网盘原生同步目录。

⚠️ 手机端开后台刷新权限

Obsidian 在 iOS / Android 上如果被杀后台,同步会停。**系统设置 → 给 Obsidian 开"后台刷新 / 自启动"权限**。

⚠️ 避免多设备同时编辑同一篇笔记

会产生 `.conflict` 文件,需手动合并。**养成习惯:在 A 设备编辑完,等同步完成再切到 B 设备**。

⚠️ 文件名避免特殊字符

Windows / macOS / Linux 文件系统都不允许 `:` `"` `|` `?` `*` —— Obsidian 文件名用了这些,同步必出问题。

⚠️ **同步 ≠ 备份**

同步工具崩了 = 你所有设备的数据都没了。**重要 vault 建议每周打包一次冷备份**(如 zip 上传网盘)。

---

## 7. 跟 Obsidian 全景的互链

本文是 [Obsidian 全景](/blog/obsidian-overview) 的**姊妹篇**:
- **Obsidian 全景**:讲"是什么 / 为什么 / 跟 AI 协作" — 8/24 已发
- **本文**:讲"怎么用 / 怎么同步" — 9/22 发布

读完两篇,你应该能:
1. 理解 Obsidian 为什么是 AI 时代的"个人 IDE"
2. 5 分钟内搞定全平台同步
3. 跨设备无缝写作

完整 Obsidian 全景见 [Obsidian 全景](/blog/obsidian-overview)。

---

## 8. 收尾:3 条建议

### 给"刚装 Obsidian"的人

1. **先决定同步方案再写笔记** — 先花 30 分钟配同步(本文 5 步),否则换设备时数据丢失
2. **手机端一定要开后台权限** — 不开 = 同步停摆
3. **不要混用同步方案** — 选一个跟到底

### 给"已经在用 Obsidian"的人

如果你现在用 OneDrive / iCloud 同步,想升级到跨平台方案:
1. 先用 Remotely Save **单独**配一个新 COS 桶
2. 测试 1 周看是否稳定
3. 稳定后**逐步迁移**(不要一刀切,避免冲突)

### 给"被同步问题折磨"的人

**90% 的 Obsidian 同步问题都是"混用"**。如果你现在看到一堆 `.conflict` 文件,大概率是同步方案冲突。
- 立刻停止所有同步
- 选 1 台设备为"主版本"
- 其他设备全部"拉取"(不是双向同步)
- 稳定后开双向

---

## 相关阅读

- [Obsidian 全景](/blog/obsidian-overview) — 理论篇,讲 Obsidian 是什么 / 为什么
- [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) — Obsidian 是 AI 协作的基础设施

---

> 📌 **本文基于 LLM Wiki 知识库里的 Obsidian 同步方案笔记重写**,原文 8.3KB,7/13 起草,8/7 更新,8/9 强化。后续同步方案有更新会同步回 vault。