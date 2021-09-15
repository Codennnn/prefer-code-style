<div align="center">

# Prefer Code Style

**别让重复的格式化配置工作占用你的时间！**

</div>

## 说明

集成了一些常用的 ESlint ｜ Stylelint ｜ prettier 配置，省去你构建新项目时配置代码格式化的时间。

## 安装

```bash
yarn add -D prefer-code-style
```

## 用法

添加 `.eslintrc.js`，配置如下：

```js
module.exports = {
  extends: [require.resolve('prefer-code-style/lib/eslint')],
}
```

添加 `.stylelint.js`，配置如下：

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

## 搭配 VS Code 使用更佳

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

完成以上步骤后，你就能够获得更好的格式提示，并在保存文件时自动格式化你的代码，享受工具给你带来的便捷吧😎～
