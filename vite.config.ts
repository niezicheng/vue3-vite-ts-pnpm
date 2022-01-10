import { UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default (): UserConfigExport => {

  return {
    plugins: [
      vue()
    ],

    resolve: {
      // 配置 src 目录映射
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },

    base: './', // 打包路径

    server: {
    port: 3000, // 端口
    open: true, // 启动打开浏览器
    cors: true, // 跨域
    proxy: {
      "/api": {
        target: "http://localhost:8080/api/", // 目标地址
        changeOrigin: true, // 修改源
        secure: false, // ssl
        rewrite: path => path.replace("/api/", "/")
      }
    }
  }
  };
};