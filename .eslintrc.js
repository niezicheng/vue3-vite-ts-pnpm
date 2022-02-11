module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'airbnb-typescript/base', // 添加 typescript 支持
    'plugin:vue/vue3-recommended' // vue3 的规则。vue2 使用 plugin:vue/recommended
  ],
  // 添加文件错误解析 parser
  parser: 'vue-eslint-parser', // 解析 .vue 文件
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'linebreak-style': 0
  }
};
