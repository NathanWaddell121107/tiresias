module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],

  plugins: ["@typescript-eslint", "import"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["error", "tab", { SwitchCase: 1 }],
    "react/prop-types": "off",
    "import/no-anonymous-default-export": ["error"],
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        multiline: {
          delimiter: "comma",
          requireLast: false,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: "none",
              requireLast: false,
            },
          },
          typeLiteral: {
            multiline: {
              delimiter: "none",
              requireLast: false,
            },
          },
        },
      },
    ],
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/interface-name-prefix": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["error"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-var": "error",
    "prettier/prettier": [
      "error",
      {
        extends: "prettier.config.js",
      },
    ],
    "no-unused-vars": "error",
    "sort-imports": [
      "off",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "sort-keys": "off",
    "sort-vars": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
