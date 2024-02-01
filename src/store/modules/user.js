import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'
// state:  仓库存储数据的地方
const state = {
    token:getToken()

}
// mutations:  修改仓库数据的唯一的位置
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
      },
 
}
// actions  处理acions，能够用来书写自己的业务逻辑的数据，也能够处理异步
const actions = {
    login({},THAT){
          let {passWord,userName}=THAT.form
          if(userName =='admin'&&passWord == '123'){
            new Promise((resolve, reject) => {
                THAT.$api.user.Login().then(res=>{
                    let {data}=res
                    commit('SET_TOKEN',data.token)
                    setToken(data.token)
                    resolve()
                })
            })

          }else{
            return new Promise((resolve,reject)=>{
                reject('用户名或密码错误')
            })
          }
     
    }


}
// getters  ：  理解为计算属性，用于简化仓库的数据，让组件获取仓库的数据更加的方便
const getters = {

}



export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}