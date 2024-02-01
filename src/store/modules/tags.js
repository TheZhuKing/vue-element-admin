
// state:  仓库存储数据的地方
const state = {
      tagsNav:[{label:'Dashboard',value:'dashboard'},{label:'Documentaition',value:'documentaition'}]
    
}
// mutations:  修改仓库数据的唯一的位置
const mutations = {
 
}
// actions  处理acions，能够用来书写自己的业务逻辑的数据，也能够处理异步
const actions = {


}
// getters  ：  理解为计算属性，用于简化仓库的数据，让组件获取仓库的数据更加的方便
const getters = {

}



export default {
    namespace:true,
    state,
    mutations,
    actions,
    getters
}