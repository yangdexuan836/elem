<template>
  <div>
    <div class="header">
      <span class="icon iconfont">&#xe624;</span>
      <span class="my">订单</span>
    </div>
    <div class="order_center">
      <img class="bgimg" src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
      <h3 class="look">服务器饿晕了</h3>
      <button class="btn">立即登录</button>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'Header'
 } 
</script>

<style lang="stylus" scoped>
  .header
    width: 100%
    height: .44rem
    background: url(../../assets/images/headerbg.png) repeat
    background-size:cover;
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
  .order_center
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    background:#f5f5f5
    padding-top:1rem
    padding-bottom: 1.88rem
  .look
    margin: .125rem 0 .1rem 0
    color #6a6a6a
    font-weight: 400
    font-size: .16rem
  .btn
    width: 1.2rem
    padding: .1rem
    border-radius: 2px
    border: none
    background: #56d176
    color: #FFF
    text-align: center
    font-size: .14rem
    font-family: inherit
  .bgimg
    width: 2rem
    height: 2rem  
</style>