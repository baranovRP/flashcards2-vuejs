import Vue from 'vue';
import Vuex from 'vuex';

export const SET_MATCHES = 'app/set_total_matches';
export const SET_CARDS = 'app/set_cards';
export const LOAD_CARDS = 'app/load_cards';

/* eslint no-param-reassign: 0 */
/* eslint-env browser */
/* eslint-disable no-console */

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cards: [],
    totalMatches: 0,
  },
  mutations: {
    [SET_MATCHES]: state => (state.totalMatches += 1),
    [SET_CARDS](state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    [LOAD_CARDS](context) {
      const url = 'https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
      fetch(url)
        .then(r => r.json())
        .then((data) => {
          context.commit(SET_CARDS,
            data);
        });
    },
  },
});

export default store;
