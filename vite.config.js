import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Relative base so the build works from a sub-path such as /my-website/.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
