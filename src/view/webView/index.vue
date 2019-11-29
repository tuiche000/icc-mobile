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
import { Locale } from "vant";
import enUS from "vant/lib/locale/lang/en-US";
import { instance } from "@/utils/axios";
export default {
  components: {
    [NavBar.name]: NavBar
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      window.JSBridge.invoke("getLanguage", {}, res => {
        if (res == "zh-cn") {
          this.$i18n.locale = "zh-CN";
        } else {
          this.$i18n.locale = "en-US";
          Locale.use("en-US", enUS);
          instance.defaults.headers["Content-Language"] = "en-us";
        }
      });

      window.JSBridge.invoke("getToken", {}, function(res) {
        window.localStorage.setItem("token", res.token);
        instance.defaults.headers["Authorization"] = res.token;
      });
    }
  }
};
</script>

<style>
</style>
