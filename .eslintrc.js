/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [],
  rules: {
    // Desabilitar todas as regras
    'no-console': 'off',
    'no-debugger': 'off',
    // Desabilitar qualquer regra que possa causar problemas
    'no-unused-vars': 'off',
    'no-undef': 'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  }
}
