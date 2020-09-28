import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify';
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
