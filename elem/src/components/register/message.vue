<template>
<div class="box_big">
   <div class="box_center">
    <el-form :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item class="login_ipt" prop="username">
        <el-input type="text" v-model="userName" auto-complete="off" placeholder="账号"></el-input>
        <button class="but_count">获取验证码</button> 
      </el-form-item>
      <el-form-item class="login_ipt" prop="password">
        <el-input type="password" v-model="password" auto-complete="off" placeholder="密码"></el-input>  
      </el-form-item>
      <section class="agreement">
        温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
        <a href="javascript:;">《用户服务协议》</a>
        </section>
      <el-form-item style="width:100%;">
        <el-button type="primary" class="btn_login" style="width:100%;" @click="createAccount">注册</el-button>
      </el-form-item>
    </el-form>
    <p class="abouts">
      <a class="abo" href="javascript:;">关于我们</a>   
    </p>
  </div>
</div>
</template>

<script>
export default {  
  name: 'hello',
  data() {
    return {
      userName: '',
      password: '',
      newPassword: '',
      rules: {
        username: [
          {required: false, message: '请输入账号', trigger: 'blur'},
          //{ validator: validaePass }
        ],  
        password: [
          {required: false, message: '请输入密码', trigger: 'blur'},
          //{ validator: validaePass2 }
        ],
        newPassword: [
          {required: false, message: '请输入新密码', trigger: 'blur'},
          //{ validator: validaePass2 }  
        ]
      },
      checked: false
    }
  },
  methods: {
    createAccount() { //注册
      let params = {
        account : this.userName,
        password : this.password
      }
      if( params.account === "" || params.password === "") {
        alert("账号和密码不能为空!")
        return false
      }
      console.log(params)
      this.$http.post('/api/register',params)
          .then((response) => {  
            let res = response.data
            console.log(res)
            alert(res.msg)
          })
          .catch((reject) => {
            console.log(reject)
          })
    },
    /*
    deleteAccount() {
      let params = {
        account : this.userName,
        password : this.password
      }
      if( params.account === "" || params.password === "") {
        alert("账号和密码不能为空!")
        return false;
      }
      console.log(params)
      this.$http.post('/api/register',params)
          .then((response) => {
            let res = response.data
            //console.log(params)
            console.log(res)
            alert(res.msg)
          })
          .catch((reject) => {
            console.log(reject)
          })
    },
    loginAccount() { //登录
      let params = {
        account : this.userName,
        password : this.password
      }
      if( params.account === "" || params.password === "") {
        alert("账号和密码不能为空!")
        return false;
      }
      this.$http.post('/api/Logins',params)
          .then((response) => {
            let res = response.data
            console.log(res)
            alert(res.msg)
            console.log()
            if(res.code == 1){
               this.$router.push({ path: '/' });
            }
          })
          .catch((reject) => {
            console.log(reject)
          })
    }
    updatedAccount() {
      let params = {
        account : this.userName,
        password : this.password,
        newPassword : this.newPassword
      }
      if( params.account === "" || params.password === "") {
        alert("账号和密码不能为空!")
        return false;
      }
      if( params.newPassword === "" ) {
        alert("新密码不能为空!")
        return false;
      }  
      this.$http.post('http://localhost:3000/api/login/updatedAccount',params)
          .then((response) => {
            let res = response.data
            console.log(res)
            alert(res.msg)
          })
          .catch((reject) => {
            console.log(reject)
          })
    }*/
  }
}
</script>

 <style lang="stylus">
  .box_big
    height: auto
    padding-top: .4rem
  .box_center
    justify-content: flex-start
    width: 300px
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0 auto
  .butt
    min-height: 296px
  .login_ipt
    position: relative
    margin-top: .16rem
    height: .48rem
    font-size: .14rem
    background: #fff
    border-color: #ccc
    height: .5rem
    width: 3rem
  .but_count
    padding: 0
    border: 0
    border-radius: 6px
    color: #2395ff
    background: transparent
    text-align: center
    font-size: .14rem
    display: inline-block
    position: absolute
    top: 50%
    right: .1rem
    transform: translateY(-50%)
    color: #ccc
  .agreement
    margin-top: .12rem
    color: #999
    font-size: .14rem
    line-height: .2rem
    a
      color: #2395ff
  .btn_login
    display: block
    width: 100%
    height: .42rem
    margin-top: .3rem
    border-radius: 4px
    background: #4cd96f
    color: #fff
    cursor: pointer
    text-align: center
    font-size: .16rem
    outline: none
    border: none
  .abouts
    display: flex
    justify-content: center
  .abo
    text-align: center
    color: #999
    font-size: .12rem 
</style>