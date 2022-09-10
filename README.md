<div align="center">

# Prefer Code Style

**别让重复的代码风格配置工作占用你的时间**

</div>

![看不到图片？你可能需要开 VPN 加速。](/social-preview.png)

## 💡 想法起源

在许多项目中，我们都希望保持统一的代码风格。一般情况下，新建一个项目时我们会从零开始安装 ESLint、Stylelint、Prettier 依赖和它们的插件，然后再加入自己的个性化配置。但是，为什么要一遍又一遍地重复这些恼人的工作呢？！🤔 显然，如果我们要从中解放自己，那就需要一个工具来帮助完成这些固定的工作，这就是 `prefer-code-style` 的职责所在了。

## 📜 介绍

`prefer-code-style` 适用于 React 项目，它集成了常用的 ESLint、Stylelint、Prettier 配置，并且内置了一些**主观偏好**的格式配置，帮助你节省构建新项目时配置代码风格的时间，同时约定了各个项目统一的格式规范。

## 📥 安装

```bash
yarn add -D prefer-code-style
```

> **Note**  
> `prefer-code-style` 内部已经集成了 eslint、prettier、stylelint，所以你无需重复安装。如果你事先安装了他们，为了防止版本冲突，请在安装 `prefer-code-style` 前把他们移除掉。

## ⚔️ 用法

添加 `.eslintrc.js`，配置如下：

```js
module.exports = {
  extends: [require.resolve('prefer-code-style/lib/eslint')],
}
```

添加 `.stylelintrc.js`，配置如下：

```js
module.exports = {
  extends: [require.resolve('prefer-code-style/lib/stylelint')],
}
```

添加 `.prettierrc.js`，配置如下：

```js
const { prettier } = require('prefer-code-style')

module.exports = {
  ...prettier,
}
```

## 🔗 搭配 VS Code 使用更佳

安装插件 [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) 和 [vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)。

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

完成以上步骤后，你就能够获得更好的格式提示，并在保存文件时自动格式化你的代码，享受工具带来的便利吧 😎 ～

## 📦 内置的插件/配置

`prefer-code-style` 内置了如下常用插件，如果这里面缺少你需要的插件，你可以自行添加所需。

<details>
<summary>ESLint</summary>

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#readme)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import#readme)
- [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort#readme)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react#readme)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-tailwindcss(按需引入)](https://github.com/francoismassart/eslint-plugin-tailwindcss#readme)

</details>

<details>
<summary>Stylelint</summary>

- [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier#readme)
- [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order#readme)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard#readme)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order#readme)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier#readme)
- [stylelint-scss](https://github.com/stylelint-scss/stylelint-scss#readme)

</details>
