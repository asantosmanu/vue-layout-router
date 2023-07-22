import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DicaView1 from '../views/DicaView1.vue'
import DicaView2 from '../views/DicaView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dica1',
      name: 'dica1',
      component: DicaView1
    },
    {
      path: '/dica2',
      name: 'dica2',
      component: DicaView2
    },
    
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
