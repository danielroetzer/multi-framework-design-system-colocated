// @ts-check
import eslint from '@eslint/js';
import astroPlugin from 'eslint-plugin-astro';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/.astro/**',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  astroPlugin.configs.recommended,
  {
    // Include .astro files in addition to the defaults
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,astro}'],
    ...jsxA11yPlugin.flatConfigs.recommended,
  },
);
