import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

const search = () => import('../views/Search.vue')

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})