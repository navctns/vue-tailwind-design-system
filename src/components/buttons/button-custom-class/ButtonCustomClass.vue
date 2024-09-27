!<template>
  <!-- After extracting a custom class -->
    <button class="btn-primary">
    Save changes
    </button>
</template>

<script>
export default {

}
</script>

<style>
@tailwind components;
@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
}
</style>