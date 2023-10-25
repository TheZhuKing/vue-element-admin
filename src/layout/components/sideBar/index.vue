<template>
  <el-scrollbar  wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="isCollapse"
      :collapse-transition="false"
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu  v-for="item in 10" :key='item' :index="item+''" >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
    
      </el-submenu>
     
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  computed:{
     isCollapse(){
       return  this.$store.state.app.side_collape
     }
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