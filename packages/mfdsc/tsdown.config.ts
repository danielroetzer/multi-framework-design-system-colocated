import solid from 'rolldown-plugin-solid';
import svelte from 'rollup-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';
import { defineConfig, type UserConfig } from 'tsdown';
import vue from 'unplugin-vue/rolldown';

const commonConfig: UserConfig = {
  dts: true,
  platform: 'neutral',
  unbundle: true,
  external: ['solid-js', 'react', 'react-dom', 'svelte', 'vue'],
  skipNodeModulesBundle: true,
};

export default defineConfig([
  {
    // Solid
    ...commonConfig,
    entry: ['./src/entries/solid.ts'],
    plugins: [solid()],
    outDir: 'dist/solid',
  },
  {
    // React
    ...commonConfig,
    entry: ['./src/entries/react.ts'],
    outDir: 'dist/react',
  },
  {
    // Svelte
    ...commonConfig,
    entry: ['./src/entries/svelte.ts'],
    plugins: [svelte({ preprocess: sveltePreprocess() })],
    outDir: 'dist/svelte',
  },
  {
    // Vue
    ...commonConfig,
    entry: ['./src/entries/vue.ts'],
    plugins: [vue({ isProduction: true })],
    outDir: 'dist/vue',
    dts: { vue: true },
  },
]);
