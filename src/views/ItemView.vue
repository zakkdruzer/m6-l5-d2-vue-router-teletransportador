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

// Navegación a vecinos
const irAnterior = () => {
  router.push({ name: 'item', params: { id: idActual.value - 1 } })
}

const irSiguiente = () => {
  router.push({ name: 'item', params: { id: idActual.value + 1 } })
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
    <button class="btn-volver" @click="volver">- Volver</button>
    <!-- Nuevo botón opcional para ir directo al inicio -->
    <button class="btn-inicio" @click="router.push('/coleccion')">🏠 Catálogo Completo</button>

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

    <!-- Controles de navegación del Jefe Final -->
    <div class="controles-vecinos">
      <button @click="irAnterior">⬅️ Anterior</button>
      <button @click="irSiguiente">Siguiente ➡️</button>
    </div>
  </div>
  
  <div v-else class="error-mensaje">
    <h2>Elemento no encontrado</h2>
    <p>El ID ingresado no corresponde a ninguna receta activa.</p>
    <button class="btn-volver" @click="volver">- Volver</button>
  </div>
</template>