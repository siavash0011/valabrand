import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // ✅ VERY important for cPanel/static hosting

  plugins: [react()],
  server: {
    port: 3000,       // or any free port
    strictPort: true, // exit if 3000 is unavailable
  },
});
