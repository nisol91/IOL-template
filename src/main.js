import Vue from 'vue'
import App from './App.vue'

//bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//bootstrap vue
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

//vue router 
import router from './router'



Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')