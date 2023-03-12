const { resolve } = require('path')
const { TYPESCRIPT_FILES } = require('prefer-code-style/constants')

module.exports = {
  root: true,
  extends: [require.resolve('prefer-code-style/eslint/preset/next')],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^\\~/'] }],
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parserOptions: {
        project: resolve(__dirname, 'tsconfig.json'),
      },
    },
  ],
}
