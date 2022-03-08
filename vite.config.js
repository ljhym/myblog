import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {
  AntDesignVueResolver,
} from 'unplugin-vue-components/resolvers'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Components({
    resolvers: [
      AntDesignVueResolver(),
    ]
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "mock": path.resolve(__dirname, "src/mock"),
      "views": path.resolve(__dirname, "src/views"),
      "utils": path.resolve(__dirname, "src/utils"),
      "api": path.resolve(__dirname, "src/api"),
    },
  },

  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://api.cpengx.cn/metashop',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  }

})
