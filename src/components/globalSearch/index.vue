<template>
   <div :class="{'show':show}" class="globalSearch">
    <svg-icon  class-name="search-icon" icon-class="search" @click.stop="toSearch" />
    <el-select
      ref="input_Ref"
      class="inline-select"
      v-model="serachContent"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      @change="change"
       >
        <el-option
          v-for="item in options"
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
            serachContent:'',
            show:false,
            options:[]
        }
    },
    mounted(){

    },
    watch:{
      show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
    },
    methods:{
      querySearch(query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    //   去查询
      toSearch(){

        this.show=!this.show
        console.log(this.show,'点击了--');
        if(this.show){
         this.$refs.input_Ref&&this.$refs.input_Ref.focus()
        }
      },
      close(){

        this.$refs.input_Ref&&this.$refs.input_Ref.blur()
        this.options=[]
        this.show=false
      },
      change(){
          this.options=[]
          this.$nextTick(()=>{
            this.show=false
          })
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
    .search-icon{
      vertical-align: middle;
      cursor: pointer;
    }
  
    .inline-select{
      overflow: hidden;
      transition: width .2s;
      width: 0;
      display: inline-block;
      vertical-align: middle;
      .el-input__inner{
        border-radius: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
    }
    &.show{
      .inline-select{
        width: 155px;
      
      }
     
      
    }

}

</style>