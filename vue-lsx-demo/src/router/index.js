import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrdersSummary.vue'),
      children: [
        {
          path: "active",
          name: "active",
          component: () => import('../views/HomeView.vue'),
  
        },
        {
          path: "completed",
          name: "completed",
          component: () => import('../components/CompletedOrders.vue'),
  
        }
      ]
    },
    {
      path: '/kiosk',
      name: 'kiosk',
      component: () => import('../components/Kiosk.vue')
    }
  ],
  linkActiveClass: "active",
})

export default router
