<template>
  <div>
    <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    ></van-nav-bar> -->
    <router-view />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>

<style>
</style>
