import { createRouter, createWebHistory } from 'vue-router'
import ColeccionView from '../views/ColeccionView.vue'
import ItemView from '../views/ItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/coleccion'
    },
    {
      path: '/coleccion',
      name: 'coleccion',
      component: ColeccionView
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView
    }
  ]
})

export default router