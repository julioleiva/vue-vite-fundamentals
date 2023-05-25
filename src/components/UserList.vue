<!-- UserList.vue -->
<template>
    <div>
      <button @click="fetchData">
        Fetch Users
      </button>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else-if="error">
        {{ error }}
      </div>
      <div v-else>
        <div v-for="user in users" :key="user.login.uuid" class="user">
          {{ user.name.first }} {{ user.name.last }} 
          <div>✉️ {{ user.email }}</div>
          <img :src="user.picture.thumbnail" class="thumbnail" />
        </div>
      
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import useFetch from '../composables/useFetch'
  
  const { data, error, loading, fetchData } = useFetch('https://randomuser.me/api/?results=10')
  
  // This computed property will return the users if data.value exists and has a results property, otherwise it will return an empty array
  const users = computed(() => (data.value && data.value.results) ? data.value.results : [])
  </script>

  <style scoped>
.thumbnail{
    width: 10%;
    height: 10%;
    border-radius: 2rem;
    line-height:10px;
}

.user{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 2rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
  