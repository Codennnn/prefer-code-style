module.exports = {
  root: true,
  extends: [require.resolve('../../lib/eslint')],
  ignorePatterns: [
    'public',
    'yarn*',
    '.next',
    '!.eslintrc.js',
    '!.prettierrc.js',
    '!.stylelintrc.js',
  ],
}
