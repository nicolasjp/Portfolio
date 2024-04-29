import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: './',
  root: 'src/',
  publicDir: './assets/',
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true
  }
})
