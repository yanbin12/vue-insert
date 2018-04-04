import Vue from 'vue'
import App from './App.vue'
 import Bin from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Bin)
new Vue({
  
  render: h => h(App)
}).$mount('#app')
