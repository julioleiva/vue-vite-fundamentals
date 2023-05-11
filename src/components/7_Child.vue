<template>
    <li class="user" @click="userClicked">
      {{ fullName(user) }}
      <img :src="user.picture.thumbnail" :alt="fullName(user)" class="user-image" />
    </li>
  </template>
  
  <script setup>
  
  const props = defineProps({
    user: Object
  })
  
  const emit = defineEmits(['user-clicked'])
  
  const fullName = (user) => {
    return `${user.name.first} ${user.name.last}`
  }
  
  const userClicked = () => {
    emit('user-clicked', props.user)
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
    cursor: pointer;
  }
  
  .user-image {
    border-radius: 50%;
    margin-right: 1rem;
  }
  </style>
  