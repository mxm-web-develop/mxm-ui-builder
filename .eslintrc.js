module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".js", "vue"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-essential",
    "plugin:storybook/recommended",
    "plugin:markdown/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};
