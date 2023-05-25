<!-- UserProfile.vue -->
<template>
    <div v-if="user" class="profile">
      <img :src="user.picture.large" alt="User image" class="profile__image">
      <h2 class="profile__name">{{ user.name.first }} {{ user.name.last }}</h2>
      <p class="profile__email">{{ user.email }}</p>
      <p class="profile__location">{{ user.location.city }}, {{ user.location.country }}</p>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue'
  
  const user = inject('user')
  </script>
  
  <style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: auto;
  }
  
  .profile__image {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  
  .profile__name {
    margin: 15px 0;
    font-size: 20px;
    font-weight: bold;
  }
  
  .profile__email, .profile__location {
    color: grey;
    font-size: 14px;
  }
  </style>
  