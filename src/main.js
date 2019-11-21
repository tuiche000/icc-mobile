import Vue from 'vue';
import App from './App';
import { router } from './router';
import baseStyle from './sytles/common.less';
import * as filters from './filters';
// import './utils/rem'
Vue.use(baseStyle)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
