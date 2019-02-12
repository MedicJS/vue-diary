import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersistence({
	storage: localStorage,
});

export default new Vuex.Store({
	state: {
		entries: [],
	},
	mutations: {
		RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
		removeEntry(state, index) {
			state.entries.splice(index, 1);
		},
		addEntry(state, payload) {
			state.entries.splice(0, 0, payload);
		},
	},
	actions: {
		removeEntry({ state, getters, commit, dispatch }, index) {
			commit('removeEntry', index);

			if (!state.entries.length)
				dispatch('addEntry', {
					title: '',
					content: '',
					editing: true,
				});
		},
		addEntry({ state, getters, commit, dispatch }, payload) {
			commit('addEntry', payload);
		},
	},
	plugins: [vuexPersist.plugin],
});
