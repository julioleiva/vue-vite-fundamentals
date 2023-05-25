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

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <ul>
    <li><router-link to="/switchPage">Componente switch con Props y Events</router-link></li>
    <li><router-link to="/cardPage">Componente card con Slots</router-link></li>
    <li><router-link to="/providerPage">Componente card con ProvideInject</router-link></li>
    <li><router-link to="/composablePage">Uso de composables</router-link></li>
    
  </ul>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
