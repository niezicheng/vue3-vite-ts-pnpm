import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { setupStore } from '@/store';

const app = createApp(App);

// 挂载路由
app.use(router);

// 注入 store
setupStore(app);

app.mount('#app')
