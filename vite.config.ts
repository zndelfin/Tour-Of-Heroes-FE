import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   // string shorthand
    //   '/foo': 'http://localhost:5000',
    //   // with options
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   "/test": {
    //     target: "http://localhost:5000/test",
    //     secure: false,

    //   }
    // }
  }
})
