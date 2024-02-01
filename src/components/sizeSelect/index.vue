<template>
    <el-dropdown trigger="click" @command="handleSetSize">
        <div>
          <svg-icon class-name="size-icon" icon-class="size" />
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

<style>


</style>