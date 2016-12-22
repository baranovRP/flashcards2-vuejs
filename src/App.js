import { mapState, mapActions, mapGetters } from 'vuex';
import Card from './components/card/Card.vue';
import store, { LOAD_CARDS, GET_CARDS_LENGTH } from './store/store';

const { load } = mapActions({ load: LOAD_CARDS });
const { cardsLength } = mapGetters({ cardsLength: [GET_CARDS_LENGTH] });

/* eslint-env browser */
/* eslint-disable no-console */

export default {
  name: 'app',
  store,
  components: {
    Card,
  },
  data() {
    return {
      currentIdx: 0,
      isPrevDisable: true,
      isNextDisable: false,
    };
  },
  computed: {
    ...mapState(['cards', 'totalMatches']),
    cardsLength,
  },
  mounted() {
    load.call(this);
  },
  methods: {
    next() {
      if (this.currentIdx < this.cardsLength - 1) {
        this.isPrevDisable = false;
        this.currentIdx += 1;
        if (this.currentIdx === this.cardsLength - 1) this.isNextDisable = true;
        return;
      }
      this.isNextDisable = true;
    },
    prev() {
      if (this.currentIdx > 0) {
        this.isNextDisable = false;
        this.currentIdx -= 1;
        if (this.currentIdx === 0) this.isPrevDisable = true;
        return;
      }
      this.isPrevDisable = true;
    },
  },
};
