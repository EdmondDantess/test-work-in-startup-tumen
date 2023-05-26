module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "react/no-unescaped-entities": 0,
    "react/prop-types": 0,
    "prettier/prettier": 0
  },
};
