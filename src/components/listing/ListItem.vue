!<template>
  <li class="list-none">
    <div class="p-2 border-s-blue-700 border-l-4 shadow-md">{{ title }}</div>
  </li>
</template>

<script setup>

const props = defineProps({
    title:{type:String, default:"Raw denim you probably haven't heared of them"}
});
</script>

<style>

</style>