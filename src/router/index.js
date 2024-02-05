
import VueRouter from 'vue-router'
 
// 引入一下用到的组件 
import Layout from '../layout/index'
 
const constRoutes=[
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
        component: Layout,
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
const asyncRoutes =[
    {
        // path是路径
        path: "/permission",
        //跳转的组件
        component: Layout,
        redirect: '/permission/page',
        children: [
        {
            path: 'page',
            component: () => import('@/views/permission/page.vue'),
            name: 'PagePermission',
            meta: {
                title: 'Page Permission',
                roles: ['admin'] // or you can only set roles in sub nav
            }
        }
        ]
    },  

]
// 第二步创建router实例对象并暴露
export default new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes: constRoutes
})
