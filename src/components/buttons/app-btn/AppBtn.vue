!<template>
    <button :class="[sizeClass, borderRadiusClass, shadowsClass, hoverBgClasses, designClassComputed]" 
    class="font-semibold hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
       <slot name="left"><i :class="iconClass"></i></slot>
       <slot name="title">{{ title }}</slot>
       <slot name="right">
      <!-- <i class="icon-class"></i> -->
      <!--<font-awesome-icon :icon="fas.faHouse" />-->
      </slot>
    </button>
</template>

<script setup>
import themeVars from '../../theme-vars';
import { computed } from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//  import { fas } from '@awesome.me/kit-KIT_CODE/icons'
// import { fas, far, fal, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons'


  // Define button colors (optional, for more flexibility)
  // const bgColorClasses = themeVars.bgColorClasses;
  const borderRadiusClasses = themeVars.borderRadius;
  const shadowsClassData = themeVars.shadows;
  const hoverBgClassData = themeVars.hoverBgColorClasses;
  const sizeClasses = {
    xs:{ classList:'py-1 px-2 text-xs'},
    sm:{ classList:'py-1 px-4 text-sm'},
    md:{ classList:'py-2 px-5 text-base'},
    lg:{ classList:'py-3 px-6 text-lg'},
    xl:{ classList:'py-4 px-7 text-xl'}
  };
  //design classes
  const designClasses = {
    'design-a': { classList:'text-white bg-primary'},
    'design-b': { classList:'text-black hover:text-white'}
  };
    // Props
    const props = defineProps({
        title:{type:String, default:'button'},
        color:{type:String, default:'primary'},
        size:{type:String, default:'md'},
        borderRadius:{type:String, default:'md'},
        shadow:{type:String, default:'md'},
        iconClass:{type:String, default:'fa fa-plus'},
        design:{type:String, default:'design-a'}
    });

 // Computed class names
 const sizeClass = computed(() => sizeClasses[props.size].classList);
  // const bgColorClass = computed(() => bgColorClasses[props.color]);
  const borderRadiusClass = computed(() => borderRadiusClasses[props.borderRadius]);
  const shadowsClass = computed(() => shadowsClassData[props.shadow]);
  const hoverBgClasses = computed(() => hoverBgClassData[props.color]);
  const designClassComputed = computed(() => designClasses[props.design].classList);
</script>

<style>

</style>