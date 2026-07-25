<script setup>
import { useRoute } from 'vue-router'
import { bebidas } from '../datos.js'

// Inicializamos la ruta actual
const route = useRoute()

// PODER 2: Leemos el parámetro de la URL y lo convertimos a número inmediatamente
const idRuta = Number(route.params.id)

// Buscamos el elemento exacto
const bebidaSeleccionada = bebidas.find(item => item.id === idRuta)
</script>

<template>
  <!-- Renderizado condicional básico por si el ID no existe -->
  <div class="ficha-item" v-if="bebidaSeleccionada">
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
  </div>
</template>