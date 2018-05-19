<template>
  <div>
    <orderf-header></orderf-header>  
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderfHeader from './Header'
import OrderFooter from '../Footer'
  export default{
    name: 'OrderHeader',
    components: {
      OrderfHeader,
      OrderFooter
    }
  }
</script>

<style lang="stylus">

</style>
