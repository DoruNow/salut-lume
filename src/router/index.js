import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/demopoc',
    component: () => import('@/views/Demo.vue'),
  },
  {
    path: '/demo',
    component: () => import('@/views/DemoPub.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
