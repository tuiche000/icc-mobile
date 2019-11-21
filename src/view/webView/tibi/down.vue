<template>
  <div class="margin">
    <div class="down">
      <div class="bg-white">
        <div>
          <div class="padding flex justify-between align-center">
            <div class="text-df">xxx交易所</div>
            <div>
              <van-tag type="primary" round size="large"> 下载 </van-tag>
            </div>
          </div>
          <van-divider />
          <div class="padding">ICNCDE（全球资产衍生品交易平台），连通数字资产与传统金融资产的全球化全品类投资平台，让您能够便捷、安全的进行在线投资。不管您身在何处，都能通过ICNCDE用数字资产买到全球知名上市公司股票、国家金融指数、商品期货以及数字资产合约交易等产品</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox, Button, Divider, Tag } from "vant";

export default {
  components: {
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Tag.name]: Tag,
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
      // Toast("暂无后续逻辑~");
    }
  }
};
</script>

<style lang="less" scope>

</style>
