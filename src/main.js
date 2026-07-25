import { createApp } from 'vue'
import './style.css' // Aquí importas tus estilos generales
import App from './App.vue'
import router from './router' // 1. Importamos el router desde la carpeta router

const app = createApp(App)

app.use(router) // 2. Le decimos a Vue que use el router

app.mount('#app')