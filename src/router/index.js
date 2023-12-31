import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/app'


const routes = [
  {
    path: '/',
    name: 'Login',
    meta: { layout: 'emptyLayout' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'emptyLayout' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    meta: { layout: 'mainLayout', auth:true },
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/yourCharts',
    name: 'Your Charts',
    meta: { layout: 'mainLayout', auth: true },
    component: () => import('../views/yourCharts.vue')
  },
  {
    path: '/planning',
    name: 'Planning',
    meta: { layout: 'mainLayout', auth: true },
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/record',
    name: 'New Edit',
    meta: { layout: 'mainLayout', auth: true },
    component: () => import('../views/Record.vue')
  },
  {
    path: '/history',
    name: 'History',
    meta: { layout: 'mainLayout', auth: true },
    component: () => import('../views/History.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: { layout: 'mainLayout', auth: true },
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)
    if (requireAuth && !currentUser){
      next('/')
    } else if (to.path == '/login' && currentUser) {
      next('/')
    }else{
      next()
    }
});
export default router
