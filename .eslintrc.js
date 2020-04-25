module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "jest",
    'jsx-a11y',
    'react-hooks'],
  extends: [
    "react-app",
    'plugin:jsx-a11y/recommended',
    "eslint:recommended",
    "plugin:jest/recommended",
    "eslint-config-prettier"
  ],
  settings: {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "strict": ["error", "never"]
  },
  env: {
    "browser": true,
    "jest/globals": true
  },
  rules: {
    'react/display-name': [
      0
    ],
    'react/prop-types': [
      0
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error'
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: [
        "@typescript-eslint/eslint-plugin",
        'jsx-a11y',
        'react-hooks'
      ],
      extends: [
        "react-app",
        'plugin:jsx-a11y/recommended',
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:eslint-config-prettier/@typescript-eslint"
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'off'
        ],
        'react/display-name': [
          0
        ],
        'react/prop-types': [
          0
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error'
      }
    }
  ]
}
