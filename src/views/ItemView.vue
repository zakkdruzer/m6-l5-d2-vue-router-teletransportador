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