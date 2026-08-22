# 想把 AI 接到个人微信?Hermes 这条路最稳

> 微信公众号短文 | 约 400 字
> 从博客《Hermes 微信集成实战》抽取精华

市面把 AI 接到微信的方案有 3 条路:**Wechaty** (封号风险高)、**企业微信机器人** (必须企业)、**iLink Bot API** (稳定但功能受限)。

**Hermes Agent 选了 iLink Bot API** — 跟微信官方合作,通过**长轮询**接收消息,不依赖公网 IP 或 Webhook,本地跑就行。

## 4 步上手

```bash
# 1. 装依赖
pip install aiohttp cryptography

# 2. 跑设置向导(扫码登录)
hermes gateway setup

# 3. 配环境变量(~/.hermes/.env)
WEIXIN_ACCOUNT_ID=your-id
WEIXIN_DM_POLICY=open

# 4. 启 Gateway
hermes gateway
```

## 4 个核心变量

| 变量 | 作用 |
|------|------|
| `WEIXIN_DM_POLICY` | `open` / `allowlist` / `disabled` — **默认太松,推荐 allowlist** |
| `WEIXIN_GROUP_POLICY` | `disabled` / `open` / `allowlist` — **实际用 disabled** |
| `WEIXIN_ALLOWED_USERS` | 白名单(从日志抓 user_id) |
| `WEIXIN_HOME_CHANNEL` | 定时任务/通知输出 |

## 3 个真实感受

**值得用**:想要 DM-only 私人助理;本地跑、长轮询、对国内网络友好。
**别用**:需要群聊机器人(Hermes 在群聊几乎用不了);需要企业级 IM。
**一个真实坑**:`hermes gateway setup` 偶尔卡在"等待扫码",**多试几次**或换网络环境。

---

📖 [完整博客:把 AI Agent 接到个人微信:Hermes 实战指南](https://ant-cyj.github.io/blog/hermes-wechat-integration/)

#Hermes #AI #微信 #Bot
