import Vue from 'vue'
import Router from 'vue-router'
import Empty from '@/views/404'
import Home from '@/views/Home/Home'
import Hello from '@/components/Hello'

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
    }
  ]
})
