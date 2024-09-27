<template>
  <button class="rounded-sm" :class="defaultClasses">
    <slot name="title">{{ title }}</slot>
  </button>
</template>

<script>
import designConfig from './button-design-config';
export default {
    name:'base-btn',
    props:{
        title:{type: String, default:''},
        design:{type: String, default:'basic-a'},
        color:{type: String, default:'primary'},
        size:{type: String, default:'sm'}
    },
    data(){
      return{
        designConfig: designConfig
      }
    },
    computed:{
      defaultClasses(){
        const classNames = [];
        //set text color for the button
        classNames.push(designConfig[this.design].colorClass)
        if(designConfig[this.design].colored){
          //set background color of the button
          classNames.push('bg-' + this.color);
        }
        if(this.size){
          let xPadding = 'px-btn-' + this.size + '-x';
          let yPadding = 'py-btn-' + this.size;
          // console.log(xPadding, yPadding);
          classNames.push(xPadding);
          classNames.push(yPadding);
        }
        return classNames;
      }
    }
}
</script>

<style>

</style>