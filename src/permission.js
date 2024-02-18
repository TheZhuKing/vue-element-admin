import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie


const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
router.beforeEach(async(to,from,next)=>{
    NProgress.start()
    
    document.title=to.meta.titile || 'to-complete-admin'
    const hasToken=getToken()
    const hasRole=store.getters.roles && store.getters.roles.length > 0
    if(hasToken){
        // 如果有token且访问login
        if(to.path == '/login'){
            next({path:'/'})
            NProgress.done()
        }else{
            if(hasRole){
                next()
            }else{
                try {
                    // 有token但没有角色 重新获取角色信息建立路由
                    const { roles } = await store.dispatch('user/getInfo')
                    // generate accessible routes map based on roles
                    // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    // router.addRoute(accessRoutes)
                    next({...to,replace:true})
                } catch (error) {
                    console.log(error,'permission错误信息');
                    Message.error(error || 'Has Error')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
           
            }
        }
    }else{
        if(whiteList.includes(to.path)){
            next()
        }else{
            // 没token重新登录获取token且不在白名单内
            Message.warning('token失效,请重新登录')
            next({path:`/login?redirect=${to.path}`})
        }
        NProgress.done()

    }
})
router.afterEach(() => {
    // finish progress bar
    NProgress.done()
  })
  