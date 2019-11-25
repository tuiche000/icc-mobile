<template>
  <div class="margin">
    <div class="down">
      <div class="bg-white">
        <div>
          <div class="padding-lr padding-top flex justify-between align-center">
            <div class="text-df flex align-center">
              <van-image
                width="40px"
                height="40px"
                round
                fit="cover"
                :src="require('./images/logo.png')"
              />
              <span class="margin-left-xs">ICNCDE</span>
            </div>
            <div>
              <van-tag type="primary" round size="large" @click="toApp">{{$t('webView.down_down')}}</van-tag>
            </div>
          </div>
          <van-divider />
          <div class="padding-lr padding-bottom">{{$t('webView.down_desc')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, Button, Divider, Tag, Image } from "vant";

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Image.name]: Image,
    [Divider.name]: Divider,
    [Tag.name]: Tag
  },

  data() {
    return {
      checked: true,
      havaApp: false
    };
  },

  created() {
    console.log(this.$i18n);
    // console.log(this.$i18n.messages.)
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

<style lang="less" scope>
</style>
