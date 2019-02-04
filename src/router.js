import Vue from 'vue';
import Router from 'vue-router';
import Diary from './views/Diary.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '*',
			name: 'diary',
			component: Diary,
		},
	],
});
