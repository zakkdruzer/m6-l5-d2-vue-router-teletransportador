<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { bebidas } from '../datos.js'

const router = useRouter()
const route = useRoute()

const bebidasFiltradas = computed(() => {
  const busqueda = route.query.buscar?.toLowerCase() || ''
  if (!busqueda) return bebidas
  
  return bebidas.filter(bebida => 
    bebida.nombre.toLowerCase().includes(busqueda) || 
    bebida.categoria.toLowerCase().includes(busqueda)
  )
})

const actualizarBusqueda = (event) => {
  const valor = event.target.value
  router.push({ 
    path: '/coleccion', 
    query: valor ? { buscar: valor } : {} 
  })
}

const verDetalle = (id) => {
  router.push('/item/' + id)
}

// PODER 5: El Dado de la Suerte
const sorprendeme = () => {
  // Elegimos un índice al azar de nuestro catálogo
  const indiceAzar = Math.floor(Math.random() * bebidas.length)
  const idAzar = bebidas[indiceAzar].id
  
  // Navegamos usando name y params (elegante)
  router.push({ name: 'item', params: { id: idAzar } })
}
</script>

<template>
  <div class="coleccion">
    <h2>Catálogo de Producción</h2>
    
    <div class="controles">
      <input 
        type="text" 
        placeholder="Buscar por nombre o categoría..." 
        :value="route.query.buscar"
        @input="actualizarBusqueda"
      >
      <!-- Botón Sorpréndeme agregado aquí -->
      <button class="btn-sorpresa" @click="sorprendeme">🎲 Sorpréndeme</button>
    </div>
    
    <div class="grid-lista">
      <div v-for="bebida in bebidasFiltradas" :key="bebida.id" class="tarjeta">
        <div class="emoji-grande">{{ bebida.emoji }}</div>
        <h3>{{ bebida.nombre }}</h3>
        <p>Categoría: {{ bebida.categoria }}</p>
        <button @click="verDetalle(bebida.id)">Ver ficha</button>
      </div>
    </div>
  </div>
</template>