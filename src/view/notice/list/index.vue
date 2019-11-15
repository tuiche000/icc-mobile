<template>
    <div class="notice-list">
        <div class="content" v-for="item in dataList" :key="item.title" :value="item.title">
            <router-link :to="{path:'/notice/detail', query:{id: item.id}}">
                <div class="title">{{item.title}}</div>
                <div class="detail">{{item.context}}</div>
                <div class="issue">
                    <div class="operate"><img class="issue-img" src="./images/shape.png" alt=""><span>运营中心</span></div>
                    <div><img class="issue-img" src="./images/time.png" alt="">{{item.releaseTime}}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { query } from './services/index'
    import {
        Tag,
    } from 'vant';
    export default {
        components: {
            [Tag.name]: Tag,
        },

        data() {
            return {
                dataList: []
            };
        },
        created() {
            this.queryData()
        },
        methods: {
            queryData() {
                query({ pageNo:1, pageSize: 10 }).then(res => {
                    if (res.data.code === '200') {
                        this.dataList = res.data.data.rows
                    }
                })
            }
        }
    };
</script>

<style type="text/less" lang="less" scoped>
    .notice-list {
        .content {
            &:nth-child(1){
                margin-top: 30px;
            }
            margin: 0 15px 10px;
            background: #ffffff;
            padding: 16px;
            border-radius: 10px;
            cursor: pointer;
            .title{
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(51,51,51,1);
            }
            .detail {
                font-size:14px;
                font-family:PingFang SC;
                font-weight:500;
                color:rgba(51,51,51,1);
                padding: 10px 0;
            }
            .issue {
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                height: 30px;
                line-height: 30px;
                color: #333333;
                .operate{
                    width: 90px;
                    text-align: center;
                    background: #F5F6F8;
                    border-radius: 3px;
                }
                .issue-img {
                    vertical-align: middle;
                    margin-right: 10px;
                    margin-top: -3px;
                }
            }
        }

    }
</style>
