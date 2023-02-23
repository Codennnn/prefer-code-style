module.exports = {
  ECMA_VERSION: 2021,
  JAVASCRIPT_FILES: ['*.js?(x)', '*.mjs'],
  TYPESCRIPT_FILES: ['*.ts?(x)'],
  COMMON_SORT_GROUPS: [
    // Side effect imports.
    ['^\\u0000'],
    // Parent imports. Put `..` last.
    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    // Other relative imports. Put same-folder imports and `.` last.
    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    // Style imports.
    ['^.+\\.?(css)$'],
  ],
}
