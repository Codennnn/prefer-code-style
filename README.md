<div align="center">

# Prefer Code Style

**将我喜爱的项目格式化插件集成在一起**

</div>

## 说明

我对项目的格式要求较高，这个项目集成了一些我常用的格式化插件，包括 ESlint、Stylelint、prettier 等衍生的配置。

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
