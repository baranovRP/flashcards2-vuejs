import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
    currentIdx: 0,
  },
});

export default store;
