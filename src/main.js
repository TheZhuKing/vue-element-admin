import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css';

import  "./styles/index.scss"
import "@/icons" //svg-icon

import VueRouter from 'vue-router'

import router from './router'
// 使用vue路由
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false
  
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
