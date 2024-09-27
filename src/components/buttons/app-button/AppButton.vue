<template>
    <button
      :class="['btn', sizeClass, colorClass, { 'is-disabled': disabled }]"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import './app-button.css';
  // Define button sizes
  const sizeClasses = {
    small: 'btn-small',
    medium: 'btn-medium',
    large: 'btn-large',
  };
  
  // Define button colors (optional, for more flexibility)
  const colorClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    danger: 'btn-danger',
  };
  
  // Props
  const props = defineProps({
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'danger'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  });
  
  // Computed class names
  const sizeClass = computed(() => sizeClasses[props.size]);
  const colorClass = computed(() => colorClasses[props.color]);
  </script>
  
  <style scoped>
  /* Base button styles */
  /* .btn {
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  } */
  
  /* Size variations */
  /* .btn-small {
    font-size: 0.75rem;
    padding: 0.25em 0.5em;
  } */
  
  /* .btn-medium {
    font-size: 1rem;
    padding: 0.5em 1em;
  }
  
  .btn-large {
    font-size: 1.25rem;
    padding: 0.75em 1.5em;
  } */
  
  /* Color variations */
  .btn-primary {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: #fff;
  }
  
  .btn.is-disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
  }
  </style>
  