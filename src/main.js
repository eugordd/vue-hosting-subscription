import Vue from 'vue'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
