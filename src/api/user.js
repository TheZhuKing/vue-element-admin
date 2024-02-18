import service from "@/router/request";
export function Login(params){
   return service.post('/vue-element-admin/user/login',params)
}
export function getInfo(params){
   return service.post('/vue-element-admin/user/info',params)
}
export function logout(params){
   return service.post('/vue-element-admin/user/logout',params)
}