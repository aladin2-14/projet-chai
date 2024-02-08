import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "../views/PageHome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:"/",
      name:"pagehome",
      component:PageHome
    }
  ]
})

export default router
