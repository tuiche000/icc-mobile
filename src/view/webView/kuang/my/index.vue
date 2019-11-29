<template>
  <div class="kuang">
    <div class="box white" @click="gotoDetail(1)">
      <div class="content">
        <div class="title flex justify-between">
          <div>姜还是老的辣</div>
          <div class="text-red">未开始</div>
        </div>
        <div class="center flex justify-center align-end">
          <div class="number flex">126002</div>
          <div>聪BTC</div>
        </div>
        <div class="footer flex justify-between align-center padding-bottom">
          <div class="flex align-center">
            <img class="clock" src="./images/clock.png" alt />
            <span class="margin-left-xs">12:32:56:213</span>
          </div>
          <div>还需邀请12位用户</div>
        </div>
        <div class="button">
          <button>邀请好友挖矿</button>
        </div>
      </div>
    </div>

    <div class="box shadow white"  @click="gotoDetail(2)">
      <div class="content">
        <div class="title flex justify-between">
          <div>姜还是老的辣</div>
          <div class="text-blue">挖矿中...</div>
        </div>
        <div class="center flex justify-center align-end">
          <div class="padd">预计收益</div>
          <div class="number flex">126002</div>
          <div>聪BTC</div>
        </div>
        <div class="footer flex justify-center align-center padding-bottom">
          <div class="flex align-center">
            <span>剩余时长</span>
            <span class="margin-left-xs">12:32:56:213</span>
          </div>
        </div>
        <div class="button">
          <button>邀请好友挖矿</button>
        </div>
      </div>
    </div>

    <div class="box shadow white"  @click="gotoDetail(3)">
      <div class="content">
        <div class="title flex justify-between">
          <div>姜还是老的辣</div>
          <div class="text-blue">结算中...</div>
        </div>
        <div class="center flex justify-center align-end">
          <div class="padd">预计收益</div>
          <div class="number flex">126002</div>
          <div>聪BTC</div>
        </div>
        <div class="footer flex justify-center align-center padding-bottom-xs">
          <div class="flex align-center">
            <span class="font-color">挖矿已结束</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.JSBridge.invoke(
      "NavTopRight",
      {
        name: "记录"
      },
      () => {
        this.$router.push({
          path: "/webView/kuang/history"
        });
      }
    );
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        path: "/webView/kuang/detail",
        query: {
          id
        }
      });
    }
  }
};
</script>

<style type="text/less" lang="less" scoped>
.kuang {
  padding: 15px;
}

.box {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  & {
    &:first-child {
      margin-top: 0;
    }
    margin-top: 50px;
  }
  .content {
    background: url("../images/bg.png");
    background-size: cover;
  }
  .title {
    .text-red {
      color: #f5222d;
      font-weight: bold;
    }
    .text-blue {
      color: #321d94;
      font-weight: bold;
    }
  }

  .center {
    padding: 20px 45px;
    box-sizing: border-box;
    .padd {
      padding-right: 1px;
    }
    .number {
      color: #321d94;
      font-size: 46px;
      font-weight: bold;
      line-height: 100%;
      padding-right: 5px;
    }
  }
}

.footer {
  span {
    color: #333333;
  }

  .font-color{
    color: #321D94;
    font-weight: bold;
  }

  .clock {
    width: 29px;
    height: 29px;
  }
}

.button {
  position: absolute;
  left: 0;
  bottom: -45px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  // height: 50px;
  button {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #158eea;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    color: #fff;
    letter-spacing: 1px;
    box-sizing: border-box;
  }
}
</style>