import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: '',
  root: 'src/',
  publicDir: '../public/',
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true
  }
})
