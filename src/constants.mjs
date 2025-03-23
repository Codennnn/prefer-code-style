export const JAVASCRIPT_FILES = ['*.js', '*.jsx', '*.mjs']

export const TYPESCRIPT_FILES = ['*.ts', '*.tsx']

/**
 * 通用的排序规则
 */
export const COMMON_SORT_GROUPS = [
  // Side effect imports.
  ['^\\u0000'],
  // Parent imports. Put `..` last.
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  // Other relative imports. Put same-folder imports and `.` last.
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  // Style imports.
  ['^.+\\.?(css)$'],
]
