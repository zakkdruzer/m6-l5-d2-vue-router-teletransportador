<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { bebidas } from '../datos.js'

// Inicializamos router y route (esta es la línea que faltaba y causaba el error)
const router = useRouter()
const route = useRoute()

// PODER 3: El Radar (lista filtrada desde la URL)
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

// PODER 1: Teletransporte
const verDetalle = (id) => {
  router.push('/item/' + id)
}

// PODER 5: El Dado de la Suerte
const sorprendeme = () => {
  const indiceAzar = Math.floor(Math.random() * bebidas.length)
  const idAzar = bebidas[indiceAzar].id
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
      <button class="btn-sorpresa" @click="sorprendeme">🎲 Sorpréndeme</button>
    </div>
    
    <!-- ESTADO VACÍO: Cuando no hay resultados -->
    <div v-if="bebidasFiltradas.length === 0" class="estado-vacio">
      <h3>No encontramos nada 🕵️‍♂️</h3>
      <p>No hay ninguna bebida que coincida con tu búsqueda.</p>
      <button @click="router.push('/coleccion')">Limpiar búsqueda</button>
    </div>

    <!-- LISTA NORMAL -->
    <div v-else class="grid-lista">
      <div v-for="bebida in bebidasFiltradas" :key="bebida.id" class="tarjeta">
        <div class="emoji-grande">{{ bebida.emoji }}</div>
        <h3>{{ bebida.nombre }}</h3>
        <p>Categoría: {{ bebida.categoria }}</p>
        <button @click="verDetalle(bebida.id)">Ver ficha</button>
      </div>
    </div>
  </div>
</template>