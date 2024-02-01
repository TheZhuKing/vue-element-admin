<template>
  <div class="login_wrap">
    <el-form @submit.native.prevent="submit" :rules="rules" ref="formRef" class="form" :model="form" label-width="120px">
      <h3 class="title">Login Form</h3>
      <el-form-item>
        <span class="svg-wrap">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item>
        <span class="svg-wrap">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="form.passWord" :type="passwordType === 'password' ? 'password' : 'text'"></el-input>
        <span class="show-pwd" @click="showPwd" style="color: #889aa4">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button class="login_btn" type="primary" size="default" @click="Login">login</el-button>

      <div class="footer">
        <div class="footer_left">
          <div style="margin-bottom:10px">
            <span style="margin-right:16px"> Usename : admin </span>
            <span> Password : any </span>
          </div>
          <div>
            <span style="margin-right:16px"> Usename : admin </span>
            <span> Password : any </span>
          </div>
        </div>
        <div>
          <el-button type="primary" size="default" @click="">Or connet width</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        passWord: ''
      },
      rules: {},
      passwordType: 'password'
    }
  },
  methods: {
   async Login(){
      let res=  await  this.$store.dispatch('app/login',this)
      this.$router.push({ path: this.redirect || '/' })
      
    },
    showPwd() {
      console.log(111)
      if (this.passwordType) {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    submit() {
      this.refs.formRef.validate(valid => {
        if (valid) {
          console.log(valid)
        }
      })
    }
  }
}
</script>

<style lang="scss">
$cursor: #fff;
.login_wrap {
  background: rgb(45, 58, 75);
  height: 100%;
  .form {
    width: 520px;
    margin: 0 auto;
    padding: 160px 35px 0;
    box-sizing: border-box;
  }
  .title {
    text-align: center;
    color: #eee;
    margin: 0 auto 40px auto;
    font-weight: bold;
    font-size: 26px;
  }
  .el-input {
    width: 85%;
    input {
      background: transparent ;
      border: none;
      height: 52px;
      color: $cursor;
      border-radius: 0;
      &:-webkit-autofill{

        -webkit-text-fill-color: $cursor;
        caret-color: $cursor;
  
        box-shadow: 0 0 0px 50px rgb(40, 52, 67) inset !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    line-height: 36px;
    background: rgba(0, 0, 0, 0.1);
  }
  .el-form-item__content {
    display: flex;
    align-items: center;
    margin: 0 !important;
    .svg-wrap {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
    }
  }
  .show-pwd {
    cursor: pointer;
  }
  .login_btn {
    width: 100%;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 22px;
    color: #fff;
    font-size: 14px;
  }
}
</style>
