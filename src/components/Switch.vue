<template>
    <div class="switch-container">
      <div class="switch" :style="switchStyle" @click="toggle">
        <div class="switch-button" :style="buttonStyle" :class="{ 'switch-button-on': value }"></div>
      </div>
      <label class="switch-label">{{ label }}</label>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    modelValue: Boolean,
    label: String,
    size: {
      type: String,
      validator: (value) => ['large', 'medium', 'small'].includes(value),
      default: 'medium',
    },
    color: {
      type: String,
      validator: (value) => ['primary', 'secondary'].includes(value),
      default: 'primary',
    },
  })
  
  const emit = defineEmits(['update:modelValue'])
  
  const value = ref(props.modelValue)
  const toggle = () => {
    value.value = !value.value
    emit('update:modelValue', value.value)
  }
  
  const switchStyle = computed(() => {
    let size
    switch (props.size) {
      case 'large': size = 70; break
      case 'small': size = 30; break
      default: size = 50
    }
    return { width: size + 'px', height: size/2 + 'px', borderRadius: size/2 + 'px' }
  })
  
  const buttonStyle = computed(() => {
    const color = props.color === 'primary' ? 'blue' : 'green'
    let size
    switch (props.size) {
      case 'large': size = 32; break
      case 'small': size = 14; break
      default: size = 22
    }
    return { width: size + 'px', height: size + 'px', background: value.value ? color : 'white' }
  })
  </script>
  
  <style scoped>
  .switch-container {
    display: flex;
    align-items: center;
  }
  
  .switch {
    background: grey;
    padding: 2px;
    cursor: pointer;
    user-select: none;
    position: relative;
  }
  
  .switch-button {
    border-radius: 50%;
    position: absolute;
    transition: all 0.3s ease;
  }
  
  .switch-button-on {
    transform: translateX(100%);
  }
  
  .switch-label {
    margin-left: 10px;
  }
  </style>
  