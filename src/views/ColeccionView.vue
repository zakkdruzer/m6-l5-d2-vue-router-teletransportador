<script setup>
import { useRouter } from 'vue-router'
import { bebidas } from '../datos.js'

// Inicializamos el router
const router = useRouter()

const verDetalle = (id) => {
  // PODER 1: Navegación programática con router.push
  router.push('/item/' + id)
}
</script>

<template>
  <div class="coleccion">
    <h2>Catálogo de Producción</h2>
    
    <div class="grid-lista">
      <div v-for="bebida in bebidas" :key="bebida.id" class="tarjeta">
        <div class="emoji-grande">{{ bebida.emoji }}</div>
        <h3>{{ bebida.nombre }}</h3>
        <p>Categoría: {{ bebida.categoria }}</p>
        
        <!-- Botón que ejecuta el teletransporte, cumpliendo la regla de no usar router-link -->
        <button @click="verDetalle(bebida.id)">Ver ficha</button>
      </div>
    </div>
  </div>
</template>