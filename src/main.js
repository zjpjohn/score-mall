// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mui from './assets/libs/mui.min'
import axios from 'axios'

Vue.prototype.$mui = mui
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.filter('tel-formater', function (value) {
  var reg = /^(\d{3})(\d{4})(\d{4})$/
  var matches = reg.exec(value)
  return matches[1] + ' ' + matches[2] + ' ' + matches[3]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
