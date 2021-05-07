import Vue from 'vue'
import App from './App.vue'
import store from "./store/store"
import router from './router'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
