<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { bebidas } from '../datos.js'

const router = useRouter()
const route = useRoute()

// PODER 3: La lista se deriva de la URL con un computed
const bebidasFiltradas = computed(() => {
  const busqueda = route.query.buscar?.toLowerCase() || ''
  if (!busqueda) return bebidas
  
  return bebidas.filter(bebida => 
    bebida.nombre.toLowerCase().includes(busqueda) || 
    bebida.categoria.toLowerCase().includes(busqueda)
  )
})

// Función para actualizar la URL cuando el usuario escribe
const actualizarBusqueda = (event) => {
  const valor = event.target.value
  router.push({ 
    path: '/coleccion', 
    query: valor ? { buscar: valor } : {} // Si está vacío, quitamos el query
  })
}

const verDetalle = (id) => {
  router.push('/item/' + id)
}
</script>

<template>
  <div class="coleccion">
    <h2>Catálogo de Producción</h2>
    
    <!-- Buscador conectado a la URL -->
    <div class="buscador">
      <input 
        type="text" 
        placeholder="Buscar por nombre o categoría..." 
        :value="route.query.buscar"
        @input="actualizarBusqueda"
      >
    </div>
    
    <div class="grid-lista">
      <!-- Ahora iteramos sobre bebidasFiltradas en lugar de bebidas -->
      <div v-for="bebida in bebidasFiltradas" :key="bebida.id" class="tarjeta">
        <div class="emoji-grande">{{ bebida.emoji }}</div>
        <h3>{{ bebida.nombre }}</h3>
        <p>Categoría: {{ bebida.categoria }}</p>
        <button @click="verDetalle(bebida.id)">Ver ficha</button>
      </div>
    </div>
  </div>
</template>