import Vue from 'vue';
import Vuex from 'vuex';

export const SET_MATCHES = 'app/set_total_matches';

/* eslint no-param-reassign: 0 */

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
    currentIdx: 0,
    totalMatches: 0,
  },
  mutations: {
    [SET_MATCHES]: state => (state.totalMatches += 1),
  },
});

export default store;
