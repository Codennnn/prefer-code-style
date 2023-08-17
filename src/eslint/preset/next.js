const { TYPESCRIPT_FILES } = require('../../constants')

module.exports = {
  extends: [
    require.resolve('../node'),
    require.resolve('../browser'),
    require.resolve('../typescript'),
    require.resolve('../react'),
    require.resolve('../next'),
    require.resolve('../tailwindcss'),
  ],

  overrides: [
    {
      files: TYPESCRIPT_FILES,
      extends: [require.resolve('../rules/typescript-prefer-strict')],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
}
