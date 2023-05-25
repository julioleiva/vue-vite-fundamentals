import { createRouter, createWebHistory } from 'vue-router'

// Define route components.
import Helloworld from './components/HelloWorld.vue';
import Switch from './components/Switch.vue'
import ComposablePage from './pages/ComposablePage.vue';

// Definir algunas rutas
// Cada ruta debe asignarse a un componente.
const routes = [

   // 1 Las forma habitual de crear rutas. Se cargan todos los componentes al inicio.
  { path: '/', component: Helloworld },
  
  // 2 Se pueden pasar props a los componentes, para que se carguen dinamicamente.
  { path: '/switch', component: Switch, props: { color: 'primary', size: 'small', label:'activar' } },
  { path: '/composablePage', component: ComposablePage, },


  // 3 También puede agregar rutas dinamicamente para favorecer el code-splitting.
  // Cuando se visita la ruta, el código para el componente se descarga solamente cuando se necesita.
  { path: '/switchPage', component: () => import('./pages/SwitchPage.vue') },
  { path: '/cardPage', component: () => import('./pages/CardPage.vue') },
  { path: '/providerPage', component: () => import('./pages/ProvideInjectPage.vue') },
]



// Crear la instancia del enrutador y pasar la opción `routes
// Puedes pasar opciones adicionales aquí, pero vamos a
// mantengámoslo simple por ahora.
export const router = createRouter({
  // Proporciona la implementación del historial a utilizar. Aquí estamos utilizando la historia hash para simplifica.
  history: createWebHistory(),
  routes, // abreviatura de `routes: routes`.
})
