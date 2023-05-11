<template>
    <div id="app">
      <input v-model="filter" placeholder="Filtrar usuarios" />
      <div v-if="isLoading">
        Cargando usuarios...
      </div>
      <div v-else-if="error">
        Ha ocurrido un error al cargar los usuarios: {{ error }}
      </div>
      <ul v-else>
        <li v-for="(user, index) in filteredUsers" :key="index" class="user">
          {{ fullName(user) }}
          <img :src="user.picture.thumbnail" :alt="fullName(user)" class="user-image" />
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  
  const users = ref([])
  const filter = ref('')
  const isLoading = ref(false)
  const error = ref(null)
  
  const fetchUsers = async () => {
    isLoading.value = true
    try {
      const response = await fetch('https://randomuser.me/api/?results=50')
      const data = await response.json()
      users.value = data.results
    } catch (err) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }
  
  const fullName = (user) => {
    return `${user.name.first} ${user.name.last}`
  }
  
  const filteredUsers = computed(() => {
    return users.value.filter((user) =>
      fullName(user).toLowerCase().includes(filter.value.toLowerCase())
    )
  })
  
  watch(filter, () => {
    console.log('El filtro ha cambiado a:', filter.value)
  })
  
  onMounted(() => {
    console.log('Componente montado en el DOM')
    fetchUsers()
  })
  </script>
  
  <style scoped>
  .user {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .user-image {
    border-radius: 50%;
    margin-right: 1rem;
  }
  </style>
  