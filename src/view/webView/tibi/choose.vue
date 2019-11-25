<template>
  <div class="container">
    <div class="choose">
      <div class="bg-white text-black margin">
        <div class="padding">
          <div class="padding-top text-center text-df">
            <div>
              <van-image
                width="60px"
                height="60px"
                fit="cover"
                :src="require('./images/logo.png')"
              />
            </div>ICNCDE
          </div>
          <div class="text-lg top-100">{{$t('webView.choose_title')}}</div>
          <div class="margin-top-sm padding-bottom">
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">{{$t('webView.choose_agre.agre1')}}</van-checkbox>
            </div>
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">{{$t('webView.choose_agre.agre2')}}</van-checkbox>
            </div>
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">{{$t('webView.choose_agre.agre3')}}</van-checkbox>
            </div>
          </div>
          <div class="margin-top-xl flex align-center flex-direction">
            <van-button round type="info" size="large" @click="confirm" :disabled="!checked">{{$t('confirm')}}</van-button>
            <div class="margin-top-sm">{{$t('webView.choose_more')}}</div>
          </div>
        </div>
      </div>
      <Down />
    </div>
  </div>
</template>

<script>
import { Checkbox, Button, Image } from "vant";
import Down from "./down";

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Image.name]: Image,
    Down
  },

  data() {
    return {
      checked: true
    };
  },

  methods: {
    confirm() {
      this.$router.push({
        path: "/webView/tibi/tibi"
      });
    }
  }
};
</script>

<style lang="less">
.top-100 {
  margin-top: 100/2px;
}
</style>
