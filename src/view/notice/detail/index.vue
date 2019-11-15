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
    import { get } from './services/index'
    import {
        Tag,
    } from 'vant';
    export default {
        components: {
            [Tag.name]: Tag,
        },
        data() {
            return {
                dataDetail: {
                    "title": "这是测试",
                    "context": "wsdds四大护法交换数据恢复速度就方便登上飞机开始分解和低俗发货,据竹海热线网，近日，杭州趣链科技有限公司成功中标光大银行" +
                        "区块链BaaS云平台服务采购项目在此项目中，趣链科技将为光大银行提供区块链相关技术支aaS云平台服务采购项目在此项目中，趣链科技将为光大银行" +
                        "区块链BaaS云平台服务采购项目在此项目中，趣链科技将为光大银行提供区块链相关技术支aaS云平台服务采购项目在此项目中，趣链科技将为光大银行" +
                        "提供区块链相关技术支aaS云平台服务采购项目在此项目中，趣链科技将为光大银行提供区块链相关技术支持，帮助光大银行完善区块链BaaS平台建设。",
                    "digest": "测试的东西",
                    "releaseTime": "2019-11-13 14:44:00",
                    "author": "掌声"
                },
                detailId: ''
            };
        },
        created() {
            document.querySelector('body').setAttribute('style', 'background-color:#fff;');
            this.detailId = this.$route.query.id
            this.getDetail()
        },
        beforeDestroy() {
            document.querySelector('body').removeAttribute('style')
        },
        methods: {
            getDetail() {
                get({detailId: this.detailId}).then(res =>{
                    if (res.data.code === '200') {
                        this.dataDetail = res.data.data
                    }
                })
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
            font-weight:bold;
            padding-bottom: 30px;
        }
        .message {
            font-size: 12px;
            .author {
                color: #2688D0;
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
