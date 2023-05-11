<!-- 
Las template ref se utilizan para hacer referencia a elementos del DOM
 o a componentes dentro de una plantilla (template).  -->
<template>
    <div>
      <input ref="inputRef" type="text" />
      <button @click="focusInput">Enfocar entrada</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const inputRef = ref(null);
  
  function focusInput() {
    inputRef.value.focus();
  }
  </script>
  