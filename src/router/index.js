import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import(/* webpackChunkName: "grid" */ '@/views/Grid.vue')
  },
  {
    path: '/botones',
    name: 'botones',
    component: () => import(/* webpackChunkName: "botones" */ '@/views/Botones.vue')
  },
  {
    path: '/tareas-crud',
    name: 'tareas-crud',
    component: () => import(/* webpackChunkName: "tareas-crud" */ '@/views/Tareas-crud.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
