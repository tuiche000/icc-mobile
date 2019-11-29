<template>
  <div class="container">
    <div class="choose">
      <div class="bg-white text-black margin">
        <div class="padding">
          <div class="padding-top text-center text-df">交易所名称</div>
          <div class="text-lg top-100">选择交易所代表你允许其获取以下权限</div>
          <div class="margin-top-sm padding-bottom">
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">使用西岸社区账户登录</van-checkbox>
            </div>
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">读取西岸社区账户相关</van-checkbox>
            </div>
            <div class="margin-top-sm">
              <van-checkbox v-model="checked" shape="square">读取西岸社区资金相关信息</van-checkbox>
            </div>
          </div>
          <div class="margin-top-xl flex align-center flex-direction" >
            <van-button round type="info" size="large">确定</van-button>
            <div class="margin-top-sm">更多交易所正在洽谈</div>
          </div>
        </div>
      </div>
      <Down />
    </div>
  </div>
</template>

<script>
import { Checkbox, Button } from "vant";
import Down from "./down";

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    Down
  },

  data() {
    return {
      checked: true
    };
  },

  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },

    onClickCart() {
      this.$router.push("cart");
    },

    sorry() {
      Toast("暂无后续逻辑~");
    }
  }
};
</script>

<style lang="less">
.top-100 {
  margin-top: 100/2px;
}
</style>
