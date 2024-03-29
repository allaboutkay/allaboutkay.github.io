import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import ViteImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: { https: true ,
    host: '0.0.0.0'},
  plugins: [vue() ,mkcert() ,ViteImages()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
        @import "./src/sass/_variables.sass"
        `,
      },
    }
  },
  
})
