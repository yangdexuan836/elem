<template>
  <div class="LoginCenter">
    <p></p>
    <div class="center_top">
      <a href="javascript:;" class="addr">
        <span class="iconfont addrs">&#xe610;</span>
        <div class="address">
          我的地址
          <span class="iconfont right">&#xe62d;</span>
        </div>
      </a>
    </div>
    <p></p>
    <div class="center_top">
      <a href="javascript:;" class="addr">
        <span class="iconfont addrs jbsc">&#xe60c;</span>
        <div class="address borbom">
          金币商城
          <span class="iconfont right">&#xe62d;</span>
        </div>
      </a>
      <a href="javascript:;" class="addr">
        <span class="iconfont addrs fx">&#xe600;</span>
        <div class="address">
          分享那五元现金
          <span class="iconfont right">&#xe62d;</span>
        </div>
      </a>
    </div>
    <p></p>
    <div class="center_top">
      <a href="javascript:;" class="addr">
        <span class="iconfont addrs kf">&#xe635;</span>
        <div class="address borbom">
          我的客服
          <span class="iconfont right">&#xe62d;</span>
        </div>
      </a>
      <a href="javascript:;" class="addr">
        <span class="iconfont addrs xz">&#xe722;</span>
        <div class="address">
          下载饿了么APP
          <span class="iconfont right">&#xe62d;</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Center'
  }
</script>

<style lang="stylus" scoped>
  .LoginCenter
    background:#f5f5f5
    padding-bottom: 0.98rem
  p
    height:0.1rem
  .center_top
    border-top: 1px solid #ddd
    border-bottom: 1px solid #ddd
    font-size: .15rem
    background: #fff
  .addr
    font-size: .445rem
    color: #4aa5f0
    display: flex
    align-items: center
    padding-left: .25rem
  .addrs
    display: block
    width: .18rem
    height: .2rem
    margin-left: -.1rem
    margin-right: .1rem
  .address
    color: #000
    display: flex
    justify-content: space-between
    width: 100%
    padding: .14rem .1rem .14rem 0
    font-size: .15rem
  .right
    color: #ddd
    font-size: .1rem
  .jbsc
    color: #94d94a
  .fx
    font-size: .25rem
    color: red
    margin-left: -.15rem
  .borbom
    border-bottom: 1px solid #ddd
  .kf
    color: #4da6f0
  .xz
    font-size: .3rem
    margin-left: -.18rem
    margin-top: -.12rem
</style>