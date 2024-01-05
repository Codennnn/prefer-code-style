const { TYPESCRIPT_FILES } = require('../../src/constants')

module.exports = {
  root: true,

  extends: [require.resolve('../../src/eslint/preset/next'), 'plugin:jsx-a11y/recommended'],

  rules: {
    'import/no-unresolved': [
      2,
      {
        ignore: ['^\\~/', '^(contentlayer|next-contentlayer)', '@vercel/analytics/react'],
      },
    ],
  },

  overrides: [
    {
      files: TYPESCRIPT_FILES,
      rules: {
        '@typescript-eslint/no-unsafe-enum-comparison': 0,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  ],
}
