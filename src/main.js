import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Ripple from 'vue-ripple-directive';
import VueTimeago from 'vue-timeago';

Vue.config.productionTip = false;
Vue.directive('ripple', Ripple);

Vue.use(VueTimeago, {
	name: 'Timeago',
	locale: 'en',
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
