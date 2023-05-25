<template>
    <Switch v-model="value" />
</template>
  
<script setup>
import { ref } from 'vue'
import Switch from '../components/Switch.vue';

const value = ref(false)
</script>
  