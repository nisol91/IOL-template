import Vue from 'vue'
import App from './App.vue'
//axios
import axios from 'axios'
// import VueAxios from 'vue-axios'
Vue.prototype.$http = axios

// Vue.use(VueAxios, axios)

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


//event bus, for sharing data between components
export const EventBus = new Vue();


//controllo scroll
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')