
import VueRouter from 'vue-router'
 
// 引入一下用到的组件 
import About from '../components/home'
 
// 第二步创建router实例对象并暴露
export default new VueRouter({
    routes: [
        {
            // path是路径
            path: "/about",
            //跳转的组件
            component: About
        },       
    ]
})
