module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-use-v-if-with-v-for': ['error', { allowUsingIterationVar: true }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/name-property-casing': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-v-html': 0
  }
}
