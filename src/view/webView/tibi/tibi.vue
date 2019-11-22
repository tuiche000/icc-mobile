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
        <div class="flex align-center">
          <van-image
            round
            width="32px"
            height="32px"
            fit="cover"
            :src="require('./images/logo.png')"
          />
          <span class="margin-left-xs">交易所名称</span>
        </div>
        <div class="flex align-center">差价账户</div>
      </div>
      <div class="footer bg-white">
        <div class="padding flex justify-between">
          <div>提币数量</div>
          <div>免手续费</div>
        </div>
        <div class="padding flex justify-between">
          <div class="flex align-center">BTC</div>
          <div class="margin-left flex-sub">
            <van-field
              input-align="right"
              readonly
              clickable
              :value="value"
              @touchstart.native.stop="show = true"
            />
          </div>
        </div>
        <van-divider />
        <div class="padding">
          <div>
            可提:
            <span>{{data.canTransferAmount}}</span>
            <span class="margin-left-xs all" @click="value = data.canTransferAmount">全部</span>
          </div>
          <div class="padding">
            <van-button round type="info" size="large" @click="confirm">确定</van-button>
          </div>
        </div>
      </div>
    </div>

    <van-number-keyboard
      v-model="value"
      :show="show"
      extra-key="."
      :maxlength="20"
      @blur="show = false"
    />

    <div class="bot text-dark">提币成功后，预计将在24H内到账</div>

    <van-dialog
      v-model="showDialog"
      title="输入支付密码"
      show-cancel-button
      @confirm="submit"
      @cancel="cancel"
      @closed="passWord = ''"
    >
      <div class="padding">
        <van-password-input
          :value="passWord"
          info="密码为 6 位数字"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
      </div>
    </van-dialog>

    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
      :z-index="3000"
    />
  </div>
</template>

<script>
import {
  Panel,
  Divider,
  NumberKeyboard,
  Field,
  Button,
  Dialog,
  PasswordInput,
  Image,
  Notify
} from "vant";
import {
  withdraw_data,
  withdraw_transfer,
  account_accountTransferUUID
} from "./services/index";

export default {
  components: {
    [Panel.name]: Panel,
    [Image.name]: Image,
    [Divider.name]: Divider,
    [NumberKeyboard.name]: NumberKeyboard,
    [PasswordInput.name]: PasswordInput,
    [Field.name]: Field,
    [Button.name]: Button,
    [Dialog.Component.name]: Dialog.Component
  },

  data() {
    return {
      checked: true,
      show: false,
      showDialog: false,
      showKeyboard: false,
      value: "",
      passWord: "",
      data: {},
      accountTransferUUID: ""
    };
  },

  created() {
    this.GET_withdraw_data({
      currency: "BTC"
    });
    this.GET_account_accountTransferUUID();
  },

  methods: {
    async GET_withdraw_data(json) {
      let res = await withdraw_data(json);
      this.data = res.data;
    },
    async POST_withdraw_transfer(json) {
      return await withdraw_transfer(json);
    },
    async GET_account_accountTransferUUID() {
      let res = await account_accountTransferUUID();
      this.accountTransferUUID = res.data;
    },
    onInput(key) {
      this.passWord = (this.passWord + key).slice(0, 6);
    },
    onDelete() {
      this.passWord = this.passWord.slice(0, this.passWord.length - 1);
    },
    confirm() {
      if (this.value == "") {
        Notify({ type: "warning", message: "请输入提币金额" });
        return;
      }
      if (parseFloat(this.value) > parseFloat(this.data.canTransferAmount)) {
        Notify({ type: "warning", message: "超出可提额度" });
        return;
      }

      this.showDialog = true;
      this.showKeyboard = true;
    },
    cancel() {
      this.showDialog = false;
      this.passWord = "";
    },
    async submit() {
      if (this.value.length < 6) {
        Notify({ type: "warning", message: "请输入六位密码" });
        return;
      }
      let { accountTransferUUID, value, passWord } = this;
      const res = await this.POST_withdraw_transfer({
        toAccountType: "1003",
        currency: "BTC",
        amount: parseFloat(value),
        requestId: accountTransferUUID,
        passWord: passWord
      });
      if (res.code === "200") {
        this.$router.push({
          path: "/webView/tibi/success",
          query: {
            data: res.data
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scope>
.tibi {
  border-radius: 10px;
  padding: 15px;
}
.all {
  color: #2688d0;
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
