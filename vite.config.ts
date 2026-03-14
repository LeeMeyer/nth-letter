import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, 'index.js'),
      name: 'nth-letter',
      fileName: (format) => `nth-letter.${format}.js`
    }
  }
});