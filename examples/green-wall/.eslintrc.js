module.exports = {
  root: true,
  extends: [require.resolve('../../lib/eslint')],
  ignorePatterns: ['public', '.next', '!.eslintrc.js', '!.prettierrc.js', '!.stylelintrc.js'],
}
