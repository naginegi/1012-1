import { createRouter, createWebHistory } from 'vue-router'
// import mainview from '../views/main.vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: '/',
      component: HomeView
    },
    {
      path: '/nine',
      name: 'nine',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/nine.vue')
    }
  ]
})

export default router
