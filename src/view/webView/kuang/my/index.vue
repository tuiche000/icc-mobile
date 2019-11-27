<template>
  <div>我的矿</div>
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
  }
};
</script>

<style>
</style>