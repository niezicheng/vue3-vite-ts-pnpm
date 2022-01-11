import { createRouter , createWebHistory, RouteRecordRaw } from 'vue-router';
import { camelCase, forEach } from 'lodash-es';
import HelloWorld from '@/components/HelloWorld.vue';

const modules = import.meta.glob('../views/**/index.vue');
const pages = import.meta.glob('../views/*.vue');

/**
 * 动态添加路由配置
 * @param routers 文件模块对象
 * @param routes 路由对象数组
 * @param type 动态添加到路由页面类型
 */
const addRoutes = (routers: any, routes: Array<RouteRecordRaw>, type: string = 'pages') => {
  forEach(routers, item => {
    const routePath = item.name.slice(9, type === 'pages' ? -4 : -10);
    routes.push({
        path: `/${routePath}`,
        name: camelCase(routePath),
        // fix: The above dynamic import cannot be analyzed by vite.(warning)
        component: routers[item.name],
    })
  })
}

// 初始化首页
const routes: Array<RouteRecordRaw> =  [
	{
		path: '/',
		name: 'Index',
		component: HelloWorld,
	},
];

addRoutes(modules, routes, 'modules');
addRoutes(pages, routes);

// 404
routes.push({
  path: '/:pathMath(.*)*',
  component: () => import('@/views/404.vue'),
})

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由拦截器, 自定义拦截内容
router.beforeEach((to, from, next) => {
  next();
});

export default router;
