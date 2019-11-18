<template>
  <div class="goods">
    <van-button type="info" @click="getUserInfo">获取用户token</van-button>
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
    console.log(window.JSBridge);
  },
  methods: {
    getUserInfo() {
      // var str = window.jsObj
      // alert(JSON.stringify(str));
      console.log(window);
      window.jsObj.HtmlcallJava();
      // window.alert(111)
      // window.nativeBridge.postMessage('getUserInfo');
      // window.webkit.messageHandlers.nativeBridge.postMessage('getUserInfo');
      // window.postBridgeMessage('getUserInfo')
      // window.JSBridge.invoke('getUserInfo')
    }
  }
};
</script>