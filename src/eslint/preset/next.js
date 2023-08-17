module.exports = {
  extends: [
    require.resolve('../node'),
    require.resolve('../browser'),
    require.resolve('../typescript'),
    require.resolve('../rules/typescript-prefer-strict'),
    require.resolve('../react'),
    require.resolve('../next'),
    require.resolve('../tailwindcss'),
  ],
}
