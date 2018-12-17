// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import '../static/reset.css'

import Vuex from 'vuex'
import store from './store/store'

Vue.use(Mint);
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})