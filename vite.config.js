import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    //경로를 넣을 때 @를 넣으면 이것을 프로젝트 폴더의 src 폴더로 인식하겠다.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
