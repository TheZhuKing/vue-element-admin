<template>
   <div>
      <components :is="currentDash"></components>
   </div>
</template>

<script>
import adminDashbord from './admin/index.vue'
import editorDashbord from './editor/index.vue'
export default {
   data() {
      return {
         currentDash:'adminDashbord'
      }
   },
   components:{
      adminDashbord,
      editorDashbord
   }
}
</script>

<style>

</style>