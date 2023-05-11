<template>
  <div id="app">
    <input v-model="filter" placeholder="Filtrar usuarios" />
     <ul>
      <li v-for="(user, index) in filteredUsers" :key="index" class="user">
        {{ fullName(user) }}
        <img :src="user.picture.thumbnail" :alt="fullName(user)" class="user-image"/>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      filter: ''
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        `${user.name.first} ${user.name.last}`.toLowerCase().includes(this.filter.toLowerCase())
      )
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=50')
        const data = await response.json()
        this.users = data.results
      } catch (error) {
        console.error(error)
      }
     
    },
    fullName(user) {
      return `${user.name.first} ${user.name.last}`
    },
  },
  watch: {
    filter() {
      console.log('El filtro ha cambiado a:', this.filter)
    }
  },
  created() {
    console.log('Componente creado')
    this.fetchUsers()
  },
  mounted() {
    console.log('Componente montado en el DOM')
  },
  updated() {
    console.log('Componente actualizado')
  },
  beforeDestroy() {
    console.log('Componente antes de ser destruido')
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