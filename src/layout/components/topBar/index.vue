<template>
  <div class="topbar_wrap">
   
      <div class="bar_nav">
        <div style="padding: 0 15px 0 0" @click="toggle_sideBar">
          <svg :class="{ 'is-active': !isActive }" class="hamburger" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
          </svg>
        </div>

        <el-breadcrumb separator="/">
          <el-breadcrumb-item>Dashboard</el-breadcrumb-item>
          <el-breadcrumb-item>{{ currentBread }}</el-breadcrumb-item>


        </el-breadcrumb>
      </div>
      <div class="global_utils">
     
          <!-- 搜索 -->

          
          <globalSearch />
          
          <!-- 全屏 -->
          <Fullscreen />
          <!-- 全局大小变化 -->
          <el-tooltip class="item" effect="dark" content="Global Size" placement="bottom">
            <el-button class="size_btnStyle"> <SizeSelect /></el-button>
          </el-tooltip>
          <Avatar/>
     
      </div>

  </div>
</template>

<script>
import Fullscreen from '@/components/fullScreen'
import SizeSelect from '@/components/sizeSelect'
import Avatar from '@/components/avatar'
import globalSearch from '@/components/globalSearch'
export default {
  components: {
    Fullscreen,
    SizeSelect,
    Avatar,
    globalSearch
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle_sideBar() {
      this.isActive = !this.isActive
      this.$store.commit('set_side_collape', this.isActive)
    }
  },
  computed:{
    currentBread(){
       return this.$store.state.app.side_collape
    }
  }
}
</script>

<style lang="scss">
.topbar_wrap {
     padding: 0 15px;
     height: 50px;
     display:flex;
     justify-content:space-between;
     align-items: center;
  .el-breadcrumb {
    line-height: 20px;
  }
  .bar_nav {
    display: flex;
  
  }
  .is-active {
    transform: rotate(180deg);
  }
  .hamburger {
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
  .size_btnStyle{
      padding: 0;
      border: none;
  }
  .global_utils{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
  }
 
}
</style>
