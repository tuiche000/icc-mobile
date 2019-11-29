<template>
  <div class="header">
    <div class="box flex justify-center">
      <div class="content">
        <div class="title flex justify-center">
          <div class>挖矿收益</div>
        </div>
        <div class="title-a flex justify-center align-end">
          <div class="number flex">123456</div>
          <div>聪</div>
        </div>
        <div class="title-b flex justify-center">
          <div>挖矿时长</div>
          <div>12:46:36</div>
        </div>
      </div>
      <div class="btn flex justify-between align-center">
        <div class="btn-5 flex">
          <div class="btn-five" v-for="i in 5" :key="i">{{index}}</div>
        </div>
        <div class="section-right flex align-center">
          <div class="flex align-center margin-right-xs">
            <div class="dian">...</div>
          </div>
          <div class="num-people">256</div>
          <div class="join">人参与</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style type="text/less" lang="less" scoped>
.box {
  background: url(../images/bgb.png) no-repeat;
  width: 100%;
  height: 330px;
  background-size: cover;
  background-position: center center;
  position: relative;
  display: flex;
  .title {
    color: #333333;
    font-size: 20px;
    padding: 15px;
    box-sizing: border-box;
  }
  .title-a {
    color: #333333;
    font-size: 20px;
  }

  .title-b {
    padding: 20px 0;
    line-height: 100%;
  }
  .number {
    font-size: 48px;
    font-weight: bold;
    line-height: 100%;
    padding-right: 3px;
    box-sizing: border-box;
  }

  .btn {
    position: absolute;
    left: 2.9rem;
    bottom: -1.9rem;
    height: 60px;
    line-height: 60px;
    width: 80%;
    background: #ffffff;
    border-radius: 30px;
    border: none;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .btn-5 {
    margin-left: 10px;
  }
  .btn-five {
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
  }
  .dian {
    font-size: 20px;
    height: 3.5rem;
    letter-spacing: 2px;
  }

  .num-people {
    color: red;
    letter-spacing: 1px;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(244, 14, 26, 1);
    line-height: 24px;
  }
  .join {
    color: #333333;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    line-height: 20px;
  }
}
</style>