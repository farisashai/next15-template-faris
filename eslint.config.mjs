import typescriptEslint from '@typescript-eslint/eslint-plugin';
import node from 'eslint-plugin-node';
import prettier from 'eslint-plugin-prettier';
// import _import from "eslint-plugin-import";
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import jsdoc from 'eslint-plugin-jsdoc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['src/**/*.d.ts', 'eslint.config.mjs', '.next/**'],
  },
  ...compat.extends('airbnb', 'prettier', 'next', 'next/core-web-vitals'),
  {
    plugins: {
      prettier,
      node,
      '@typescript-eslint': typescriptEslint,
      // import: fixupPluginRules(_import),
      jsdoc,
    },

    languageOptions: {
      parser: tsParser,
    },

    rules: {
      'prettier/prettier': 'error',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_$',
        },
      ],

      'no-console': 'error',
      'func-names': 'off',
      'no-process-exit': 'off',
      'object-shorthand': 'off',
      'class-methods-use-this': 'off',
      'arrow-body-style': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': 'off',
      'no-shadow': 'off',
      'react/require-default-props': 'off',
      'jsx-a11y/control-has-associated-label': 'off',

      'jsx-a11y/label-has-associated-control': [
        2,
        {
          assert: 'either',
        },
      ],

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          components: ['Link'],
          specialLink: ['to'],
        },
      ],

      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],

      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],
    },
  },
];
