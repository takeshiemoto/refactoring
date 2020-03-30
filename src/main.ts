import Vue from 'vue';
import App from './App.vue';
import VueRx from 'vue-rx';
import Rx from 'rxjs';

import router from './router';
import './assets/styles/main.css';

Vue.use(VueRx, Rx);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
