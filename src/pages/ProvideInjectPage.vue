<!-- App.vue -->
<template>
    <UserProvider>
      <UserProfile />
    </UserProvider>
  </template>
  
  <script setup>
  import UserProvider from '../components/UserProvider.vue'
  import UserProfile from '../components/UserProfile.vue'
  </script>