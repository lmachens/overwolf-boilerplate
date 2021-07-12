import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const { PORT = 3001 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  base: './',
  build: {
    target: 'esnext',
    outDir: 'overwolf/dist',
    rollupOptions: {
      input: {
        background: 'background.html',
        development: 'development.html',
        index: 'index.html',
      },
    },
  },
});
