import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
  },  
  
  css: {
    devSourcemap: true
  },

  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },

  assetsInclude: ['src/projects/**/*.html'],

  preview: {
    allowedHosts: ['otaviodevhub.onrender.com']
  },
})
