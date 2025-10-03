import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,      // thêm entry vào exports
      outDir: 'dist/types'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: '@pvn/formkit',
      formats: ['es', 'cjs'],      // thêm 'umd' nếu cần dùng qua <script>
      fileName: (format) => format === 'es' ? 'index.mjs' : 'index.cjs'
    },
    rollupOptions: {
      // Không bundle các peer deps (React...)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    target: 'es2018',
    minify: 'esbuild'              // mặc định; nhanh và đủ tốt
  }
});
