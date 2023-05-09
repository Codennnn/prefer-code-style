<div align="center">

# Prefer Code Style

**别让重复的代码风格配置工作占用你的时间**

</div>

![看不到图片？你可能需要开 VPN 加速。](/social-preview.png)

## 💡 想法起源

在许多项目中，我们都希望保持统一的代码风格。一般情况下，新建一个项目时我们会从零开始安装 ESLint、Stylelint、Prettier 的依赖和它们的插件，然后再加入自己的个性化配置。但是，为什么要一遍又一遍地重复这些恼人的工作呢？！🤔 显然，如果我们要从中解放自己，那就需要一个工具来帮助完成这些固定的工作，这就是 `prefer-code-style` 的职责所在了。

## 📜 介绍

`prefer-code-style` 适用于 React 项目，它集成了常用的 ESLint、Stylelint、Prettier 配置，并且内置了一些**主观偏好**的格式配置，帮助你节省构建新项目时配置代码风格的时间，同时约定了各个项目统一的格式规范。

> **Warning**  
> 这个项目并不适合所有人，它集成了我的编码风格习惯和偏好，专门服务于我的个人项目，很长一段时间中，它们配合得很好。我真心希望你喜欢它，并且鼓励你也创建属于自己的格式化配置集合。

## 📥 安装

```bash
yarn add -D prefer-code-style
```

> **Note**  
> prefer-code-style 内部已经集成了 eslint、prettier、stylelint，所以你无需重复安装。如果你事先安装了他们，为了防止版本冲突，请在安装 prefer-code-style 前把他们移除掉。

## ⚙ 用法

### ESLint:

ESLint 的配置是根据项目类型拆分的，你可以按需进行组合。

以下是可用的扩展配置：

- prefer-code-style/node
- prefer-code-style/browser
- prefer-code-style/typescript
- prefer-code-style/react
- prefer-code-style/next
- prefer-code-style/tailwindcss

添加 `.eslintrc.js`，配置示例如下：

```js
// 假设你的项目使用了 TypeScript：
const { resolve } = require('path')
const { TYPESCRIPT_FILES } = require('prefer-code-style/constants')

module.exports = {
  extends: [
    require.resolve('prefer-code-style/eslint/node'),
    require.resolve('prefer-code-style/eslint/browser'),
    require.resolve('prefer-code-style/eslint/typescript'),
  ],
  rules: {
    /* 你仍然可以在这里配置你的规则偏好。 */
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parserOptions: {
        project: resolve(__dirname, 'tsconfig.json'), // <- 添加此配置指明你项目中 tsconfig.json 的位置
      },
    },
  ],
}
```

当然，这样的组合写起来也很麻烦，所以你还可以使用适用特定项目的预设的配置，比如这样：

```js
// 适用于 Next.js 项目
module.exports = {
  extends: [require.resolve('prefer-code-style/eslint/preset/next')],
}

// 适用于 Umi.js 项目
module.exports = {
  extends: [require.resolve('prefer-code-style/eslint/preset/umi')],
}
```

### Prettier:

添加 `.prettierrc.js`，配置如下：

```js
const prettier = require('prefer-code-style/prettier')

module.exports = {
  ...prettier,
}
```

### Stylelint:

添加 `.stylelintrc.js`，配置如下：

```js
module.exports = {
  extends: [require.resolve('prefer-code-style/stylelint')],
}
```

## ⚔️ 搭配 VS Code 使用更佳

### 1. 集成配置

在该项目的根目录中找到并下载 [`/prefer-code-style.code-profile`](./prefer-code-style.code-profile)，然后在导入进 VS Code，该 Profile 文件集成了让 `prefer-code-style` 生效所需的最简化配置。

### 2. 手动配置

安装插件 [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 和 [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)。

```bash
# 可以执行以下命令来快速安装 VS Code 插件：
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension stylelint.vscode-stylelint

# 可选，如果你使用 tailwindcss 的话：
code --install-extension bradlc.vscode-tailwindcss
```

然后在 `settings.json` 中加入以下配置：

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

使用以上这些插件，你将能够获得更好的格式提示，并在保存文件时自动格式化你的代码，享受工具带来的便利吧 😎 ～

## 📦 内置的插件/配置

`prefer-code-style` 内置了如下常用插件，让你免于安装和导入大量独立的包。如果这里面缺少你需要的，你仍然可以自行安装。

### ESLint: [查看代码](./src/eslint)

<details>
<summary>查看插件</summary>

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import#readme)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss#readme)

</details>

### Prettier: [查看代码](./src/prettier.js)

<details>
<summary>查看插件</summary>

- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson#readme)

</details>

### Stylelint: [查看代码](./src/stylelint.js)

<details>
<summary>查看插件</summary>

- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier#readme)
- [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order#readme)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard#readme)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order#readme)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier#readme)
- [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss#readme)

</details>

## ⚖ 相似项目

如果你对类似的项目感兴趣，还可以参考：

- [umijs/fabric](https://github.com/umijs/fabric)
- [beskar-co/harmony](https://github.com/beskar-co/harmony)
- [vercel/style-guide](https://github.com/vercel/style-guide)
