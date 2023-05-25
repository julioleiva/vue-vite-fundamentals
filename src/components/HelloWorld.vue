<script>
export default { name: "hello-world" };
</script>
<script setup>

defineProps({
  msg: String,
})

</script>

<template>
  <h1>{{ msg }}</h1>

  <ul>
    <li>Diferentes APIS: Options vs Composition</li>
    <li>Renderizado de listas</li>
    <li>Renderizado condicional</li>
    <li>Nuevos elementos de reactividad</li>
    <li>Props y Enventos para comunicar componentes</li>
  </ul>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
