<template>
    <div class="card">
      <slot name="header">
        <h3>Default Card Header</h3>
      </slot>
  
      <slot>
        Default card content.
      </slot>
  
      <slot name="footer">
        <button>Default Button</button>
      </slot>
    </div>
  </template>
  
  <script setup>
  // No hay necesidad de ningún JavaScript para este componente, ya que es sólo una cáscara para el contenido.
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
  }
  </style>
  