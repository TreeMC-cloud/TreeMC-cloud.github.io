<div align="center">

<h1>TreeCore 官方网站 | 我的世界 / Minecraft 高性能服务端核心</h1>

<p><strong>基于 Paper 深度优化 · 内置 Web 管理面板 · 免费开源</strong></p>

<p>
  <a href="https://treemc-cloud.github.io/"><img src="https://img.shields.io/badge/官网-treemc--cloud.github.io-16A34A?style=for-the-badge&labelColor=0B0F1A" alt="官网"></a>
  <a href="https://treemc-cloud.github.io/downloads/"><img src="https://img.shields.io/badge/免费下载-Releases-2563EB?style=for-the-badge&labelColor=0B0F1A" alt="下载"></a>
  <a href="https://treemc-cloud.github.io/docs/"><img src="https://img.shields.io/badge/技术文档-Docs-F59E0B?style=for-the-badge&labelColor=0B0F1A" alt="文档"></a>
</p>

<p>
  <a href="https://github.com/TreeMC-cloud/Tree/stargazers"><img src="https://img.shields.io/github/stars/TreeMC-cloud/Tree?style=flat-square&logo=github&color=4F6EF7&labelColor=0B0F1A" alt="Stars"></a>
  <a href="https://github.com/TreeMC-cloud/Tree/network/members"><img src="https://img.shields.io/github/forks/TreeMC-cloud/Tree?style=flat-square&logo=github&labelColor=0B0F1A" alt="Forks"></a>
  <a href="https://github.com/TreeMC-cloud/Tree/commits/main"><img src="https://img.shields.io/github/last-commit/TreeMC-cloud/Tree?style=flat-square&logo=github&labelColor=0B0F1A" alt="Last Commit"></a>
  <a href="https://papermc.io"><img src="https://img.shields.io/badge/Minecraft-1.21.x-16A34A?style=flat-square&logo=mojang-studios&logoColor=white&labelColor=0B0F1A" alt="Minecraft"></a>
  <a href="https://adoptium.net"><img src="https://img.shields.io/badge/Java-21+-F97316?style=flat-square&logo=openjdk&logoColor=white&labelColor=0B0F1A" alt="Java"></a>
  <a href="https://bstats.org/plugin/server-implementation/TreeCore"><img src="https://img.shields.io/bstats/servers/29949?style=flat-square&label=Servers&color=8B5CF6&labelColor=0B0F1A" alt="bStats Servers"></a>
</p>

</div>

---

## TreeCore 是什么？

**TreeCore**（也称 **TreeMC**）是一款面向我的世界 / Minecraft 服务器场景的**高性能服务端核心**，基于 Paper 深度优化。

- **性能优化** — 动态视距、自动分层、Paper 14 项配置热调、TPS / MSPT 稳定控制、多核并行引擎
- **Web 管理面板** — 内置 11 页签面板：控制台、诊断、备份、世界管理、资源包、模型、粒子特效等
- **资源包与模型管理** — 模型上传、纹理管理、ZIP 资源包托管、在线玩家推送
- **生态集成** — CraftEngine、Multiverse、ItemsAdder 内置桥接
- **生电支持** — 假人系统、红石热点分析/回放、TNT/地毯复制开关

---

## 📈 项目统计

<div align="center">

[![bStats](https://bstats.org/signatures/server-implementation/TreeCore.svg)](https://bstats.org/plugin/server-implementation/TreeCore "bStats")

**[查看完整统计图表 →](https://bstats.org/plugin/server-implementation/TreeCore)**

</div>

---

## 与其他 Minecraft 服务端核心对比

<table>
<tr>
<th align="left" width="200">能力维度</th>
<th align="center" width="110">Paper</th>
<th align="center" width="110">Purpur</th>
<th align="center" width="110"><a href="https://github.com/SucIXR/Kitin">Kitin</a></th>
<th align="center" width="150"><b>TreeCore</b> ✅</th>
</tr>
<tr><td colspan="5"><b>基础信息</b></td></tr>
<tr>
<td>基于</td>
<td align="center">CraftBukkit</td>
<td align="center">Paper</td>
<td align="center">Folia</td>
<td align="center"><b>Paper 1.21.x</b></td>
</tr>
<tr>
<td>定位</td>
<td align="center">通用基础核心</td>
<td align="center">自定义玩法扩展</td>
<td align="center">轻量网络优化</td>
<td align="center"><b>全功能运维平台</b></td>
</tr>
<tr>
<td>开源协议</td>
<td align="center">GPL-3.0</td>
<td align="center">MIT</td>
<td align="center">GPL-3.0</td>
<td align="center"><b>GPL-3.0</b></td>
</tr>
<tr><td colspan="5"><b>性能优化</b></td></tr>
<tr>
<td>动态视距 / 模拟距离</td>
<td align="center">❌ 手动配置</td>
<td align="center">❌ 手动配置</td>
<td align="center">❌</td>
<td align="center"><b>✅ 自动 2~10 档</b></td>
</tr>
<tr>
<td>自动分层预设</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 4 档自动切换</b></td>
</tr>
<tr>
<td>Paper 配置热调</td>
<td align="center">❌ 需重启</td>
<td align="center">❌ 需重启</td>
<td align="center">❌</td>
<td align="center"><b>✅ 14 项运行时调参</b></td>
</tr>
<tr>
<td>网络优化</td>
<td align="center">❌ 静态阈值</td>
<td align="center">❌ 静态阈值</td>
<td align="center"><b>✅ 核心特色</b></td>
<td align="center"><b>✅ 动态压缩 + 包过滤</b></td>
</tr>
<tr>
<td>多核并行</td>
<td align="center">❌ 单线程</td>
<td align="center">❌ 单线程</td>
<td align="center">✅ Folia 多线程</td>
<td align="center"><b>✅ 工作线程池 + 虚拟线程</b></td>
</tr>
<tr>
<td>碰撞 / 寻路优化</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ MSPT 感知节流 + 缓存</b></td>
</tr>
<tr>
<td>区块预加载</td>
<td align="center">❌ 需 Chunky</td>
<td align="center">❌ 需 Chunky</td>
<td align="center">❌</td>
<td align="center"><b>✅ 方向预测 + 异步</b></td>
</tr>
<tr><td colspan="5"><b>管理工具</b></td></tr>
<tr>
<td>Web 管理面板</td>
<td align="center">❌ 需第三方</td>
<td align="center">❌ 需第三方</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置 11 页面板</b></td>
</tr>
<tr>
<td>远程控制台 + 日志流</td>
<td align="center">❌ 需 RCON</td>
<td align="center">❌ 需 RCON</td>
<td align="center">❌</td>
<td align="center"><b>✅ Web 实时</b></td>
</tr>
<tr>
<td>诊断工具</td>
<td align="center">❌ 需 SSH</td>
<td align="center">❌ 需 SSH</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内存快照 / 线程 dump</b></td>
</tr>
<tr>
<td>备份管理</td>
<td align="center">❌ 需插件</td>
<td align="center">❌ 需插件</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置</b></td>
</tr>
<tr><td colspan="5"><b>游戏功能</b></td></tr>
<tr>
<td>假人系统</td>
<td align="center">❌ 需 Carpet</td>
<td align="center">❌ 需 Carpet</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置完整系统</b></td>
</tr>
<tr>
<td>资源包 / 模型管理</td>
<td align="center">❌ 需插件</td>
<td align="center">❌ 需插件</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置 + Web 管理</b></td>
</tr>
<tr>
<td>Folia 特性修复</td>
<td align="center">—</td>
<td align="center">—</td>
<td align="center"><b>✅ 定位条/珍珠等</b></td>
<td align="center">—（基于 Paper）</td>
</tr>
<tr><td colspan="5"><b>原版兼容</b></td></tr>
<tr>
<td>红石机制</td>
<td align="center">✅ 原版</td>
<td align="center">⚠️ 可选修改</td>
<td align="center">✅ 原版</td>
<td align="center"><b>✅ 默认原版</b></td>
</tr>
<tr>
<td>生物 AI</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center"><b>✅ 保持原版 AI</b></td>
</tr>
<tr>
<td>Paper 插件兼容</td>
<td align="center">✅</td>
<td align="center">✅</td>
<td align="center">⚠️ Folia 限制</td>
<td align="center"><b>✅ 高兼容</b></td>
</tr>
</table>

> **Kitin** 是 [SucIXR/Kitin](https://github.com/SucIXR/Kitin) 开发的轻量级 Folia 分支，专注网络优化与 Folia 特性修复，适合追求极致轻量和 Folia 多线程的场景。TreeCore 则基于 Paper，提供更全面的运维工具链和管理能力。两者定位不同，各有所长。

---

## 快速链接

| 页面 | 链接 |
|------|------|
| 🏠 **官网首页** | [treemc-cloud.github.io](https://treemc-cloud.github.io/) |
| 📥 **免费下载** | [下载页](https://treemc-cloud.github.io/downloads/) |
| 📖 **技术文档** | [文档中心](https://treemc-cloud.github.io/docs/) |
| ⚡ **核心能力** | [能力介绍](https://treemc-cloud.github.io/features/) |
| 🗺️ **路线图** | [开发计划](https://treemc-cloud.github.io/roadmap/) |
| 📋 **更新日志** | [版本历史](https://treemc-cloud.github.io/changelog/) |
| 👥 **团队与社区** | [社区入口](https://treemc-cloud.github.io/team/) |
| 🚀 **快速开始** | [部署指南](https://treemc-cloud.github.io/docs/quick-start/) |
| ⚙️ **配置参考** | [配置文档](https://treemc-cloud.github.io/docs/configuration/) |

## 技术文档

TreeCore 的技术文档已全部整合到官网站内：

- [快速开始](https://treemc-cloud.github.io/docs/quick-start/) — 启动要求与首次部署
- [Web 面板访问](https://treemc-cloud.github.io/docs/web-panel/) — 远程访问与鉴权配置
- [首次上线检查清单](https://treemc-cloud.github.io/docs/first-day-checklist/) — 上线前确认事项
- [Web 页面总览](https://treemc-cloud.github.io/docs/web-pages-overview/) — 11 个页签功能说明
- [命令与日常运维](https://treemc-cloud.github.io/docs/commands/) — 运维命令参考
- [资源包 / 模型链路](https://treemc-cloud.github.io/docs/resource-pack/) — 资源管理流程
- [集成与世界管理](https://treemc-cloud.github.io/docs/integrations-and-worlds/) — 插件集成说明
- [假人 / 红石运维](https://treemc-cloud.github.io/docs/fakeplayer-and-redstone/) — 生电保护
- [诊断与备份](https://treemc-cloud.github.io/docs/diagnostics-and-backups/) — 排障与数据保护
- [配置参考](https://treemc-cloud.github.io/docs/configuration/) — 常用配置项说明
- [命令速查表](https://treemc-cloud.github.io/docs/command-cheatsheet/) — 快速查命令
- [系统架构总览](https://treemc-cloud.github.io/docs/system-overview/) — 模块职责与整体构成
- [模块地图](https://treemc-cloud.github.io/docs/module-map/) — 代码目录与阅读顺序
- [Web 资源同步机制](https://treemc-cloud.github.io/docs/web-ui-pipeline/) — 前端资源同步

## 社区

- **QQ 群**：[910574536](https://qm.qq.com/q/MfzN81ScIc)
- **GitHub Issues**：[提交问题](https://github.com/TreeMC-cloud/Tree/issues)
- **GitHub Discussions**：[参与讨论](https://github.com/TreeMC-cloud/Tree/discussions)
- **源码仓库**：[TreeMC-cloud/Tree](https://github.com/TreeMC-cloud/Tree)

---

<div align="center">

**TreeCore** — 让每一个 tick 都更高效

<sub>TreeCore, TreeMC, 我的世界核心, Minecraft 服务端核心, Paper, Folia, 高性能 Minecraft, Web 管理面板, Minecraft 开服, MC 服务端</sub>

</div>
