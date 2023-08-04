import { createRouter, createWebHistory } from 'vue-router'
/* import HomeView from '../views/HomeView.vue' */
import Blog from '@/views/Blog.vue'
/* import Accueil from '@/components/Acceuil.vue'
import Apropos from '@/components/Apropos.vue' */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blog
    },
 /*    {
      path:'/accueil',
      name:'/accueil',
      component:Accueil
    },
    {
      path:'/apropos',
      name:'/apropos',
      component:Apropos
    }
     */
    
  ]
})

export default router
