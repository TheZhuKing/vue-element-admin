const tokens = {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
  }
  
  const users = {
    'admin-token': {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    'editor-token': {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    }
  }


  module.exports = [
    // login
    {
        url:"/vue-element-admin/user/login",
        type:'post',
        response(config){
            console.log(config,'配置');
             const {username}=config.body
             let token=tokens[username]
             return{
                code:20000,
                data:token
             }

        }
    },
    // info
    {
        url:"/vue-element-admin/user/info",
        type:'post',
        response(config){
            const {token}=config.body
            let data=users[token]
            return{
                code:20000,
                data
            }
        }
    }


]