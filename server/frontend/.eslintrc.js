module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "react/no-unknown-property": ["off"],
    "react/jsx-no-comment-textnodes": ["off"],
    "react/no-unescaped-entities": ["off"]
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
