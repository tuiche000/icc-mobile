import { SET_TOKEN, SET_LANG } from '../types'

export default {
  state: {
    token: '',
    lang: ''
  },
  getters: {
    token: state => state.token,
    lang: state => state.lang,
  },
  actions: {
    async [SET_TOKEN]({ commit }, params = {}) {
      commit(SET_TOKEN, params);
    },
    async [SET_LANG]({ commit }, params = {}) {
      commit(SET_LANG, params);
    },
  },
  mutations: {
    [SET_TOKEN](state, payload = {
      token: ''
    }) {
      state.token = payload.token
    },
    [SET_LANG](state, payload = {}) {
      state.lang = payload.lang
    },
  }
};
