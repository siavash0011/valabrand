import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  // Vite injects `MODE` and `DEV`/`PROD` here
  const dev = mode === 'development'

  return {
    base: dev ? '/' : '/valabrand',
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true,
    },
  }
})
