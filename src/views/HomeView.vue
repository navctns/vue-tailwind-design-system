<template>
  <div class="">
    <h5 class="text-lg">App Buton (AppBtn.vue)</h5>
    <app-btn size="xs" class="mr-1" title="button-xs">Button Class only xs</app-btn>
    <app-btn size="sm" class="mr-1" title="button-sm">Button Class only sm</app-btn>
    <app-btn size="md" color="primary" title="button-md">Button Class only md</app-btn>
    <app-btn size="lg" title="button-lg">Button Class only lg</app-btn>
    <app-btn size="xl" title="button-xl">Button Class only xl</app-btn>
    <h6>Border Radiuses</h6>
    <app-btn border-radius="none" title="rounded-none">rounded-none</app-btn>
    <app-btn border-radius="sm" class="ml-2" title="rounded-sm">rounded-sm</app-btn>
    <app-btn border-radius="md" class="ml-2" title="rounded-md">rounded-md</app-btn>
    <app-btn border-radius="lg" class="ml-2" title="rounded-lg">rounded-lg</app-btn>
    <app-btn border-radius="default" class="ml-2" title="rounded">rounded</app-btn>
    <app-btn border-radius="xl" class="ml-2" title="rounded-xl">rounded-xl</app-btn>
    <app-btn border-radius="xxl" class="ml-2 mt-3" title="rounded-xxl">rounded-xxl</app-btn>
    <app-btn border-radius="xxxl" class="ml-2 mt-3" title="rounded-xxxl">rounded-xxxl</app-btn>
    <app-btn border-radius="full" class="ml-2 mt-3" title="rounded-full">rounded-full</app-btn>
    <app-btn border-radius="s-none" class="ml-2 mt-3" title="rounded-s-none">rounded-s-none</app-btn>
    <!-- <div class="border border-lime-50 px-btn-sm py-btn-lg">ab</div> -->
     <h5 class="text-lg">Shadows</h5>
     <app-btn shadow="sm" class="mr-3">shadow-sm</app-btn>
     <app-btn shadow="default" class="mr-3">shadow-default</app-btn>
     <app-btn shadow="md" class="mr-3">shadow-md</app-btn>
     <app-btn shadow="lg" class="mr-3">shadow-lg</app-btn>
     <app-btn shadow="xl" class="mr-3">shadow-xl</app-btn>
     <app-btn shadow="xxl">shadow-xxl</app-btn>
     <h5 class="text-lg">Icon in button</h5>
     <app-btn icon-class="fa fa-plus"></app-btn>
     <app-btn icon-class="fa fa-plus" design="design-b"></app-btn>

     <h5>Forms</h5>
    <form-input/>
    <form-textarea/>
    <form-select/>
    <form-checkbox/>
    <form-radio-group/>
    <list-item/>
    <h4>Cards</h4>
    <card-design1 :selected="true"/>
    <card-design1/>
    <h4>Tables</h4>
    <simple-table/>
    <simple-table color="dark"/>
    <h4>Accordion</h4>
    <simple-accordion/>
    <h4>Alert</h4>
    <alert-item/>
    <alert-item color="primary"/>
    <h5 class="my-3">Navbars</h5>
    <top-navbar/>
    <top-navbar-menus-center/>
    <top-navbar-menus-center-right-input/>
  </div>
</template>
<script>
import AppBtn from '../components/buttons/app-btn/AppBtn.vue';
import FormInput from '../components/forms/FormInput.vue';
import FormTextarea from '../components/forms/FormTextarea.vue';
import FormSelect from '../components/forms/FormSelect.vue';
import FormCheckbox from '../components/forms/FormCheckbox.vue';
import FormRadioGroup from '../components/forms/FormRadioGroup.vue';
import ListItem from '../components/listing/ListItem.vue';
import CardDesign1 from '../components/cards/CardDesign1.vue';
import SimpleTable from '../components/tables/SimpleTable.vue';
import SimpleAccordion from '../components/accordion/SimpleAccordion.vue'
import AlertItem from '../components/alerts/AlertItem.vue'
import TopNavbar from '../components/navbars/TopNavbar.vue'
import TopNavbarMenusCenter from '../components/navbars/TopNavbarMenusOnCenter.vue'
import TopNavbarMenusCenterRightInput from '../components/navbars/TopNavbarMenusOnCenterRightInput.vue'
export default {
  components: { 
    AppBtn, 
    FormInput, 
    FormTextarea, 
    FormSelect, 
    FormCheckbox, 
    FormRadioGroup, 
    ListItem,
    CardDesign1,
    SimpleTable,
    SimpleAccordion,
    AlertItem,
    TopNavbar,
    TopNavbarMenusCenter,
    TopNavbarMenusCenterRightInput
   },
  name: 'home-view',
  data(){
    return{
      tasks: []
    }
  }
}
</script>
