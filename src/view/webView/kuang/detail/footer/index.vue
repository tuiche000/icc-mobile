<template>
  <div class="footer">
    <div class="box-footer">
      <div class="title flex flex-direction align-center">
        <div class="proceeds">恭喜你在本次挖矿收益中获得</div>
        <div class="noun">第*名</div>
        <div class="title-c">晒一晒</div>
        <div class="title-d">
          <div>邀请奖励</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style type="text/less" lang="less" scoped>
.box-footer {
  margin: 60px 0 20px 0;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  border: none;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  .proceeds {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    line-height: 22px;
    padding-top: 30px;
  }
  .noun {
    font-family: PingFang SC;
    font-weight: 800;
    color: rgba(253, 119, 1, 1);
    line-height: 22px;
    font-size: 28px;
    margin: 20px 0;
  }
  .title-c {
    background: rgba(21, 142, 234, 1);
    border-radius: 40px;
    color: #fff;
    text-align: center;
    width: 90%;
    height: 50px;
    line-height: 50px;
    margin: 20px 0;
    font-size: 20px;
  }
  .title-d {
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 22px;
    margin: 15px 0;
  }
}
</style>