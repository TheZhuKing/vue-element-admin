import Vue from 'vue'
import Vuex from 'vuex'

// 需要使用插件一次
Vue.use(Vuex)



const modulesFiles = require.context('./modules', true, /\.js$/)


// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
console.log(modules,'vuex');
// 接下里需要在mian中注册一下

// 对外暴露Store中的一个实例\\
export default new Vuex.Store({

   
    modules  
})
