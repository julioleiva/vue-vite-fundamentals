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
        <user-item
          v-for="(user, index) in filteredUsers"
          :key="index"
          :user="user"
          @user-clicked="onUserClicked"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import UserItem from './UserItem.vue'
  
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
  
  const filteredUsers = computed(() => {
    return users.value.filter((user) =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(filter.value.toLowerCase())
    )
  })
  
  watch(filter, () => {
    console.log('El filtro ha cambiado a:', filter.value)
  })
  
  onMounted(() => {
    console.log('Componente montado en el DOM')
    fetchUsers()
  })
  
  const onUserClicked = (user) => {
    console.log('Usuario seleccionado:', user)
  }
  </script>
  
  <style scoped>
  ul {
    padding: 0;
  }
  </style>
  