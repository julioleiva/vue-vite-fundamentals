<template>
  <div id="app">
    <input v-model="filter" placeholder="Filtrar usuarios" />
    <ul>
      <li v-for="(user, index) in filteredUsers" :key="index" class="user">
        {{ fullName(user) }}
        <img :src="user.picture.thumbnail" :alt="fullName(user)" class="user-image" />
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'

export default {
  setup() {
    const users = ref([])
    const filter = ref('')

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50')
        const data = await response.json()
        users.value = data.results
      } catch (error) {
        console.error(error)
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

    return { users, filter, fetchUsers, fullName, filteredUsers }
  }
}
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
