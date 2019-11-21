<template>
  <div class="container">
    <!-- <van-panel title="标题" desc="描述信息" status="状态">
      <div>内容</div>
      <div slot="footer">
        <van-button size="small">按钮</van-button>
        <van-button size="small" type="danger">按钮</van-button>
      </div>
    </van-panel>-->
    <div class="tibi">
      <div class="header padding flex justify-between">
        <div>交易所名称</div>
        <div>币币账户</div>
      </div>
      <div class="footer bg-white">
        <div class="padding flex justify-between">
          <div>提币数量</div>
          <div>免手续费</div>
        </div>
        <div class="padding flex justify-center">
          <div>BTC</div>
          <van-field readonly clickable :value="value" @touchstart.native.stop="show = true" />
        </div>
        <van-divider />
        <div class="padding">
          <div>
            可提: 0.00  <span class="margin-left-xs">全部</span>
          </div>
          <div class="padding"><van-button round type="info" size="large">确定</van-button></div>
        </div>
      </div>
    </div>

    <van-number-keyboard v-model="value" :show="show" :maxlength="20" @blur="show = false" />


    <div class="bot text-dark">提币成功后，预计将在24H内到账</div>
  </div>
</template>

<script>
import { Panel, Divider, NumberKeyboard, Field, Button } from "vant";

export default {
  components: {
    [Panel.name]: Panel,
    [Divider.name]: Divider,
    [NumberKeyboard.name]: NumberKeyboard,
    [Field.name]: Field,
    [Button.name]: Button,
  },

  data() {
    return {
      checked: true,
      show: false,
      value: ""
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

<style lang="less" scope>
.tibi {
  border-radius: 10px;
  padding: 15px;
}
.header {
  background: rgba(251, 251, 251, 1);
  border-radius: 10px 10px 0px 0px;
}
.footer {
}
.bot {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 25px;
}
</style>
