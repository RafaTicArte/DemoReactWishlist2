module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './tsconfig.node.json'
    ],
    tsconfigRootDir: __dirname,
   },
  plugins: [
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off'
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
}