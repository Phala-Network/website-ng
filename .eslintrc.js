module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'sort-imports-es6-autofix'
  ],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'multiple', 'single', 'all']
      }
    ],
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off'
  }
}
