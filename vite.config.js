import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

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
  root: resolve(__dirname, 'src/app'),
  base: './',
  build: {
    target: 'esnext',
    outDir: resolve(__dirname, 'dist/overwolf/build'),
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/app/background.html'),
        development: resolve(__dirname, 'src/app/development.html'),
        index: resolve(__dirname, 'src/app/index.html'),
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
