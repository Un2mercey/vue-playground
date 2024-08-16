import { includeIgnoreFile } from '@eslint/compat';
import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';
import pluginStorybook from 'eslint-plugin-storybook';
import globals from 'globals';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = resolve(__dirname, '.gitignore');

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    includeIgnoreFile(gitignorePath),
    {
        files: ['**/*.{ts,vue}'],
        ignores: ['node_modules/**/*', 'dist/**/*'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                parser: tseslint.parser,
            },
        },
        plugins: {
            pluginPrettier,
            pluginStorybook,
        },
        rules: {
            ...configPrettier.rules,
        },
    },
];
