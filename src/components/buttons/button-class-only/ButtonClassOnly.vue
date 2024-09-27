!<template>
    <button :class="[btnClass]" class="text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
        Save changes
    </button>
</template>

<script>
export default {
    props:{
        color:{type:String, default:'primary'},
        size:{type:String, default:'md'}
    },
    data(){
        return{
            sizeVariants:{
                xs:{ classList:'py-1 px-2 text-xs'},
                sm:{ classList:'py-1 px-4 text-sm'},
                md:{ classList:'py-2 px-5 text-base'},
                lg:{ classList:'py-3 px-6 text-lg'},
                xl:{ classList:'py-4 px-7 text-xl'}
            }
        }
    },
    computed:{
        btnClass(){
            const classList = [];
            if(this.color){
                classList.push('bg-' + this.color);
            }
            if(this.size){
                classList.push(this.sizeVariants[this.size].classList)
            }
            return classList;
        }
    }
}
</script>

<style>

</style>