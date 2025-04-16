import tailwind from '../tailwindcss.mjs'
import typescriptStrict from '../typescript-strict.mjs'
import vue from '../vue.mjs'
import normal from './normal.mjs'

export default [
  ...normal,
  ...tailwind,
  ...typescriptStrict,
  ...vue,
]
