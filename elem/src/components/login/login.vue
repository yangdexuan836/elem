<template>
  <div>
    <login-header></login-header>
    <login-center></login-center>
    <login-footer></login-footer>
  </div>
</template>

<script>
import LoginHeader from './Header'
import LoginCenter from './Center'
import LoginFooter from '../Footer'
  export default {
    name: 'Login',
    components: {
      LoginHeader,
      LoginCenter,
      LoginFooter
    }
  }
</script>

<style scoped>
  html,body {
    background: #f5f5f5;
  }
</style>