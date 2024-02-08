import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "../views/PageHome.vue"
import text from "../views/text.vue"
import picture from "../views/picture.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:"/",
      name:"pagehome",
      component:PageHome
    },
    {
      path:"/text",
      name:"pagetext",
      component:text
    },
    {
      path:"/picture",
      name:"pagepicture",
      component:picture
    }
  ]
})

export default router
