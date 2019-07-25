module.exports = {
  env: {
    browser: true,
    es6: true
  },

  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  plugins: [
    'vue'
  ],

  rules: {
    'no-undef': 0,
    'no-shadow': 0,
    'no-bitwise': 0,
    'func-names': 0,
    'no-plusplus': 0,
    'no-sequences': 0,
    'comma-dangle': 0,
    'import/named': 0,
    'no-unused-vars': 0,
    'linebreak-style': 0,
    'import/no-cycle': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': 0,
    'no-restricted-globals': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'space-before-function-paren': 2,
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,
    'prefer-destructuring': ['error', { object: true, array: false }],
  },

  extends: [
    'airbnb-base',
    'plugin:vue/essential'
  ]
};
