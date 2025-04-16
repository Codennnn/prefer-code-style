export const JAVASCRIPT_FILES = ['**/*.{js,jsx,mjs,cjs}']

export const TYPESCRIPT_FILES = ['**/*.{ts,tsx,mts,cts}']

export const VUE_FILES = ['**/*.{vue}']

export const NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS = {
  indent: 2,
  quotes: 'single',
  semi: false,
  jsx: false,
  commaDangle: 'always-multiline',
  arrowParens: 'always',
  quoteProps: 'as-needed',
  braceStyle: 'stroustrup',
}

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

export const PRETTIER_CONFIG = {
  printWidth: 100,
  arrowParens: 'always',
  bracketSpacing: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  rangeStart: 0,
  rangeEnd: Infinity,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}
