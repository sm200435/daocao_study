import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 导入element-plus的icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 引入router规则
import router from './router/index.js'
// 导入 路由守卫
import './router/permission.js'
// 注册全局组件
import SvgIcon from '@/components/SvgIcon/index.vue';
import 'virtual:svg-icons-register';

// 引入pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 使用持久化
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// 自注册全局组件
app.component('svg-icon', SvgIcon);

app.use(pinia)
app.use(router)

app.mount('#app')
