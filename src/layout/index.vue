<template>
  <div :class="appObj()" class="app_wrapper">
    <sideBar class="sideBar-wrapper"/>
    <div class="main-wrapper">
      <topBar class="topBar"/>
      <tags-view  class="tags-view"></tags-view>
      <appMain class="app_Main" />
    </div>
  </div>
</template>

<script>
import { sideBar, topBar, appMain,tagsView } from './components'
export default {
  name: 'layout',
  components: {
    sideBar,
    topBar,
    appMain,
    tagsView
  },
  computed:{
    isCollapse(){
       return  this.$store.state.app.sideStatus
     }
  },
  methods:{
    appObj(){
      // console.log(isCollapse);
     return {
        toggle_open:!this.isCollapse,
        toggle_close:this.isCollapse
     }
  }
  }
}
</script>

<style>
</style>
