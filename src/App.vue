<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { SET_TOKEN, SET_LANG } from "@/store/types";
// import { Locale } from "vant";
// import enUS from "vant/lib/locale/lang/en-US";
// import { instance } from "@/utils/axios";
export default {
  created() {
    this.init();
  },
  methods: {
    ...mapMutations([SET_TOKEN, SET_LANG]),
    init() {
      console.log(window.JSBridge.invoke)
      this.SET_TOKEN({
        token: "aaa"
      });
      this.SET_LANG({
        lang: "zh"
      });
      // window.JSBridge.invoke("getLanguage", {}, res => {
      //   if (res == "zh-cn") {
      //     this.$i18n.locale = "zh-CN";
      //     this.SET_TOKEN({
      //       lang: res
      //     })
      //   } else {
      //     this.$i18n.locale = "en-US";
      //     Locale.use("en-US", enUS);
      //     instance.defaults.headers["Content-Language"] = "en-us";
      //   }
      // });

      // window.JSBridge.invoke("getToken", {}, function(res) {
      //   window.localStorage.setItem("token", res.token);
      //   instance.defaults.headers["Authorization"] = res.token;
      // });
    }
  }
};
</script>

<style>
body {
  font-size: 16px;
  margin: 0;
  background-color: #f2f2f2;
  -webkit-font-smoothing: antialiased;
}
img {
  display: block;
}
.container {
  min-height: 100vh;
}
</style>
