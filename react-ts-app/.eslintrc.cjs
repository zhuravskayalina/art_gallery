module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'jest': true,
    'node': true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', 'import'],
  rules: {
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-reqiures': 'off',
    'react/jsx-uses-react': 'off',
    'class-methods-use-this': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off'
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        'project': './tsconfig.json',
      },
    },
  },
};
