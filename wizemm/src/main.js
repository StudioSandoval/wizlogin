import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import { mdiViewSequential } from '@mdi/js'
// import pg from 'pg'
// import VuPg from 'vue-Pg'

// Vue.use(VuePg, pg);

// pg,defaults.baseURL = 'http://localhost:3000/'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
