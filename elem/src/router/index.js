import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index'
import ShopList from '@/components/shoplist/ShopList'
import Login from '@/components/login/Login'
import Order from '@/components/order/Order'
import Find from '@/components/find/Find'
import Register from '@/components/register/Register'
import Message from '@/components/register/message'
import Password from '@/components/register/password'

Vue.use(Router)

export default new Router({
    mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/shoplist/:slid',
      name: 'ShopList',
      component: ShopList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      children: [
        {
          path: '/register',
          name: 'Message',
          component: Message
        },
        {
          path: '/password',
          name: 'Password',
          component: Password
        }
      ]
    }
  ]
})
