module.exports = {
  parserOptions: {
    project: true,
    tsconfigRootDir: "./tsconfig.json",
  },
  env: {
    browser: true,
    amd: true,
    node: true
},
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};