module.exports = {
  root: true,
  extends: [
    require.resolve('prefer-code-style/eslint/node'),
    require.resolve('prefer-code-style/eslint/typescript'),
  ],
  ignorePatterns: ['/examples'],
}
