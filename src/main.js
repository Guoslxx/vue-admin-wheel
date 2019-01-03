import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import iview from './components/install-iview/index'
import 'iview/dist/styles/iview.css'
import personaliseSetting from './personalise-setting'

personaliseSetting();
Vue.config.productionTip = false

Vue.use(Router);
Vue.use(iview);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
