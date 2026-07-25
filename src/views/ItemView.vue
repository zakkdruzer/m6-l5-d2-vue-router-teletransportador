<script setup>
// Importamos ref y watch desde vue
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bebidas } from '../datos.js'

const route = useRoute()
const router = useRouter() 

// Ahora usamos ref para que la vista reaccione a los cambios
const idActual = ref(Number(route.params.id))
const bebidaSeleccionada = ref(bebidas.find(item => item.id === idActual.value))

const volver = () => {
  router.back()
}

// Extraemos el primer y último ID de nuestros datos
const primerId = bebidas[0].id
const ultimoId = bebidas[bebidas.length - 1].id

// Navegación a vecinos con validación de bordes
const irAnterior = () => {
  if (idActual.value > primerId) {
    router.push({ name: 'item', params: { id: idActual.value - 1 } })
  }
}

const irSiguiente = () => {
  if (idActual.value < ultimoId) {
    router.push({ name: 'item', params: { id: idActual.value + 1 } })
  }
}

// JEFE FINAL: El Bug del Clon
// Observamos el id en la URL. Si cambia, actualizamos los datos sin recargar el componente.
watch(
  () => route.params.id,
  (nuevoId) => {
    // Verificamos que nuevoId exista (para evitar errores si volvemos a la colección)
    if (nuevoId) {
      idActual.value = Number(nuevoId)
      bebidaSeleccionada.value = bebidas.find(item => item.id === idActual.value)
    }
  }
)
</script>

<template>
  <div class="ficha-item" v-if="bebidaSeleccionada">
    <div class="controles-superiores">
      <button class="btn-volver" @click="volver">- Volver (Atrás)</button>
      <button class="btn-inicio" @click="router.push('/coleccion')">🏠 Catálogo</button>
    </div>
    
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

    <!-- Controles con deshabilitado dinámico (Bonus) -->
    <div class="controles-vecinos">
      <button @click="irAnterior" :disabled="bebidaSeleccionada.id === primerId">⬅️ Anterior</button>
      <button @click="irSiguiente" :disabled="bebidaSeleccionada.id === ultimoId">Siguiente ➡️</button>
    </div>
  </div>
  
  <!-- MENSAJE HUMANO: ID inexistente -->
  <div v-else class="error-mensaje estado-vacio">
    <span class="emoji-gigante">🚧</span>
    <h2>Receta no encontrada</h2>
    <p>Ups, el ID <strong>{{ idActual }}</strong> no existe en los registros de producción. ¿Quizás fue un lote de prueba que descartamos?</p>
    <button class="btn-inicio" @click="router.push('/coleccion')">Volver al Catálogo</button>
  </div>
</template>