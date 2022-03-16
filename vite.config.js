import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
    //   server: {
    //     cors: true,
    //     port: '3000',
    //     open: false, //自动打开 
    //     proxy: {
    //       '/api': {
    //           target: 'http://175.178.111.161:8888',
    //           changeOrigin: true,
    //           rewrite: (path) => path.replace(/^\/api/, '')
    //       }
    //     }
    // }

    
})

// module.exports = {
//   plugins: [vue()],
//   //hostname:'0.0.0.0',
  
//     proxy: {
//         '/api': {
//             target: 'http://175.178.111.161:8888',
//             changeOrigin: true,
//             rewrite: (path) => path.replace(/^\/api/, ''),
//             //pathRewrite:{'^/api':'http://175.178.111.161:8888/api/'}
//         },
//     },
// };
