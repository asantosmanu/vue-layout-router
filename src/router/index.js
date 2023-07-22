import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DicaView1 from '../views/DicaView1.vue'
import DicaView2 from '../views/DicaView2.vue'
import DicaView3 from '../views/DicaView3.vue'
import DicaView4 from '../views/DicaView4.vue'
import DicaView5 from '../views/DicaView5.vue'
import DicaView6 from '../views/DicaView6.vue'
import DicaView7 from '../views/DicaView7.vue'
import DicaView8 from '../views/DicaView8.vue'
import DicaView9 from '../views/DicaView9.vue'
import DicaView10 from '../views/DicaView10.vue'
import DicaView11 from '../views/DicaView11.vue'
import DicaView12 from '../views/DicaView12.vue'
import DicaView13 from '../views/DicaView13.vue'
import DicaView14 from '../views/DicaView14.vue'
import DicaView15 from '../views/DicaView15.vue'


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
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },
    {
      path: '/dica4',
      name: 'dica4',
      component: DicaView4
    },
      {
      path: '/dica5',
      name: 'dica5',
      component: DicaView5
    },
    {
      path: '/dica',
      name: 'dica3',
      component: DicaView3
    },   
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },   
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },   
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },  
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },  
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },  
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },   
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },   
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },  
    {
      path: '/dica3',
      name: 'dica3',
      component: DicaView3
    },
    
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
