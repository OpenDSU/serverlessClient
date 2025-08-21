import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'ServerlessClient',
      fileName: (format) => `serverless-client.${format === 'es' ? 'mjs' : 'umd.js'}`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
});