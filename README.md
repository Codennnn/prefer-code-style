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
