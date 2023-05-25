<template>
    <Card>
      <template #header>
        <h3>My Custom Card Header</h3>
      </template>

  
      <!-- This is my custom card content. -->
  
      <template #footer>
        <div><button>My Custom Button</button></div>
      </template>
    </Card>
  </template>
  
  <script setup>
  import Card from '../components/Card.vue';
  </script>
  