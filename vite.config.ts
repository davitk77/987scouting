import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/987scouting/',  // Relative path for assets and base URL
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['assets/**/*'],
  build: {
    outDir: 'dist',  // Build output folder (can be 'dist' or any folder name you choose)
  },
});
