<template>
    <el-dropdown trigger="click" @command="handleSetSize">
        <div class="avatar-wrap">
        <img  :src="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'+'?imageView2/1/w/40/h/40'" class="user-avatar">
        <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">
            {{item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
</template>

<script>
export default {
    data() {
        return {
            sizeOptions:[{label:'选项一',value:'1'}],
            size:''
        }
    },
    methods:{
        handleSetSize(){
            
        }
    }

}
</script>

<style lang='scss'>
.user-avatar{
    border-radius:10px
}
.avatar-wrap{
    position: relative;
    margin-right: 30px;
    margin-top: 5px;
    .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
}

</style>