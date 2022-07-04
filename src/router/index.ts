import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes:Array<RouteRecordRaw>=[
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
        title: '登录',
        // keepAlive: true,
    },
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/',
    name: 'homePage',
    meta: {
        title: '首页',
        // keepAlive: true,
    },
    component: () => import('../views/home/home.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router