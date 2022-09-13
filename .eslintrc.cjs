/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
    'prettier',
  ],
  plugins: ['vue', 'html', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
