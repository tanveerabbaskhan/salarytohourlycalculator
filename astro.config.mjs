// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Output configuration
  output: 'static',
  
  // Base URL
  site: 'https://salarytohourly.com',
  
  // Vite configuration
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  
  // Compress HTML
  compressHTML: true,
  
  // Trailing slash
  trailingSlash: 'always',
  
  // Build configuration
  build: {
    format: 'directory',
  },
});
