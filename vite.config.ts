import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    open:true,
    port: 1228, //启动端口
    hmr: {
      host: 'localhost',
      port: 1228
    },
    // 设置代理
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:3333/',  //需要呗代理的后端地址
    //     changeOrigin:true
    //   }
    // }
  }
})
