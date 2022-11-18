module.exports = {
  root: true,
  extends: [require.resolve('./lib/eslint')],
  ignorePatterns: ['node_modules', 'lib', '!.prettierrc.js', '!.eslintrc.js', '!.stylelintrc.js'],
}
