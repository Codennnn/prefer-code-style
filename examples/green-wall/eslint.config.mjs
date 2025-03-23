import { TYPESCRIPT_FILES } from 'prefer-code-style/constants'
import nextConfig from 'prefer-code-style/eslint/preset/next'

export default [
  ...nextConfig,

  {
    files: TYPESCRIPT_FILES,
    rules: {
      'import/no-unresolved': [2, { ignore: ['^\\~/'] }],
    },
  },
]
