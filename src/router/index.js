import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'emptyLayout' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'categories',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/cashAcc',
    name: 'cashAcc',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/CashAcc.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'emptyLayout' },
    component: () => import('../views/Register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
