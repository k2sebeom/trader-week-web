import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import eslitConfigPrettier from 'eslint-config-prettier';

import { fixupPluginRules } from '@eslint/compat';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier,
  eslitConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': fixupPluginRules(pluginReactHooks),
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
];
