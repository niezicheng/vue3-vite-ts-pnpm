import { UserConfigExport } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { loadEnv } from 'vite';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default ({ command, mode }): UserConfigExport => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue(),
      viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve'
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
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
        // 依据环境获取 .env.development 或 .env.production 文件中的配置
        [env.VITE_GLOB_API_URL]: {
          // '/api'
          target: env.VITE_PROXY, // 在 .env.development 中配置
          changeOrigin: true, // 修改源
          // ws: true, // if you want to proxy websockets
          rewrite: path =>
            path.replace(new RegExp(`^${env.VITE_GLOB_API_URL}`), '')
        }
      }
    }
  };
};
