# 🚀 El Teletransportador: Catálogo de Producción (SPA)

Una Single Page Application (SPA) construida con **Vue 3**, **Vite** y **Vue Router**. Este proyecto fue desarrollado como parte de la misión "El Teletransportador", con el objetivo de gestionar un catálogo de producción mediante navegación dinámica sin recargar la página.

## 🌟 Características y Funcionalidades

El proyecto fue construido superando distintos niveles de complejidad:

* **Nivel 1: Enrutamiento Dinámico**
  * Configuración de Vue Router con historial en modo Hash (`createWebHashHistory`) para compatibilidad con despliegues estáticos.
  * Rutas principales configuradas: Catálogo (`/coleccion`) y Fichas de Detalles (`/item/:id`).
  * Lectura de parámetros de URL para cargar datos específicos de cada lote (Brix, tamaño de lote, categoría).

* **Nivel 2: Navegación Programática y Filtros**
  * Implementación de navegación mediante código (`router.push`) y control de historial (`router.back()`).
  * Búsqueda y filtrado de elementos basados en la URL mediante `route.query`.

* **Nivel 3: Reactividad y Control de Errores (Derrotando al Bug del Clon)**
  * Uso de `watch()` sobre `route.params.id` para garantizar que la vista se actualice correctamente al navegar entre elementos hermanos sin desmontar el componente.
  * Botón "Sorpréndeme" para carga aleatoria de elementos.

* **Nivel Profesional: Experiencia de Usuario (UX)**
  * **Estados vacíos (Empty States):** Interfaz amigable (Error 404 personalizado) cuando se ingresa manualmente un ID que no existe en los registros.
  * **Límites de navegación:** Deshabilitación dinámica de botones "Anterior/Siguiente" al llegar a los bordes de la colección.
  * **Accesibilidad:** Manejo correcto del foco visible durante la navegación.

## 🛠️ Tecnologías Utilizadas

* [Vue.js 3](https://vuejs.org/) (Composition API & `<script setup>`)
* [Vue Router 4](https://router.vuejs.org/)
* [Vite](https://vitejs.dev/)
* Despliegue en **GitHub Pages** (vía `gh-pages`)

## 💻 Instalación y Uso Local

Si deseas clonar y correr este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd nombre-del-repo
   ```

3. **Instalar las dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abre tu navegador en la ruta que indique la terminal (usualmente `http://localhost:5173`).

## 🚀 Despliegue

Este proyecto está configurado para ser desplegado automáticamente en GitHub Pages usando el paquete `gh-pages`.

Para publicar una nueva versión:
```bash
npm run deploy
```
*(Nota: Asegúrate de tener habilitadas las rutas largas en tu configuración global de Git en Windows mediante `git config --global core.longpaths true` si experimentas errores de longitud de ruta durante el build).*

## Puedes ver el resultado en:

https://zakkdruzer.github.io/m6-l5-d2-vue-router-teletransportador
