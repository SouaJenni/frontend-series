import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';


export default defineConfig([
    js.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            globals: globals.browser
        },
        settings: {
            react: {
                version: '19.1'
            }
        },
        plugins: {
            js,
            react: pluginReact
        },
        rules: {
            indent: ['error', 4],
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'react/jsx-key': 'error'
        }
    }
]);
