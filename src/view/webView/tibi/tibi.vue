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
          <span class="margin-left-xs">ICNCDE</span>
        </div>
        <div class="flex align-center">{{$t('webView.tibi_accountName')}}</div>
      </div>
      <div class="footer bg-white">
        <div class="padding flex justify-between">
          <div>{{$t('webView.tibi_number')}}</div>
          <div>{{$t('webView.tibi_free')}}</div>
        </div>
        <div class="padding flex justify-between">
          <div class="flex align-center">BTC</div>
          <div class="margin-left flex-sub">
            <van-field
              input-align="right"
              readonly
              clickable
              :value="value"
              :error-message="error_message"
              error-message-align="right"
              maxlength="8"
              @touchstart.native.stop="show = true"
            />
          </div>
        </div>
        <van-divider />
        <div class="padding">
          <div>
            {{$t('webView.tibi_have')}}:
            <span>{{data.canTransferAmount}}</span>
            <span
              class="margin-left-xs all"
              @click="value = data.canTransferAmount"
            >{{$t('webView.tibi_all')}}</span>
          </div>
          <div class="padding">
            <van-button round type="info" size="large" @click="confirm">{{$t('confirm')}}</van-button>
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

    <div class="bot text-dark">{{$t('webView.tibi_tips')}}</div>

    <van-dialog
      v-model="showDialog"
      :title="$t('webView.tibi_dialogtitle')"
      show-cancel-button
      @confirm="submit"
      @cancel="cancel"
      @closed="passWord = ''"
    >
      <div class="padding">
        <van-password-input :value="passWord" :focused="showKeyboard" @focus="showKeyboard = true" />
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

  computed: {
    error_message: function() {
      let patt = /^[0-9]+(.[0-9]{0,8})?$/;
      return patt.test(this.value) || this.value == ""
        ? ""
        : this.$t("webView.tibi_verify.length");
    }
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
        Notify({
          type: "warning",
          message: this.$t("webView.tibi_verify.amount")
        });
        return;
      }
      if (parseFloat(this.value) > parseFloat(this.data.canTransferAmount)) {
        Notify({
          type: "warning",
          message: this.$t("webView.tibi_verify.outride")
        });
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
      let { accountTransferUUID, value, passWord } = this;
      let crypto = require("crypto");

      if (passWord.length < 6) {
        Notify({
          type: "warning",
          message: this.$t("webView.tibi_verify.password")
        });
        return;
      }
      function cryptPwd(password) {
        var md5 = crypto.createHash("md5");
        return md5.update(password).digest("hex");
      }
      let cryptedPassword = cryptPwd(passWord);
      console.log(cryptedPassword);

      const res = await this.POST_withdraw_transfer({
        toAccountType: "1003",
        currency: "BTC",
        amount: parseFloat(value),
        requestId: accountTransferUUID,
        passWord: cryptedPassword
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
