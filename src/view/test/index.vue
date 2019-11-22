<template>
  <div class="goods">
    <van-button type="info" @click="getUserInfo">获取用户token</van-button>
    <br />
    <van-button type="info" @click="getUserInfo2">Android获取用户token</van-button>
    <br />
    <van-button type="info" @click="getUserInfo3">点击native 调取h5方法</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
require("../../utils/bridge");

export default {
  components: {
    [Button.name]: Button
  },

  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    // console.log(window.JSBridge);
  },
  methods: {
    getUserInfo() {
      window.JSBridge.invoke("getToken", function (res) {
        alert(res.token)
      });
      // alert(token)
    },
    getUserInfo2() {
      let token = window.JSBridge.invoke("getToken");
      console.log(token);
    },
    getUserInfo3() {
      // window.JSBridge.receiveMessage('asdasdsd')
      window.JSBridge.invoke("aaa");
    }
  }
};
</script>