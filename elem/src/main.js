// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/index.css'
import './assets/jquery.min.js'
import './assets/iconfont/iconfont.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'  
import ElementUI from 'element-ui'  
import axios from 'axios'
Vue.config.productionTip = false

Vue.use(MintUI)

Vue.use(ElementUI)

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
