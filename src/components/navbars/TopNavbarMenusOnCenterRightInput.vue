!<template>
    <nav>
      <div class="flex align-center align-items-center justify-between py-3">
          <div class="font-bold text-lg">
            <slot name="left">Brand Name</slot>
          </div>
          <ul class="flex">
              <li class="mx-2 cursor-pointer">Home</li>
              <li class="mx-2 cursor-pointer">Product</li>
              <li class="mx-2 cursor-pointer">Pricing</li>
              <li class="mx-2 cursor-pointer">Contact</li>
          </ul>
          <div>
            <slot name="right"><input type="text" class="border"></slot>
          </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>