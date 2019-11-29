<template>
  <div>
    <div v-if="lang == 'zh-cn'">
      <img src="./images/zh.png" alt />
    </div>
    <div v-else>
      <img src="./images/en.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      lang: 'en-us'
    };
  },
  computed() {},
  watch: {},
  created() {
    window.JSBridge.invoke("getLanguage", {}, res => {
      if (res == "zh-cn") {
        this.lang = "zh-cn";
      }
    });
  },
  mounted() {},
  activated() {},
  methods: {}
};
</script>
<style lang='less' scoped>
img {
  display: block;
  width: 100%;
}
</style>
