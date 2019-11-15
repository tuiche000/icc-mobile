<template>
    <div class="activity">
        <div class="bg"></div>
        <div class="content">
           <img src="./images/top.png">
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
    .activity {
        .bg {
            background-image: url("./images/bg.png");
            width: 100vw;
            height: 100vh;
        }
        .content {

        }
    }
</style>
