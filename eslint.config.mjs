import pluginJs from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'dist/*',
      '.next/*',
      'tsconfig.json',
      'postcss.config.js',
      'coverage/*',
      '**/__mocks__/**',
      '**/__tests__/**',
      'src/routeTree.gen.ts',
    ],
  },
  { files: ['**/*.{ts,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  pluginReact.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect', // React version. "detect" automatically picks the version you have installed.
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-console': ['warn', { allow: ['debug', 'error', 'info', 'warn'] }],
      'require-await': 'warn',
      // 'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
        },
      ],
      // 'prefer-const': [
      //   'error',
      //   {
      //     destructuring: 'all',
      //     // ignoreReadBeforeAssign: false,
      //   },
      // ],
      'react/react-in-jsx-scope': 'off',
      // TODO: Fix these rules.
      'prefer-const': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/heading-has-content': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-redundant-roles': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-case-declarations': 'off',
      'no-constant-condition': 'off',
      'no-empty-pattern': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
