import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './css/normalize.css'
import './css/Project.css'

Vue.config.productionTip = false
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
