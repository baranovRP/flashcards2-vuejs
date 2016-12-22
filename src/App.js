import { mapState } from 'vuex';
import Card from './components/card/Card.vue';
import store from './store/store';

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
      url: 'https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5',
    };
  },
  computed: {
    ...mapState(['cards']),
  },
  mounted() {
    const self = this;
    fetch(this.url)
      .then(r => r.json())
      .then((data) => {
        self.$store.state.cards = data;
      });
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
