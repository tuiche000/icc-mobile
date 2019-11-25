<template>
  <div>
    <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>-->
    <router-view />
  </div>
</template>

<script>
import { NavBar } from "vant";
import { Locale } from 'vant';
import enUS from 'vant/lib/locale/lang/en-US';
export default {
  components: {
    [NavBar.name]: NavBar
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let lang = navigator.language || navigator.userLanguage;
      lang = lang.substr(0, 2); //截取lang前2位字符
      if (lang == "zh") {
        this.$i18n.locale = "zh-CN";
      } else {
        this.$i18n.locale = "en-US";
        Locale.use('en-US', enUS);
      }

      let token = window.JSBridge.invoke("getToken", {}, function(res) {
        window.localStorage.setItem("token", res.token);
      });
      window.localStorage.setItem("token", token);
    },
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>

<style>
</style>
