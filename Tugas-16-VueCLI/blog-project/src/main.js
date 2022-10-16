import Vue from 'vue'
import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios';
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
