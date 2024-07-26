import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  loader: {
    '.ico': 'file',
    '.bmp': 'file',
  },
  splitting: false,
  sourcemap: true,
  clean: true,
});
