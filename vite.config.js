import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VuePhotos',
      filename: format => `vue-photos.${format}.js`,
    },

    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
        },
      },
    },
  },

  plugins: [vue(), dts()],
});
