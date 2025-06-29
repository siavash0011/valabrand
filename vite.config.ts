import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment config
export default defineConfig({
  base: 'valabrand/',
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
})
