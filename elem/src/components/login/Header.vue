<template>
  <div>
    <div class="header">
      <span class="icon iconfont">&#xe624;</span>
      <span class="my">我的</span>
    </div>
    <router-link to='/register'>
      <a class="reg">
        <span class="portrait iconfont port">&#xe723;</span>
        <div class="login">
          <p class="logreg">登录/注册</p>
          <p>
            <span class="phone iconfont">&#xe64f;</span>
            <span class="qx">登陆后享受更多权限</span>
          </p>
        </div>
        <span class="right iconfont">&#xe62d;</span>
      </a>
    </router-link>
    <div class="login_jh">
      <a href="javaScript:;" class="loga">
        <p>
          <span class="hb iconfont">&#xe611;</span>
        </p>
        <p class="login_hb">红包</p>
      </a>
      <a href="javaScript:;" class="loga">
        <p>
          <span class="jb iconfont">&#xe618;</span>
        </p>
        <p class="login_hb">金币</p>
      </a>
    </div>
  </div>
</template>

<script>
  import '../../assets/icon/iconfont.css'
  export default {
    name: 'LoginHeader'
  }
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: .44rem
    background: url(../../assets/images/headerbg.png) repeat
    background-size:cover
  .icon
    display: block
    float: left
    width: .44rem
    height: .44rem
    text-align: center
    line-height: .44rem
    color: #FFF
  .my
    display: block
    float: left
    width: 3.3rem
    height: .44rem
    text-align: center
    line-height: .44rem
    color: #FFF
    margin-left: -.22rem
    font-size: .18rem
    font-weight: 900
  .reg
    width: 3.45rem
    height: .6rem
    padding: .25rem .15rem
    background: url(../../assets/images/headerbg.png) repeat
    background-size:cover
    display: flex
    align-items: center
  .portrait
    display: block
    width: .6rem
    height: .6rem
    background: #fff
    border-radius: 50%
  .port
    text-align: center
    font-size: .6rem
    color: #ccc
  .login
    overflow: hidden
    margin-left: .18rem
    flex-grow: 1
  .right
    width: .2rem
    height: .42rem
    color: #fff
    line-height: .42rem
  .logreg
    font-size: .22rem
    font-weight: 500
    color: #fff
  .qx
    font-size: .12rem
    font-weight: 900
    color: #fff
  .phone
    color: #fff
    font-size: .12rem
    text-align: center
  .login_jh
    display: table
    width: 100%
    height: .84rem
    border-bottom: 1px solid #ddd
    background: #fff
  .loga
    display: table-cell
    width: 50%
    vertical-align: middle
    text-align: center
  .loga:not(:last-child)
    border-right: 1px solid #ddd
  .hb
    font-size: .26rem
    color: #ff5f3e
  .jb
    font-size .26rem
    color: #6ac20b
  .login_hb
    font-size: .12rem
    color: #333
    margin-top: .05rem
</style>
