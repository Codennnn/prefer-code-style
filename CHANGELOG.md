## [4.0.0] - 2026-10-21

### 依赖与兼容性

- 升级 ESLint 10.13、typescript-eslint 8.72、Stylelint 17.16、Prettier 3.9 及当前兼容的插件版本
- 升级示例项目至 Next.js 16、React 19、TypeScript 6 和 Tailwind CSS 4
- Tailwind ESLint 预设升级至插件 4.x，改为要求 Tailwind CSS 4
- 将 pnpm 更新至 12.14，并启用新版本冷却期与构建脚本确认
- 增加传递依赖安全修复，保留尚无上游补丁的 `braces` 告警

### 配置改进

- Stylelint 预设支持 Tailwind CSS 4 指令和 CSS Modules 中的 `@apply`
- 测试流程增加两个示例项目的生产构建验证
- 更新 Node、TypeScript、Tailwind CSS 和 ESLint 兼容性说明
- 将示例文档中的 GitHub Token 替换为占位符

## [3.9.15] - 2025-01-28

### 代码质量改进

- 修复 Prettier 配置重复定义问题，现在统一从 `constants.mjs` 导入
- 统一预设配置的导入路径风格，所有预设现在使用相对路径导入
- 修复 Stylelint 配置中的 LESS 文件支持（添加了 `postcss-less` 语法）
- 添加缺失的依赖：`postcss-scss` 和 `postcss-less`

## [1.0.0...1.3.5] - 2023-07-10

- 更改配置导入的方式，可自由、按需引入相应的配置。

## [0.6.2] - 2022-07-09

- 升级依赖包，[查看具体更改](https://github.com/Codennnn/prefer-code-style/commit/993be761df1bce225755ce554f90f859bb453532#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519)

## [0.5.1] - 2022-01-08

- stylelint 配置添加 `scss/at-rule-no-unknown` 添加 `ignoreAtRules`

## [0.5.0] - 2021-12-01

- 移除 `eslint-plugin-jsx-a11y`

## [0.4.4...0.4.6] - 2021-10-31

- 升级 `ESlint` 8.x
- 升级 `Stylelint` 14.x
- prettier `bracketSameLine`

## [0.4.3] - 2021-09-04

- 添加对 `plugin:import/typescript` 的判断
- 更新 `README.md`，添加用法示例
