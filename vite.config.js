import { defineConfig } from 'vite';
import { resolve } from 'path';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'ServerlessClient',
      fileName: (format) => `serverless-client.${format === 'es' ? 'mjs' : 'umd.js'}`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: [],
      plugins: [
        nodeResolve({
          preferBuiltins: false,
          browser: true
        }),
        commonjs({
          transformMixedEsModules: true
        })
      ],
      output: {
        globals: {},
        exports: 'named'
      }
    },
    minify: false
  }
});