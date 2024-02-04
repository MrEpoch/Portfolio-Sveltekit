import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from "path";

export default defineConfig(({mode}) => ({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'],
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
			'components': path.resolve(__dirname, './src/components'),
      'lib': path.resolve(__dirname, './src/lib'),
      'assets': path.resolve(__dirname, './src/assets'),
      'types': path.resolve(__dirname, './src/types'),
      'images': path.resolve(__dirname, './src/images'),
      '$app': path.resolve(__dirname, './.svelte-kit/tsconfig.json'),
    }
  }
}))
