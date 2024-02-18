import { getToken, setToken, removeToken } from '@/utils/auth'
import {getInfo,logout} from '@/api//user'
// import router, { resetRouter } from '@/router'
// state:  仓库存储数据的地方
const state = {
    token:getToken(),
    roles:[]

}
// mutations:  修改仓库数据的唯一的位置
const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_ROLES: (state, roles)=>{
        state.roles = roles
    }
    
 
}
// actions  处理acions，能够用来书写自己的业务逻辑的数据，也能够处理异步
const actions = {
    login({state,commit},THAT){
          let {passWord,userName}=THAT.form
           return new Promise((resolve, reject) => {
                THAT.$api.user.Login({ username: userName.trim(), password: passWord }).then(res=>{
                    let {data}=res
                    commit('SET_TOKEN',data.token)
                    setToken(data.token)
                    resolve()
                })
            })

       
     
    },
    getInfo({state,commit}){
        return new Promise((resolve, reject) => {
            getInfo({token:state.token}).then(res=>{
                let {data}=res
                const {roles} = data
                commit('SET_ROLES',roles)
                resolve(data)
               
            })
        })

    },
    logout({state,commit}){
        return new Promise((resolve, reject) => {
            logout().then(res=>{
                commit('SET_TOKEN','')
                commit('SET_ROLES',[])
                removeToken()
                resolve()
        
                 
            })
        })

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