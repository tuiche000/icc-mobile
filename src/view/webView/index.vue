<template>
  <div>
    <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar>-->
    <router-view />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar
  },
  created() {
    let token = window.JSBridge.invoke("getToken", {}, function(res) {
      window.localStorage.setItem("token", res.token);
    });
    console.log(token);
    window.localStorage.setItem("token", token);
    // let token = window.JSBridge.invoke("getToken");
    // console.log(token);
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>

<style>
</style>
