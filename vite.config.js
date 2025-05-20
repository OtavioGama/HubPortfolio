import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),

    // Using viteStaticCopy to cleanly include pure HTML projects in the final build
    viteStaticCopy({
      targets: [
        {
          src: 'src/projects/HTMLprojects',
          dest: '', // Copy to dist root
        },
      ]
    })
  ],

  server: {
    host: '0.0.0.0',
  },  
  
  css: {
    devSourcemap: true
  },

  preview: {
    allowedHosts: ['otaviodevhub.onrender.com']
  },
})
