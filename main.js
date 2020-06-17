import Vue from 'vue'
import App from './App'
import store from './store'
import uView from "./components/uview-ui";

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
