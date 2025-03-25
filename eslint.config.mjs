import base from './src/eslint/base.mjs'

export default [
  ...base,

  {
    ignores: ['examples/**'],
  },
]
