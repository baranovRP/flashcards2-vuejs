import Vue from 'vue';
import Vuex from 'vuex';

/* eslint no-param-reassign: 0 */

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
    currentIdx: 0,
    totalMatches: 0,
  },
  mutations: {
    incrementTotalMatches: state => (state.totalMatches += 1),
  },
});

export default store;
