!<template>
  <div class="flex justify-between items-center border p-3" :class="[borderClass]">
    <div>
        <span></span>
        <span> Williamsburg carles vegan helvetica.</span>
    </div>
    <div>
        <!-- <img src="../../assets/alert//close-circle.svg" alt=""> -->
        <close-circle :color="color"/>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CloseCircle from './CloseCircle.vue';
    const borderClassesData = {
      primary:'border-primary',
      secondary:'border-secondary',
      third:'border-third'
    }
    // Props
    const props = defineProps({
        title:{type:String, default:'button'},
        color:{type:String, default:'primary'}
    });

    const borderClass = computed(() => borderClassesData[props.color]);

</script>

<style>

</style>