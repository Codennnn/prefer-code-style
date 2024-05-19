module.exports = {
  root: true,

  extends: [
    require.resolve('../../src/eslint/node'),
    require.resolve('../../src/eslint/browser'),
    require.resolve('../../src/eslint/react'),
    require.resolve('../../src/eslint/next'),
    require.resolve('../../src/eslint/tailwindcss'),
  ],
}
