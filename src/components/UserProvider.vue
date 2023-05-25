<!-- UserProvider.vue -->
<template>
    <div>
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, provide, onMounted } from 'vue'
  
  const user = ref(null)
  
  onMounted(async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    if (data && data.results) {
      user.value = data.results[0]
    }
  })
  
  provide('user', user)
  </script>
  