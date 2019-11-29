<template>
  <div>
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
    // this.init();
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
    },
  }
};
</script>

<style>
</style>
