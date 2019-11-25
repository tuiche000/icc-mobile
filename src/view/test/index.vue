<template>
  <div class="goods">
    <van-button type="info" @click="getUserInfo">获取用户token</van-button>
    <br />
    <van-field v-model="value" placeholder="请输入页面code" />
    <van-button type="info" @click="gotoNative">跳转native页面</van-button>
  </div>
</template>

<script>
import { Button, Field } from "vant";
require("../../utils/bridge");

export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },

  data() {
    return {
      value: "",
      userInfo: {}
    };
  },
  created() {
    window.JSBridge.invoke("getLanguage", {}, function(res) {
      alert(res);
    });
  },
  methods: {
    getUserInfo() {
      window.JSBridge.invoke("getToken", function(res) {
        alert(res.token);
      });
    },
    gotoNative() {
      window.JSBridge.invoke("gotoNative", {
        page: this.value,
        params: {
          text: "1111"
        }
      });
    }
  }
};
</script>