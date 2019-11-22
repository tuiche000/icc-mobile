<template>
  <div class="container">
    <div class="success">
      <div class="bg-white text-black margin">
        <div class="padding text-center">
          <div class="yuan">
            <van-icon name="success" color="#fff" size="40" />
          </div>
          <div class="margin-top-sm padding-bottom">
            <div class="margin-top-sm">提币成功</div>
            <div class="margin-top-sm">
              <span>{{data}}</span>
              <span>BTC</span>
            </div>
            <div class="margin-top-sm">
              <span>ICNCDE</span>
              <span class="margin-left">账户名称</span>
            </div>
          </div>
          <div class="margin-top-xl flex align-center flex-direction">
            <van-button round type="info" :disabled="haveApp=='0'" size="large" @click="toApp">前往查看</van-button>
          </div>
        </div>
      </div>
      <Down />
    </div>
  </div>
</template>

<script>
import { Checkbox, Button, Icon } from "vant";
import Down from "./down";

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Icon.name]: Icon,
    Down
  },

  data() {
    return {
      data: "",
      haveApp: '0',
    };
  },

  created() {
    this.data = this.$route.query.data;
    this.haveApp = window.JSBridge.invoke("haveApp", {}, res => {
      this.havaApp = res;
    });
  },

  methods: {
    toApp() {
      window.JSBridge.invoke("toApp", {
        url: "http://m.icncde.com/#/down"
      });
    }
  }
};
</script>

<style lang="less">
.top-100 {
  margin-top: 100/2px;
}
.yuan {
  margin: 0 auto;
  width: 75px;
  height: 75px;
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0591cc;
}
</style>
