import Vue from 'vue'
import VueRouter from 'vue-router'
import fOC from '@/grupe/friendsOfCode/routerSettings.js'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/date',
    component: () => import('@/views/DatePage.vue'),
  },
  fOC.routerDefaultConfig,
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
