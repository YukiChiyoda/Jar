import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/s',
    name: 'search',
    component: () => import('../views/SearchPage.vue')
  },
  {
    path: '/v',
    name: 'view',
    component: () => import('../views/ViewPage.vue')
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../views/LinkPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../views/ErrorPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
