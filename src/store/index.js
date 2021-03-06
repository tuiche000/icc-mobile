import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import common from './modules/common';

Vue.use(Vuex);

// const debug = process.env === 'development';
// const debug = process.env.NODE_ENV !== 'production';
const debug = false;

export default new Vuex.Store({
  modules: {
    common
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
