module.exports = {
  extends: [require.resolve('../../lib/stylelint')],
  rules: {
    'color-function-notation': 'modern',
    'selector-id-pattern': null,
  },
  ignoreFiles: ['public'],
}
