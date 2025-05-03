/**
 * SERP Monorepo ESLint Config
 * Centralized ESLint configuration for all Nuxt projects
 */

// Suppress Node.js experimental warnings
process.noDeprecation = true;
process.env.NODE_NO_WARNINGS = 1;

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import vuePlugin from 'eslint-plugin-vue';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/**
 * Create a Nuxt ESLint config with customizable options
 * @param {Object} options - Configuration options
 * @param {boolean} options.quiet - Whether to disable no-unused-vars in output (but still show in editor)
 * @param {Object} options.additionalRules - Additional rules to include
 * @param {Array} options.additionalIgnores - Additional patterns to ignore
 * @param {string} options.baseDirectory - Base directory for FlatCompat, defaults to current directory
 * @returns {Array} ESLint flat config array
 */
export function createConfig({
  quiet = false,
  additionalRules = {},
  additionalIgnores = [],
  baseDirectory = path.dirname(fileURLToPath(import.meta.url))
} = {}) {
  // Setup FlatCompat for compatibility with older ESLint configs
  const compat = new FlatCompat({
    baseDirectory,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
  });

  const config = [
    {
      ignores: [
        'node_modules/',
        'dist/',
        '.nuxt/',
        '.playground/',
        'coverage/',
        '.github/',
        '.vscode/',
        '.nuxt/',
        '.turbo/',
        '.wrangler/',
        '.data/',
        '.git/',
        'nuxt-ui-landing/',
        'nuxt-ui-saas/',
        ...additionalIgnores
      ]
    },
    {
      // Include compat extensions
      ...compat.extends(),
      // Register the Vue plugin and TypeScript plugin
      plugins: {
        vue: vuePlugin,
        '@typescript-eslint': tsPlugin
      },
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module'
        }
      },
      // Base rules for all files
      rules: {
        // Vue/nuxt rules
        'vue/block-order': [
          'error',
          { order: ['script', 'template', 'style'] }
        ],
        'vue/html-self-closing': [
          'warn',
          {
            html: {
              void: 'always',
              normal: 'never',
              component: 'always'
            },
            svg: 'always',
            math: 'always'
          }
        ],
        'vue/multi-word-component-names': 'off',

        // TypeScript rules
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-require-imports': 'warn',

        // General rules
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'prefer-const': 'warn',

        // Merge in any additional rules
        ...additionalRules
      }
    }
  ];

  return config;
}

// Create the default config
const baseDirectory = path.dirname(fileURLToPath(import.meta.url));
const defaultConfig = createConfig({ baseDirectory });

// Export both the createConfig function and the default config array
export default defaultConfig;
