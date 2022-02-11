module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    "airbnb-typescript/base", // 添加 typescript 支持
    "plugin:vue/vue3-recommended", // 添加高亮行内容到文件 (vue3 的规则）。vue2 使用 plugin:vue/recommended
    'plugin:prettier/recommended', // 添加解决冲突插件
  ],
  // 添加文件错误解析 parser
  parser: "vue-eslint-parser", // 解析 .vue 文件
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser', // 解析 .ts 文件
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"]
      },
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json"
      }
    }
  },
  globals: {
    defineProps: "readonly", // defineProps 等未定义的错误
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }], // 解决 prettier 行尾报错
    "vue/multi-word-component-names": "off", // 组件名称是否多单词
    "vue/no-multiple-template-root": "off", // 启用根层级多个标签
    "vue/script-setup-uses-vars": "error", // 标记 setup 中的变量为 used
    "import/prefer-default-export": "off", // 是否需要含有默认导出
    "vue/no-v-model-argument": "off", // 'v-model' directives require no argument
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "e", // for e.returnvalue
          "ctx", // for Koa routing
          "req", // for Express requests
          "request", // for Express requests
          "res", // for Express responses
          "response", // for Express responses
          "state" // for vuex state
        ]
      }
    ]
  },
};
