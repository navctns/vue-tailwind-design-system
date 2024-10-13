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
            <slot name="right">
                <div class="flex align-center align-items-center">
                    <div class="text-primary text-md font-bold">Login</div>
                    <app-btn class="p-2 rounded-md ml-3">Become a member</app-btn>
                </div>
            </slot>
          </div>
      </div>
    </nav>
  </template>
  
  <script>
  import AppBtn from '../../components/buttons/app-btn/AppBtn.vue'
  export default {
    components:{AppBtn}
  }
  </script>
  
  <style>
  
  </style>