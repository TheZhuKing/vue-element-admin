<template>
  <div>
    <el-scrollbar wrap-class="tags_wrapper">
        <router-link
        v-for="tag in tagsNav"
         :key="tag.value" 
         :value="tag.value"
        :to="tag.value"
        tag="span"
        class="tags-view-item"
        :class="isActive(tag)?'active':''"
        >
        {{ tag.value }}
        <span  v-if="isInnate(tag)"  class="el-icon-close" @click.native.stop=""></span>
    
    </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
    computed:{
        tagsNav(){
            return this.$store.state.tags.tagsNav
        }
    },
    methods: {
        isActive(tag){
            console.log(this.$route);
             return  tag.path == this.$route.path
        },
        isInnate(tag){
            

        }
    }

}
</script>

<style lang='scss'>
 .tags_wrapper{
    
    padding: 0 15px;
   .tags-view-item {
        margin:0 3px;
        cursor: pointer;
        border: 1px solid #ccc;
        padding: 3px;
        font-size: 12px;
    }
    .tags-view-item.active{
         background: #42b983;
         color: #fff;
         &::before{
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 2px;
         }

    }

 }


</style>