!<template>
  <div class="px-3 py-4 border-b" :class="{'border-s-blue-400 border-l-4': selected}">
    <div class="flex justify-between items-center">
        <div class="font-bold">List Group Item Heading</div>
        <span class=" p-1 rounded px-2" :class="{'bg-gray-100': !selected,'bg-secondary text-white': selected}">3 days ago</span>
    </div>
    <p class="py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum quas asperiores non. Alias aspernatur debitis soluta qui praesentium porro!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit eum libero quaerat maiores et, sint temporibus unde possimus fuga!
    </p>
  </div>
</template>

<script>
export default {
  props:{
    selected:{type: Boolean, default: false}
  }

}
</script>

<style>

</style>