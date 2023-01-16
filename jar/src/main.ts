import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import NProgress from 'nprogress';
// import 'element-plus/dist/index.css';
import './styles/public/element.scss';
import 'nprogress/nprogress.css'
import './styles/public/nprogress.scss';

const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

NProgress.configure({
    easing: 'ease',
    speed: 500,
    trickleSpeed: 200,
    minimum: 0.3,
    showSpinner: false
});

router.beforeEach((target, origin, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});