
import VueRouter from 'vue-router'
 
// 引入一下用到的组件 
import layout from '../layout/index'
 
// 第二步创建router实例对象并暴露
export default new VueRouter({
    routes: [
        // 登录页
        {
            // path是路径
            path: "/login",
            name:"Login",
            //跳转的组件
            component:()=>import("@/views/login/index") ,
         
        },       
        // 主页
        {
            // path是路径
            path: "/",
            //跳转的组件
            component: layout,
            redirect: '/dashboard',
            children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
            ]
        },       
        
    ]
})
