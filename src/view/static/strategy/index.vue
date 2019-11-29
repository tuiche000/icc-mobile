<template>
  <div>
    <div v-if="lang == 'zh-cn'">
      <img src="./images/1.png" alt />
      <img src="./images/2.png" alt />
      <img src="./images/3.png" alt />
    </div>
    <div v-else>
      <img src="./images/1_en.png" alt />
      <img src="./images/2_en.png" alt />
      <img src="./images/3_en.png" alt />
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
