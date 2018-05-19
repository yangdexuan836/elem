<template>
  <!-- <div>
    <div class="box_big">
      <div class="box_center">
        <form>
          <section class="login_mail">
            <input id="username" type="text" placeholder="手机/邮箱/用户名">
          </section>
          <section class="login_mail">
            <input id="pwd" type="text" placeholder="密码">
            <div class="swichBtn">
              <div class="swichBtn_bfm"></div>
            </div>
          </section>
          <button class="btn_login">登录</button>
        </form>
          <p class="abouts">
            <a class="abo" href="javascript:;">关于我们</a>        
          </p>
      </div>
    </div>
  </div> -->
  <div class="box_big">
   <div class="box_center">
    <el-form :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item class="login_mail" prop="username">
        <el-input type="text" v-model="userName" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item class="login_mail" prop="password">
        <el-input type="password" v-model="password" auto-complete="off" placeholder="密码"></el-input>
        <div class="swichBtn">
          <div class="swichBtn_bfm"></div>
        </div>  
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" class="btn_login" style="width:100%;" @click="loginAccount">登录</el-button>
      </el-form-item>
    </el-form>
    <p class="abouts">
      <a class="abo" href="javascript:;">关于我们</a>   
    </p>
  </div>
</div>
</template>

<script>
import '../../assets/jquery.min.js'
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
  }
}
</script>

<style lang="stylus" scoped>
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
  .login_mail
    position: relative
    margin-top: .16rem
    height: .48rem
    font-size: .14rem
    background: #fff
    border-color: #ccc
    // input
    //   width: 100%
    //   height: 100%
    //   left: 0
    //   padding-left: .1rem
    //   border: 1px solid #ddd
    //   border-radius: 4px
    //   color: #333
    //   outline-color: #2395ff
  .swichBtn
    justify-content: flex-start
    display: flex
    align-items: center
    padding: 0 .06rem
    width: .3rem
    height: .16rem
    color: #999
    font-size: .12rem
    border: 1px solid #ddd
    border-radius: 8px
    display: inline-block
    position: absolute
    top: 50%
    right: 10px
    transform: translateY(-50%)
    text-align: center
    line-height: .16rem
  .swichBtn_bfm
    width: .16rem
    height: .16rem
    border-radius: 50%
    border: 1px solid #ccc
    margin-left: -.07rem
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