<template>
    <svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click" />
</template>

<script>
export default {
    data() {
        return {
            isFullscreen:false
        }
    },
    methods:{
       click(){
            
       }
    }

}
</script>

<style>

</style>