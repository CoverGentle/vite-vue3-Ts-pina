import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes:Array<RouteRecordRaw>=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'LoginPage',
    meta: {
        title: '登录',
        // keepAlive: true,
    },
    component: () => import('../views/dome/login.vue')
  },
  {
    path: '/home',
    name: 'homePage',
    meta: {
        title: '首页',
        // keepAlive: true,
    },
    component: () => import('../views/dome/home.vue')
  },
  {
    path: '/to',
    name: 'toPage',
    meta: {
        title: 'to系列全家桶',
        // keepAlive: true,
    },
    component: () => import('../views/dome/to.vue')
  },
  {
    path: '/dome',
    name: 'domePage',
    meta: {
        title: 'dome',
        // keepAlive: true,
    },
    component: () => import('../views/dome/dome.vue')
  },
  {
    path: '/test',
    name: 'testPage',
    meta: {
        title: 'test',
        // keepAlive: true,
    },
    component: () => import('../views/dome/test.vue')
  },
  {
    path: '/father',
    name: 'fatherPage',
    meta: {
        title: '父子组件',
        // keepAlive: true,
    },
    component: () => import('../views/dome/father.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router