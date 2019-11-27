<template>
  <div class="notice-detail">
    <div class="title">{{dataDetail.title}}</div>
    <div class="message">
      <span class="author">{{dataDetail.author}}</span>
      <span class="time">{{dataDetail.releaseTime}}</span>
    </div>
    <div class="content" v-html="dataDetail.context"></div>
  </div>
</template>

<script>
import { get } from "./services/index";
import { Tag } from "vant";
export default {
  components: {
    [Tag.name]: Tag
  },
  data() {
    return {
      dataDetail: {},
      detailId: ""
    };
  },
  created() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#fff;");
    this.detailId = this.$route.query.id;
    this.getDetail();
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  },
  methods: {
    getDetail() {
      get({ detailId: this.detailId }).then(res => {
        if (res.code === "200") {
          this.dataDetail = res.data;
            window.JSBridge.invoke("NavTopRight", {
              name: "分享",
              share: {
                title: res.data.title, // 分享标题
                image: "", // 分享缩略图
                url: window.location.href, // 分享链接
                description: res.data.digest // 分享简介
              }
            });
        }
      });
    }
  }
};
</script>

<style type="text/less" lang="less" scoped>
.notice-detail {
  background: #ffffff;
  padding: 30px 15px;
  .title {
    font-size: 20px;
    color: #333333;
    font-weight: bold;
    padding-bottom: 30px;
  }
  .message {
    font-size: 12px;
    .author {
      color: #2688d0;
      padding-right: 16px;
    }
    .time {
      color: #999999;
    }
    padding-bottom: 30px;
  }
  .content {
    color: #333333;
  }
}
</style>
