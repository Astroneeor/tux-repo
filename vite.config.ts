import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',
    sourcemap: false,          // no source maps in production build
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Split React into its own chunk so it's cached separately from app code
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  // Ensure oklch() and other modern CSS is passed through without transformation
  css: {
    devSourcemap: true,
  },
})
