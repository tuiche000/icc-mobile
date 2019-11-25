import VueI18n from 'vue-i18n';
import Vue from 'vue';
Vue.use(VueI18n)
import zhCN from './zh-CN'
import enUS from './en-US'

const i18n = new VueI18n({
  local: 'en-US', // 设置语言 
  fallbackLocale: 'zh-CN',
  messages: {
    "zh-CN": zhCN,
    "en-US": enUS
  }
})

export default i18n