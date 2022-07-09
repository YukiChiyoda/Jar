import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import NProgress from 'nprogress';
// import 'element-plus/dist/index.css';
import './styles/public/element.scss';
import 'nprogress/nprogress.css'
import './styles/public/nprogress.scss';

createApp(App).use(router).use(ElementPlus).mount('#app');

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