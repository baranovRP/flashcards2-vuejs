import { mapState, mapActions } from 'vuex';
import Card from './components/card/Card.vue';
import store, { LOAD_CARDS } from './store/store';

const { load } = mapActions({ load: LOAD_CARDS });

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
  },
  mounted() {
    load.call(this);
  },
  methods: {
    next() {
      if (this.currentIdx < this.$store.state.cards.length - 1) {
        this.isPrevDisable = false;
        this.currentIdx += 1;
        if (this.currentIdx === this.$store.state.cards.length - 1) this.isNextDisable = true;
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
