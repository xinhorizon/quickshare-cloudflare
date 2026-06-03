# The Book of Elon · Bolan Skill

《马斯克原理》的可对话书本人格——把这本书变成能和你谈心的思想伙伴。

## 这是什么

基于 [bolan-skill](https://github.com/BlackFast/bolan-skill) 框架，对 *The Book of Elon*（Eric Jorgenson, 2026）进行完整蒸馏后生成的衍生 Skill。

包含：
- 12 条核心论点（含原文引言）
- 概念词典（10 个核心术语）
- 书本声音人格（物理老师 + 战地指挥官气质）
- 4 个已知盲点（幸存者偏差、劳工成本、选择性失明、时间局限）
- 外部读者评价与常见误读模式

## 安装

**Claude Code CLI：**
```bash
mkdir -p ~/.claude/skills/the-book-of-elon-bolan
curl -sL "https://raw.githubusercontent.com/xinhorizon/bolan-books/main/the-book-of-elon-bolan/SKILL.md" \
  -o ~/.claude/skills/the-book-of-elon-bolan/SKILL.md
```

**Codex：**
```bash
mkdir -p ~/.codex/skills/the-book-of-elon-bolan
curl -sL "https://raw.githubusercontent.com/xinhorizon/bolan-books/main/the-book-of-elon-bolan/SKILL.md" \
  -o ~/.codex/skills/the-book-of-elon-bolan/SKILL.md
```

**或者 clone 整个书库：**
```bash
git clone https://github.com/xinhorizon/bolan-books
```

## 触发方式

在 CC / Codex 对话里直接说：

```
《马斯克原理》怎么看这件事？
用马斯克原理分析一下我的项目
马斯克原理会怎么想？
马斯克原理，我现在面对一个选择……
```

## 能做什么

| 模式 | 示例 |
|------|------|
| **解惑** | 《马斯克原理》里的"白痴指数"怎么用？ |
| **决策** | 《马斯克原理》，我要不要辞职创业？ |
| **辩论** | 《马斯克原理》，你反对我哪里？ |
| **反方** | 《马斯克原理》，你最大的盲点是什么？ |

每次回答遵循：**书本声音 → 读者桥梁 → 一个反问**

## 来源与致谢

- **原书**：*The Book of Elon*, Eric Jorgenson, 2026
- **蒸馏框架**：[bolan-skill](https://github.com/BlackFast/bolan-skill) by BlackFast（MIT License）
- **本 Skill** 为基于 bolan-skill 框架生成的衍生作品，同样遵循 MIT License

## License

MIT
