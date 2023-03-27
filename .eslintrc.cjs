module.exports = {
  plugins: ['solid', '@typescript-eslint', 'implicit-dependencies', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:solid/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'no-debugger': 1,
    'no-console': 1,
    'no-unused-vars': 0,
    'no-restricted-globals': 0,
    'no-unused-expressions': 0,
    'no-unneeded-ternary': 1,
    'no-nested-ternary': 0,
    'no-case-declarations': 1,
    'jsx-quotes': [1, 'prefer-double'],
    'import/no-anonymous-default-export': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/unbound-method': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-confusing-non-null-assertion': 0,
    '@typescript-eslint/consistent-type-imports': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      2,
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        warnOnUnassignedImports: true,
        groups: [['builtin', 'external'], 'internal', 'index', ['parent', 'sibling']],
        pathGroups: [
          {
            pattern: '@(solid*|suid*)/**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@banjo/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  root: true,
};
