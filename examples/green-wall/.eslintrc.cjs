const { TYPESCRIPT_FILES } = require('../../src/constants')

module.exports = {
  root: true,
  extends: [require.resolve('../../src/eslint/preset/next')],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^\\~/'] }],
  },
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  ],
}
