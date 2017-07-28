import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/views/404'
import Home from '@/views/Home/Home'
import Hello from '@/components/Hello'
import Exchange from '@/views/exchange/Exchange'
import ExchangeRecord from '@/views/exchange/ExchangeRecord'
import Treasure from '@/views/treasure/treasure'
import Task from '@/views/task/task'
import Goods from '@/views/goods/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'notFound',
      component: Empty
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/exchange',
      component: Exchange
    },
    {
      path: '/exchangeRecord',
      component: ExchangeRecord
    },
    {
      path: '/treasure',
      name: 'treasure',
      component: Treasure
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/goods',
      component: Goods
    }
  ]
})
