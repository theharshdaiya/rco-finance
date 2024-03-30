import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-free/css/all.css'] // Include any other CSS files here
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@image', replacement: fileURLToPath(new URL('./src/assets/image', import.meta.url)) },
    ]
  }
})
