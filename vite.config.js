import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ipconfig from './ipconfig.json'
console.log(ipconfig, 11);
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.bibikong.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1/auth')
      },
      '/payment': {
        target: 'http://www.bibikong.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/payment/, '/api/v1/pay/alipay')
      }
    }
  }
})
