module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "prettier/prettier": [
          2,
          {
            trailingComma: "es5",
            singleQuote: true,
            semi: false,
          },
        ],
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "prettier/prettier": [
          2,
          {
            trailingComma: "es5",
            singleQuote: false,
            semi: true,
          },
        ],
      },
    },
  ],
  rules: {
    "no-duplicate-imports": "error",
  },
  plugins: ["react-hooks", "import"],
};
