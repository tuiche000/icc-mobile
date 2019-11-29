import Vue from 'vue';
import App from './App';
import { router } from './router';
import baseStyle from './sytles/common.less';

import * as filters from './filters';
import './utils/bridge'
import i18n from './i18n'
Vue.use(baseStyle)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
new Vue({
  router,
  el: '#app',
  i18n,
  render: h => h(App)
});
