<template>
    <keep-alive :include="keepCache">
    <router-view/>

    </keep-alive>
</template>

<script>
export default {
    computed:{
        keepCache:['1']
    },

}
</script>

<style>

</style>