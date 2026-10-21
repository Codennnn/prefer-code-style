import next from 'prefer-code-style/eslint/next'
import normal from 'prefer-code-style/eslint/preset/normal'

import tailwind from 'prefer-code-style/eslint/tailwindcss'

export default [
  ...normal,
  ...next,
  ...tailwind,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: './src/app/globals.css',
      },
    },
  },
]
