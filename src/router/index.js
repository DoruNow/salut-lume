import Vue from 'vue'
import VueRouter from 'vue-router'
import fOC from '@/grupe/friendsOfCode/routerSettings.js'
Vue.use(VueRouter)

const routes = [
  fOC.routerCfg,
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
