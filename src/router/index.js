import { createRouter, createWebHashHistory } from 'vue-router'
import ColeccionView from '../views/ColeccionView.vue'
import ItemView from '../views/ItemView.vue'

const router = createRouter({
  // Cambiamos el modo de historia a Hash
  history: createWebHashHistory(),
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