import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Login',
    meta: { layout: 'emptyLayout' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/cashAcc',
    name: 'Cash acc',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/CashAcc.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/record',
    name: 'New Edit',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'mainLayout' },
    component: () => import('../views/History.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
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
