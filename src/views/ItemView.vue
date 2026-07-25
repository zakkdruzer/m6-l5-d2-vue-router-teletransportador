<script setup>
import { useRoute, useRouter } from 'vue-router'
import { bebidas } from '../datos.js'

const route = useRoute()
const router = useRouter() // Agregamos useRouter para poder navegar

const idRuta = Number(route.params.id)
const bebidaSeleccionada = bebidas.find(item => item.id === idRuta)

// PODER 4: El Regreso usando el historial[cite: 1]
const volver = () => {
  router.back()
}
</script>

<template>
  <div class="ficha-item" v-if="bebidaSeleccionada">
    <!-- Botón de regreso agregado aquí -->
    <button class="btn-volver" @click="volver">- Volver</button>
    
    <div class="encabezado-ficha">
      <span class="emoji-gigante">{{ bebidaSeleccionada.emoji }}</span>
      <h2>{{ bebidaSeleccionada.nombre }}</h2>
    </div>
    
    <div class="detalles">
      <p><strong>ID de Sistema:</strong> {{ bebidaSeleccionada.id }}</p>
      <p><strong>Categoría:</strong> {{ bebidaSeleccionada.categoria }}</p>
      <p><strong>Tamaño de Lote:</strong> {{ bebidaSeleccionada.lote }} L</p>
      <p><strong>Brix Inicial:</strong> {{ bebidaSeleccionada.brix }}</p>
    </div>
  </div>
  
  <div v-else class="error-mensaje">
    <h2>Elemento no encontrado</h2>
    <p>El ID ingresado no corresponde a ninguna receta activa.</p>
    <button class="btn-volver" @click="volver">- Volver</button>
  </div>
</template>