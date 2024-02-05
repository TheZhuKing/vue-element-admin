import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const service=axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeOut:5000
})

service.interceptors.request.use(
    config=>{
        let token=getToken()
        if(token){
            config.header['Authorization']=token
        }
        return config
    },
    error=>{
          console.log(error,'request-error');
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response=>{
         let res=response.data
         if(res.code !== 20000){
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
              })

         }else{
            return res
         }
    },
    error=>{
        console.log('response-error' + error) // for debug
        Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
        })
        console.log(error,'request-error');
        return Promise.reject(error)
    }
)



export default service