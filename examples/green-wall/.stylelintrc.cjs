module.exports = {
  extends: [require.resolve('../../src/stylelint')],
  rules: {
    'color-function-notation': 'modern',
    'selector-id-pattern': null,
  },
  ignoreFiles: ['public'],
}
