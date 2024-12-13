import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  server: {
    proxy: {
      '/api/blackbox': 'http://localhost:3000',
    },
  },
});