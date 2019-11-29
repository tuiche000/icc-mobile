<template>
  <div class="kuang">
    <div class="box shadow white" @click="gotoDetail(1)">
      <div class="content">
        <div class="title flex justify-between">
          <div>姜还是老的辣</div>
          <div class="text-red">挖矿失败</div>
        </div>
        <div class="center flex justify-center align-end">
          <div class="number flex">126002</div>
          <div>聪BTC</div>
        </div>
        <div class="footer flex justify-center align-center margin-bottom-xs">
          <div class="flex align-center">
            <span>人数不足, 挖矿失败!</span>
          </div>
        </div>
      </div>
    </div>

    <div class="box shadow white" @click="gotoDetail(2)">
      <div class="content">
        <div class="title flex justify-between">
          <div>姜还是老的辣</div>
          <div class="text-blue">挖矿结束</div>
        </div>
        <div class="center flex justify-center align-end">
          <div>挖矿收益</div>
          <div class="number flex">126002</div>
          <div>聪BTC</div>
        </div>
        <div class="footer flex justify-center align-center margin-bottom-xs">
          <div class="flex align-center">
            <span class="num-black">挖矿时长</span>
            <span  class="num-black">12:46:45</span>
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
    color: #F5222D;
    margin-right: 5px;
    font-weight: bold;
  }
  .num-black{
    color: #333333;
  }

  .clock {
    width: 29px;
    height: 29px;
  }
}
</style>