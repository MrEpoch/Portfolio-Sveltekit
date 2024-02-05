import {defineConfig} from 'vitest/config'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import path from "path";


export default defineConfig(({mode}) => ({
  plugins: [svelte()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.js'],
    deps: {
      inline: ["@sveltejs/kit"]
    }
  },
  resolve: {
    conditions: mode === 'test' ? ['browser'] : [],
    alias: {
			'components': path.resolve(__dirname, './src/components'),
      'lib': path.resolve(__dirname, './src/lib'),
      'assets': path.resolve(__dirname, './src/assets'),
      'types': path.resolve(__dirname, './src/types'),
      'images': path.resolve(__dirname, './src/images'),
      // '$app': path.resolve(__dirname, './node_modules/@sveltejs/kit/src/runtime/app'),
    }
  }
}))
