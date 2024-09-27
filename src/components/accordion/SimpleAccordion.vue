!<template>
    <div class="px-3 py-4 border-b" :class="{'border-s-blue-400 border-l-4 bg-slate-100': open}">
        <div class="flex justify-between items-center">
            <div class="font-bold">List Group Item Heading</div>
            <span v-if="open" class="cursor-pointer"><img src="../../assets/accordion/arrow-bottom.svg" @click="toggleAction" alt=""></span>
            <span v-else class="cursor-pointer"><img src="../../assets/accordion/arrow-right.svg" @click="toggleAction" alt=""></span>
        </div>
        <p class="py-2" v-if="open">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum quas asperiores non. Alias aspernatur debitis soluta qui praesentium porro!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit eum libero quaerat maiores et, sint temporibus unde possimus fuga!
        </p>
    </div>
</template>

<script>
export default {
  props:{
    // open:{type: Boolean, default: false}
  },
  data(){
    return{
      open: false
    }
  },
  methods:{
    toggleAction(){
      this.open = !this.open;
    }
  }
}
</script>

<style>

</style>