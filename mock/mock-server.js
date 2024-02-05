const Mock = require('mockjs')
const bodyParser = require('body-parser')


function registerRoutes(app){
    const mocks=require('./index')
    const mockMap=mocks.map(router=>{
          return responseFake(router.url,router.type,router.response)
    })
    for(let mock of mockMap){
        app[mock.type](mock.url,mock.response)
    }
    

}
function responseFake(url,type,respond){
    return{
        url:new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        type:type || 'get',
        response(req,res){
             res.json(Mock.mock(respond instanceof Function?respond(req):respond))
        }
    }
     

}
module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
      extended: true
    }))
    // app[mock.type](mock.url, mock.response)
    const mockRoutes = registerRoutes(app)

}