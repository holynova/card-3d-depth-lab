import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_PAGES === 'true' ? '/card-3d-depth-lab/' : '/',
  build: {
    outDir: process.env.VITE_PAGES === 'true' ? 'docs' : 'dist',
    emptyOutDir: true,
  },
});
