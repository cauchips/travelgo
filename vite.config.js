import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Other configurations can be added here
  build: {
    // Specify the output directory (default is 'dist')
    outDir: 'build',

    // Enable minification for production builds
    minify: 'terser',

    // Configure external dependencies for smaller bundle size
    rollupOptions: {
      input: 'src/index.jsc',
      external: ['react', 'react-dom'],
    },
  },

  // Development server configurations
  server: {
    // Customize the port the dev server runs on
    port: 3000,

    // Proxy API requests to a different backend during development
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },

  // Define environment variables
  define: {
    'process.env.NODE_ENV': process.env.NODE_ENV,
  },

  // Enable or disable CSS extraction in production
  css: {
    extract: true,
  },

  // Configure additional paths and aliases
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
    },
  },
});
