<template>
   <div class="globalSearch">
    <svg-icon class-name="search-icon" icon-class="search" @click="toSearch" />
    <el-select
     class="inline-select"
      v-model="serachContent"
       placeholder="Search" 
       filterable 
       remote
       >
        <el-option
          v-for="item in matchList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
   </div>
</template>

<script>
export default {
    data(){
        return{
            serachContent:''

        }

       
    },
    mounted(){
    

    },
    methods:{
        querySearch(queryString, cb) {
        var matchList = this.matchList;
        var results = queryString ? matchList.filter(this.createFilter(queryString)) : matchList;
        // 调用 callback 返回建议列表的数据
        if(results.length>0){

        }else{
              results=[{value:'暂无数据'}]
        }
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    //   去查询
      toSearch(){
         let ele = document.querySelector('.inline-input .el-input__inner')
         ele.style.width=155+'px'
         this.$refs.input_Ref.focus()
         

      }
    },
    computed:{
        matchList(){
            return this.$store.state.app.matchList
        }
         
    }

}
</script>

<style lang="scss"> 
.globalSearch{
    display: flex;
    align-items: center;
    .search-icon{
    }
    /*input样式*/
    .inline-input{
        line-height: 50px;
        height: 50px;
       .el-input__inner{
            width: 0;
           border: none;
           border-bottom:1px solid #ccc;    
           border-radius: 0;
           vertical-align: top;
           padding: 0;
           transition: all .3s;

         

       }
    }

}

</style>