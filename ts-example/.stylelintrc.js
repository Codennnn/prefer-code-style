module.exports = {
  extends: [require.resolve('../lib/stylelint')],
  ignoreFiles: ['build/**/*.css'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
}
