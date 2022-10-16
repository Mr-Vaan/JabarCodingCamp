import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import(/* webpackChunkName: "Blogs" */ '../views/Blogs.vue')
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blogs" */ '../views/Blog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


