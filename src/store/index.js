import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/screens/User/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'staging';

export default new Vuex.Store({
  modules: {
    user,
  },
  strict: debug,
});
