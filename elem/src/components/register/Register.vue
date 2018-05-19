<template>
  <div class="box_big">
    <div class="box_center">
      <div class="logo">
          <img class="logo_img" src="../../../static/images/elem.png"/>
          <div class="reg_login">
            <router-link active-class="reg_toggle" to='/register'>
              <a class="reg_font logins" href="javascript:;">账户注册</a>
            </router-link>
            <router-link active-class="reg_toggle" to='/password'>
              <a class="reg_font" href="javascript:;">信息登录</a>
            </router-link>
          </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'Register'
  }

</script>

<style scoped lang="stylus">
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
  .logo
    text-align: center
    margin: 0 auto
  .logo_img
    width: 1.4rem
    height: .56rem
    display: inline-block
  .reg_login
    margin-top: .4rem
    line-height: .15rem
    display: flex
    justify-content: space-between
  .reg_font
    font-size: .15rem
    color: #333
    padding-bottom: .04rem
    cursor: pointer
  .reg_toggle a
    color: #2395ff
    border-bottom: .02rem solid #2395ff
</style>