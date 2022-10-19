import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import '@/plugins'
import '@/assets/css/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
