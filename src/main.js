import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import VueMask from 'v-mask'
import store from '@/store.js';
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'
import router from '@/router.js'

Vue.use(VueMask)
Vue.use(Vuex)
Vue.use(router)

Vue.config.productionTip = false
Vue.component('v-text-field', VTextField)
Vue.use(VCurrencyField, { 
	locale: 'pt-BR',
	decimalLength: 2,
	autoDecimalMode: true,
	min: null,
	max: null,
	defaultValue: 0,
    valueAsInteger: false,
    allowNegative: false
})
new Vue({
  vuetify,
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
