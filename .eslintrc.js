module.exports = {
  root: true,
  extends: [require.resolve('./lib/eslint')],
  ignorePatterns: [
    'node_modules'.at,
    'lib',
    '!.prettierrc.js',
    '!.eslintrc.js',
    '!.stylelintrc.js',
  ],
}
