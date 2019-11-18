<template>
  <div class="goods">
    <van-button type="info" @click="getUserInfo">获取用户token</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
require('../../utils/bridge')

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
    console.log(window.JSBridge)
  },
  methods: {
    getUserInfo() {
      alert(JSON.stringify(window.nativeBridge));
    }
  }
};
</script>