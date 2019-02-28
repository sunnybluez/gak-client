// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)

// import axios from './axios/axios-init.js'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios,axios);


import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    url:"http://localhost:8080/"
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
