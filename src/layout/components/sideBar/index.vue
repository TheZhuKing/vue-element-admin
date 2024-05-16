<template>
  <el-scrollbar  wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#ffd04b">
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components:{
    SidebarItem
  },
  data(){
    return{
      
    }
  },
  computed:{
     isCollapse(){
        console.log(this.$store.state.app.sideStatus,'计算属性--');
       return  this.$store.state.app.sideStatus
     },
     ...mapGetters(
      [
        'permission_routes',
        'sidebar'
      ]
     )
  }

}
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item{
  background: #1f2d3d !important;
  &:hover{
    background: #001528 !important;
  }
}
.el-menu-item.is-active{
   color: #409EFF !important;
}
.el-menu-item-group__title{
   padding: 0;
}
</style>