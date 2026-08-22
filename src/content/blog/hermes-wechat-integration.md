---
title: '把 AI Agent 接到个人微信:Hermes 实战指南'
description: '用 Hermes Agent 的 iLink Bot 适配器,把 AI 助理接入个人微信,实现扫码登录、消息收发、媒体加解密。'
pubDate: 2026-08-22
tags: ['AI Agent', 'Hermes', '微信', '实操']
---

想把自己的 AI 助理接到微信里,让消息直接在私人对话框里来回?我最近折腾了这件事,用的工具是 Hermes Agent — 一个支持多平台消息桥接的开源 Agent 框架。

这篇把过程整理出来,省得你重复踩坑。

## 为什么是 Hermes

市面把 AI 接到微信的方案,主流有这几条路:

| 方案 | 思路 | 痛点 |
|---|---|---|
| **Wechaty** | 老牌微信机器人框架 | 需要 iPad/网页协议,封号风险高 |
| **企业微信机器人** | 走 WeCom webhook | 必须有企业微信,不是个人微信 |
| **iLink Bot API** | 微信官方为开发者留的通道 | 需要扫码登录,功能受限但稳定 |

Hermes 选了 **iLink Bot API** 这条路 — 跟微信官方合作,通过**长轮询**接收消息,**不依赖公网 IP 或 Webhook**,本地跑就行。

代价是:接入的不是普通个人微信号,而是 **iLink Bot 身份**(`xxx@im.bot`)。这意味着大部分群消息它收不到(群事件 Bot 默认收不到),但 DM(私聊)是稳的。

## 前提条件

- 一个**个人微信账号**(用来扫码)
- Python 依赖:`aiohttp`、`cryptography`
- 终端能渲染二维码(可选)

## 4 步上手

### 1. 装依赖

```bash
pip install aiohttp cryptography

# 可选:启用终端二维码
cd ~/.hermes/hermes-agent && uv pip install -e ".[messaging]"
```

### 2. 跑设置向导

```bash
hermes gateway setup
```

选 **Weixin**,向导会:

1. 找 iLink API 要二维码
2. 终端显示(或给链接)
3. 等你微信 App 扫码 + 手机确认
4. 凭证存到 `~/.hermes/weixin/accounts/`

成功后看到 `微信连接成功,account_id=your-id`。

### 3. 配环境变量

`~/.hermes/.env` 里加:

```bash
# 必填
WEIXIN_ACCOUNT_ID=your-account-id
# Token 一般 setup 后自动存,这里可不写

# 访问控制(默认开放,后面会讲)
WEIXIN_DM_POLICY=open
```

### 4. 启 Gateway

```bash
hermes gateway
```

启动后它会自己连 iLink,开始长轮询。

## 访问策略:4 种模式

Hermes 给 DM 和群聊分别配了**独立的访问控制**。这是最值得配置的地方,默认 `open` 太松:

### DM 策略

| 模式 | 行为 | 适用 |
|---|---|---|
| `open` | 谁都能私聊 Bot | 自己玩 |
| `allowlist` | 只允许白名单用户 | 多人共享,只想给自己人用 |
| `disabled` | 完全关闭 | 不需要 DM |
| `pairing` | 配对模式(初始化用) | 第一次配 6 位配对码 |

**白名单用法**:
```bash
WEIXIN_DM_POLICY=allowlist
WEIXIN_ALLOWED_USERS=user_id_1,user_id_2
```

用户 ID 从 Gateway 日志里抓(让人发条消息,日志会显示 `sender_id`)。

### 群聊策略

| 模式 | 行为 |
|---|---|
| `disabled` | **默认**,忽略所有群消息 |
| `open` | 响应所有群消息(前提是 iLink 推了群事件) |
| `allowlist` | 只响应白名单中的群 |

> ⚠️ 实际体验:大部分个人微信群 **iLink Bot 根本收不到消息**,因为 Bot 类型账号不在普通群的事件推送范围。所以"群聊策略"在你这大概率用不上 — 当 disabled 用即可。

## 关键环境变量速查

| 变量 | 必填 | 默认 | 说明 |
|---|---|---|---|
| `WEIXIN_ACCOUNT_ID` | ✅ | — | iLink Bot 账号 ID |
| `WEIXIN_TOKEN` | ✅ | — | Bot Token(setup 时自动存) |
| `WEIXIN_DM_POLICY` | — | `open` | DM 访问策略 |
| `WEIXIN_GROUP_POLICY` | — | `disabled` | 群聊策略 |
| `WEIXIN_ALLOWED_USERS` | — | 空 | DM 白名单 |
| `WEIXIN_HOME_CHANNEL` | — | — | 定时任务/通知输出的 Chat ID |

## 架构示意

```
┌──────────────┐    二维码扫码       ┌──────────────┐
│  微信 App    │ ◄───────────────►  │  Hermes      │
│  (手机端)    │                    │  Gateway     │
└──────┬───────┘                    └──────┬───────┘
       │                                   │
       │    消息 / 媒体上传               │
       ├─────────────────────────────────►│
       │                                   │
       │        长轮询(35s)              │
       │◄─────────────────────────────────┤
       │                                   │
       │   消息推送 + 媒体(AES 解密)      │
       │◄─────────────────────────────────┤
```

**长轮询的好处**:不暴露任何公网端点,绕过 WebSocket 在国内网络环境下的各种坑。

## 5 个常见坑

| 症状 | 原因 | 解决 |
|---|---|---|
| 启动报 `ModuleNotFoundError: aiohttp` | 依赖没装全 | `pip install aiohttp cryptography` |
| 启动报 `WEIXIN_TOKEN 未设置` | 没跑 setup 或 session 过期 | 重跑 `hermes gateway setup` 扫码 |
| `errcode=-14` | 微信 session 过期 | 等 10 分钟(自动暂停),重扫码 |
| Bot 不响应 DM | `DM_POLICY=allowlist` 但没加发送者 | 看日志抓 user_id 加进 `WEIXIN_ALLOWED_USERS` |
| Token 锁冲突 | 同一 Token 启了多个 Gateway | 关掉其他实例,只留一个 |

## 我的几点感受

**值得用**:
- 想要 **DM-only 私人助理**(给少数几个人用)
- 本地跑、长轮询、**不需要公网**(这点对国内环境很友好)
- 项目已经用 Hermes Agent 框架,顺便加个微信前端

**别用**:
- 你需要**群聊机器人**(Hermes 在群聊上几乎用不了)
- 你需要企业级 IM 集成(用 WeCom 而不是 WeChat)
- 你不能接受"必须用 Bot 身份"这个限制

**一个真实坑**:`hermes gateway setup` 偶尔会卡在"等待扫码"那一步,二维码刷新 3 次还没扫到就超时。**多试几次**,或者换个网络环境。

## 参考

- [Hermes Agent 官方文档 - Weixin 适配器](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/weixin/)
- [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)
- [Messaging Gateway 总览](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)

---

> 文中命令和配置项基于 Hermes Agent 官方文档整理,实测环境 Linux/macOS,Windows 终端二维码可能需要 `messaging` 扩展。
