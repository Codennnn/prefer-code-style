import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/recommended'],

  {
    files: ['**/*.vue'],
    rules: {
      'vue/attributes-order': [
        1,
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: true,
        },
      ],
      'vue/no-v-html': 0,
      'vue/prefer-separate-static-class': 1,
      'vue/prefer-true-attribute-shorthand': [1, 'always'],
      'vue/no-useless-v-bind': 1,
      'vue/no-unused-refs': 1,
      'vue/no-unused-emit-declarations': 1,
      'vue/no-unused-properties': 1,
      'vue/define-emits-declaration': [1, 'type-literal'],
      'vue/v-for-delimiter-style': [1, 'of'],
      'vue/attribute-hyphenation': [1, 'never'],
      'vue/v-on-event-hyphenation': [1, 'never'],
      'vue/block-order': [
        1,
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
  },
]
