## Qué es Vite y cuáles son sus características más importantes para el desarrollo

Vite es un entorno de desarrollo y un constructor de aplicaciones web modernas creado por Evan You, el creador de Vue.js. Vite ofrece un inicio rápido, actualizaciones rápidas del navegador y optimizaciones de producción eficientes. Algunas características importantes de Vite son:

**Desarrollo rápido**: Vite ofrece un tiempo de inicio rápido al usar el navegador nativo de ESM (Módulos ECMAScript) para un desarrollo más rápido y eficiente. Solo compila y carga los módulos necesarios durante el desarrollo.

**Hot Module Replacement (HMR)**: Vite proporciona una HMR extremadamente rápida que actualiza instantáneamente los módulos en el navegador sin necesidad de actualizar toda la página.

**Optimizaciones de producción**: Vite utiliza Rollup para la construcción de producción, lo que permite optimizaciones eficientes y la eliminación de código muerto.

**Soporte para múltiples frameworks**: Vite es compatible con múltiples frameworks, como Vue, React y Svelte, y también puede utilizarse en proyectos sin frameworks.

**Plugin system**: Vite cuenta con un sistema de plugins que permite agregar funcionalidades adicionales y mejorar el proceso de desarrollo y construcción.

## Diferencia entre Options API y Composition API, con y sin script setup
La Options API es la API clásica de Vue para organizar y reutilizar la lógica en los componentes de Vue. Con Options API, agrupamos la lógica en función de las opciones del componente, como data, methods, computed y watch.

La Composition API es una nueva API en Vue 3 que permite una organización más flexible y reutilizable de la lógica en los componentes de Vue. En lugar de agrupar la lógica en función de las opciones del componente, la Composition API nos permite agrupar la lógica en función de su funcionalidad y extraerla fácilmente en funciones reutilizables llamadas "composables".

El script setup es una característica experimental en Vue 3 que simplifica aún más el uso de la Composition API en los componentes. Con el script setup, no es necesario definir la función setup en un componente y podemos escribir directamente el código de la Composition API en el bloque script setup.

## Elementos reactivos:
La reactividad es una característica fundamental de Vue que permite la actualización automática de la vista cuando cambian los datos subyacentes. Vue 3 proporciona varias funciones para trabajar con elementos reactivos:

**ref**: Crea una referencia reactiva a un valor. Es útil para hacer que los valores primitivos sean reactivos

**reactive**: Convierte un objeto en un objeto reactivo. Es útil para hacer que los objetos completos sean reactivos

**computed**: Crea una propiedad computada que se actualiza automáticamente cuando cambian sus dependencias

**watch**: Observa una fuente de datos reactiva y ejecuta una función de devolución de llamada cuando cambia


## Etiqueta style scoped en Vue
La etiqueta **style scoped** en Vue permite encapsular estilos dentro de un componente específico, evitando que los estilos afecten a otros componentes en la aplicación. Vue logra esto añadiendo un atributo de alcance único a los elementos del componente y ajustando las reglas de estilo para que coincidan con dicho atributo.

## Explicación del renderizado de listas y renderizado condicional en Vue
El renderizado de listas es la técnica utilizada para renderizar una lista de elementos en la pantalla basándose en una matriz de datos. En Vue, esto se logra utilizando la directiva v-for.

El renderizado condicional es la técnica utilizada para mostrar u ocultar elementos del DOM según ciertas condiciones. En Vue, esto se logra utilizando directivas como v-if, v-else-if y v-else.


## Diferencia entre los sistemas de reactividad 
Vue 2 y Vue 3 tienen diferentes sistemas de reactividad subyacentes, aunque su API externa sigue siendo en gran medida compatible. La principal diferencia entre ambos sistemas radica en cómo rastrean y responden a los cambios en los datos reactivos.

Vue 2 utiliza un sistema de reactividad basado en Object.defineProperty. Vue 3 introduce un nuevo sistema de reactividad basado en Proxy. La principal diferencia entre ambos sistemas radica en cómo rastrean y responden a los cambios en los datos reactivos.

Las limitaciones del sistema de reactividad de Vue 2 incluyen la incapacidad para detectar la adición o eliminación de propiedades en objetos reactivos, cambios en matrices mediante la indexación directa, y la reactividad para objetos Map, Set y otros tipos de datos avanzados.

Por otro lado, el sistema de reactividad de Vue 3 supera estas limitaciones y mejora la eficiencia del sistema de reactividad.

### Sistema de reactividad en Vue 2:
Vue 2 utiliza un sistema de reactividad basado en Object.defineProperty. Cuando se crea un componente y se define su propiedad data, Vue 2 recorre todas las propiedades del objeto y las convierte en "getter" y "setter" utilizando Object.defineProperty. Esto permite a Vue 2 rastrear las dependencias y actualizar la vista cuando cambian los datos.

#### Limitaciones del sistema de reactividad de Vue 2:

1. No es capaz de detectar la adición o eliminación de propiedades en objetos reactivos.
2. No es capaz de detectar cambios en matrices mediante la indexación directa (por ejemplo, arr[0] = 'new item').
3. La reactividad no funciona para objetos Map, Set y otros tipos de datos avanzados.
4. El rendimiento y la eficiencia pueden verse afectados en componentes con gran cantidad de propiedades reactivas, ya que cada propiedad necesita un getter y un setter.

### Sistema de reactividad en Vue 3:
Vue 3 introduce un nuevo sistema de reactividad basado en Proxy. El objeto Proxy, disponible en JavaScript moderno, permite interceptar y personalizar las operaciones en objetos objetivo. Con el objeto Proxy, Vue 3 puede rastrear las dependencias y actualizar la vista cuando cambian los datos de manera más eficiente y sin las limitaciones del sistema de Vue 2.

#### Ventajas del sistema de reactividad de Vue 3:

1. Detecta la adición y eliminación de propiedades en objetos reactivos.
2. Detecta cambios en matrices mediante la indexación directa.
3. Admite la reactividad para objetos Map, Set y otros tipos de datos avanzados.
4. Mejora el rendimiento y la eficiencia en componentes con gran cantidad de propiedades reactivas, ya que no es necesario crear getters y setters para cada propiedad.
5. En resumen, la principal diferencia entre los sistemas de reactividad de Vue 2 y Vue 3 radica en su implementación interna. **Vue 2 utiliza Object.defineProperty**, que tiene ciertas limitaciones y problemas de rendimiento, mientras que **Vue 3 utiliza Proxy**, que supera estas limitaciones y mejora la eficiencia del sistema de reactividad. Aunque las diferencias en la implementación interna son significativas, la API externa sigue siendo en gran medida compatible entre las dos versiones, lo que facilita la transición de Vue 2 a Vue 3.





