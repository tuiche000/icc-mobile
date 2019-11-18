<template>
    <div class="activity">
        <div class="bg"></div>
        <div class="content">
            <div class="header-info">
                <img class="top" src="./images/top.png">
                <div class="time-box">
                    <!--<span class="d1">1{{d1}}</span>
                    <span class="d2">1{{d2}}</span>
                    <span class="h1">2{{h1}}</span>
                    <span class="h2">3{{h2}}</span>
                    <span class="m1">4{{m1}}</span>
                    <span class="m2">5{{m2}}</span>
                    <span class="s1">3{{s1}}</span>
                    <span class="s2">5{{s2}}</span>-->
                    <van-count-down :time="dateCount">
                        <template v-slot="timeData">

                            <span class="d1">{{ timeData.days|fmtData(1)}}</span>
                            <span class="d2">{{ timeData.days|fmtData(2)}}</span>
                            <span class="h1">{{ timeData.hours|fmtData(1)}}</span>
                            <span class="h2">{{ timeData.hours|fmtData(2)}}</span>
                            <span class="m1">{{ timeData.minutes|fmtData(1)}}</span>
                            <span class="m2">{{ timeData.minutes|fmtData(2)}}</span>
                            <span class="s1">{{ timeData.seconds|fmtData(1)}}</span>
                            <span class="s2">{{ timeData.seconds|fmtData(2)}}</span>
                        </template>
                    </van-count-down>
                    <img class="countdown" src="./images/countdown.png" alt="">
                </div>
            </div>
            <div class="invite-info" :class="{active: animate}">
                <span v-if="inviteData.headImg===''"><img class="head" src="./images/default-head.png" alt=""></span>
                <span v-else><img class="head" :src="inviteData.headImg" alt=""></span>
                <span>{{inviteData.nickName}}</span>
                <span class="invite">邀请了</span>
                <span v-if="inviteData.inviteHeadImg===''"><img class="head" src="./images/default-head.png" alt=""></span>
                <span v-else><img class="head" :src="inviteData.inviteHeadImg" alt=""></span>
                <span>{{inviteData.inviteNickName}}</span>
                <span>10:09</span>
            </div>
            <div class="img-plan">
                <img class="line" src="./images/rank.png" alt="">
                <div class="day-rank" @click="changeDay"></div>
                <div class="all-rank" @click="changeAll"></div>
            </div>
            <div v-if="showDay" class="rank-content">
                <div class="item" v-for="(item, index) in rankDayList" :key="index">
                    <span v-if="item.rank===1"><img class='rank' src='./images/first.png'></span>
                    <span v-else-if="item.rank===2"><img class='rank' src='./images/second.png'></span>
                    <span v-else-if="item.rank===3"><img class='rank' src='./images/third.png'></span>
                    <span v-else class='number'>{{item.rank}}</span>
                    <span v-if="item.headImg===''"><img class="rank-head" src="./images/default-head.png" alt=""></span>
                    <span v-if="item.headImg"><img class="rank-head" :src="item.headImg" alt=""></span>
                    <span class="nickName">{{item.nickName}}</span>
                    <span class="desc">已邀请</span>
                    <span class="people">{{item.inviteNum}}人</span>
                </div>
            </div>
            <div v-if="!showDay" class="rank-content">
                <div class="item" v-for="(item, index) in rankAllList" :key="index">
                    <span v-if="item.rank===1"><img class='rank' src='./images/first.png'></span>
                    <span v-else-if="item.rank===2"><img class='rank' src='./images/second.png'></span>
                    <span v-else-if="item.rank===3"><img class='rank' src='./images/third.png'></span>
                    <span v-else class='number'>{{item.rank}}</span>
                    <span v-if="item.headImg===''"><img class="rank-head" src="./images/default-head.png" alt=""></span>
                    <span  v-if="item.headImg"><img class="rank-head" :src="item.headImg" alt=""></span>
                    <span class="nickName">{{item.nickName}}</span>
                    <span class="desc">已邀请</span>
                    <span class="people">{{item.inviteNum}}人</span>
                </div>
                <!--<van-list v-model="loading" :finished="finished" @load="onLoad" :offset="10">
                    <div class="list-item">
                        <van-cell class="item" v-for="(item, index) in rankAllList" :key="index">
                            <span v-if="item.rank===1"><img class='rank' src='./images/first.png'></span>
                            <span v-else-if="item.rank===2"><img class='rank' src='./images/second.png'></span>
                            <span v-else-if="item.rank===3"><img class='rank' src='./images/third.png'></span>
                            <span v-else class='number'>{{item.rank}}</span>
                            <span v-if="item.headImg===''"><img class="rank-head" src="./images/default-head.png" alt=""></span>
                            <span  v-if="item.headImg"><img class="rank-head" :src="item.headImg" alt=""></span>
                            <span class="nickName">{{item.nickName}}</span>
                            <span class="desc">已邀请</span>
                            <span class="people">{{item.inviteNum}}人</span>
                        </van-cell>
                    </div>
                </van-list>-->
            </div>
            <div class="img-plan">
                <img class="line" src="./images/daily-reward.png" alt="">
                <van-tabs class="van-tab" swipeable @click="changeTab">
                    <van-tab class="van-item" v-for="(item, index) in rankRewardList" :key="index" :title="item.inviteDate|fmtDate('MM.dd')">
                        <span v-if="item.headImg===''"><img class="head" src="./images/default-head.png" alt=""></span>
                        <span v-else><img class="head" :src="item.headImg" alt=""></span>
                        <span>{{item.nickName}}</span>
                        <span>邀请人数</span>
                        <span>{{item.inviteNum}} </span>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="img-plan">
                <img class="line" src="./images/award.png" alt="">
            </div>
            <div class="img-plan">
                <img class="line" src="./images/rules.png" alt="">
            </div>
            <div class="explain"> *本次活动最终解释权归西岸社区所有</div>
        </div>
    </div>
</template>

<script>
    import {RANK_DAILY, RANK_COUNT, RANK_MY, RANK_NEW, RANK_REWARD, ACTIVITY_TIME} from './services/index'
    import {
        Tag, Tabs, Tab, List, Cell, CountDown
    } from 'vant';
    export default {
        components: {
            [Tag.name]: Tag,
            [Tabs.name]: Tabs,
            [Tab.name]: Tab,
            [List.name]: List,
            [Cell.name]: Cell,
            [CountDown.name]: CountDown,
        },

        data() {
            return {
                dataList: [],
                inviteData: {},
                d1: '',
                d2: '',
                h1: '',
                h2: '',
                m1: '',
                m2: '',
                s1: '',
                s2: '',
                dateCount: 0,
                inviteInfo: [],
                rankDayList: [],
                rankAllList: [],
                rankRewardList: [],
                showDay: true,
                animate: false,//最新邀请轮播动画
                // list: [],
                // loading: false,   //是否处于加载状态
                // finished: false,  //是否已加载完所有数据
                // isLoading: false,   //是否处于下拉刷新状态
            };
        },
        created() {
            this.queryData()
            this.getInviteInfo()
            this.getRankReward()
            this.changeDay()
        },
        methods: {
            queryData() {
                ACTIVITY_TIME({}).then(res => {
                    if (res.code === '200') {
                        this.dateCount = parseInt(res.data.time)*1000
                        // this.dateCount = 1234*1000
                        // this.formatSeconds(1234)
                    }
                })
            },
            changeDay() {
                RANK_DAILY().then(res =>{
                    if (res.code === '200') {
                        this.showDay = true
                        this.rankDayList = res.data.rows
                    }
                })
            },
            changeAll() {
                RANK_COUNT().then(res =>{
                    if (res.code === '200') {
                        this.showDay = false
                        this.rankAllList = res.data.rows
                    }
                })
            },
            changeTab(val) {
                console.log(val)
            },
            formatSeconds(value) {
                const timer = () => {
                    setInterval(function(){
                        if(value> 0) {
                            value =  value-1
                            let theTime = parseInt(value);// 需要转换的时间秒
                            let theTime1 = 0;// 分
                            let theTime2 = 0;// 小时
                            let theTime3 = 0;// 天
                            if (theTime > 60) {
                                theTime1 = parseInt(theTime / 60);
                                theTime = parseInt(theTime % 60);
                                if (theTime1 > 60) {
                                    theTime2 = parseInt(theTime1 / 60);
                                    theTime1 = parseInt(theTime1 % 60);
                                    if (theTime2 > 24) {
                                        //大于24小时
                                        theTime3 = parseInt(theTime2 / 24);
                                        theTime2 = parseInt(theTime2 % 24);
                                    }
                                }
                            }
                            theTime = theTime > 9 ? theTime.toString() : '0' + theTime
                            theTime1 = theTime1 > 9 ? theTime1.toString() : '0' + theTime1
                            theTime2 = theTime2 > 9 ? theTime2.toString() : '0' + theTime2
                            theTime3 = theTime3 > 9 ? theTime3.toString() : '0' + theTime3
                            this.d1 = theTime3.substr(0,1)
                            this.d2 = theTime3.substr(1,1)
                            this.h1 = theTime2.substr(0,1)
                            this.h2 = theTime2.substr(1,1)
                            this.m1 = theTime1.substr(0,1)
                            this.m2 = theTime1.substr(1,1)
                            this.s1 = theTime.substr(0,1)
                            this.s2 = theTime.substr(1,1)
                            timer()
                        }else {
                            value = 0
                        }
                    },1000)
                }
                timer()

                // let result = '';
                // if (theTime > 0) {
                //     result = "" + parseInt(theTime) + "秒";
                // }
                // if (theTime1 > 0) {
                //     result = "" + parseInt(theTime1) + "分" + result;
                // }
                // if (theTime2 > 0) {
                //     result = "" + parseInt(theTime2) + "小时" + result;
                // }
                // if (theTime3 > 0) {
                //     result = "" + parseInt(theTime3) + "天" + result;
                // }
                // console.log(result)
                // return result;
            },
            getInviteInfo() {
                this.animate = true;
                RANK_NEW().then(res =>{
                    if (res.code === '200') {
                        this.inviteInfo = res.data
                    }
                })
                setInterval(() => {
                    this.inviteInfo.push(this.inviteInfo[0]);
                    this.inviteInfo.shift();
                    if (this.inviteInfo[0]) {
                        this.inviteData = this.inviteInfo[0]
                    }
                    this.animate = false;
                }, 5000)
            },
            getRankReward() {
                RANK_REWARD().then(res =>{
                    this.rankRewardList = res.data
                })
            },
            /*onLoad() {      //上拉加载
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        this.rankRewardList.push(this.rankRewardList.length + 1);
                    }
                    this.loading = false;
                    if (this.rankRewardList.length >= 60) {
                        this.finished = true;
                    }
                }, 500);
            },*/
        }
    }
    ;
</script>

<style type="text/less" lang="less" scoped>
    .activity {
        color: #E1D7FF;

        .line {
            width: 100%;
        }

        .bg {
            background-image: url("./images/bg.png");
            width: 100vw;
            height: 100vh;
            position: fixed;
        }

        .content {
            position: relative;
            .header-info {
                position: relative;
                .top {
                    width: 100vw;
                }
                .time-box {
                    .countdown {
                        position: absolute;
                        width: 100vw;
                        top: 60%;
                        left: 0;
                    }
                    .d1, .d2, .h1, .h2, .m1, .m2, .s1, .s2 {
                        position: absolute;
                        top: 72%;
                        font-size: 34px;
                        color: #DD3CA1;
                    }

                    .d1 {
                        left: 10%;
                    }

                    .d2 {
                        left: 19%;
                    }

                    .h1 {
                        left: 32%;
                    }

                    .h2 {
                        left: 41%;
                    }

                    .m1 {
                        left: 54%;
                    }

                    .m2 {
                        left: 63%;
                    }

                    .s1 {
                        left: 76%;
                    }

                    .s2 {
                        left: 85%;
                    }
                }
            }

            .head {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }

            .invite-info {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                justify-content: space-around;
                height: 30px;
                line-height: 30px;
                margin-top: -30px;

                .invite {
                    color: #DD3CA1;
                }
            }
            .active {
                transition: all 5s;
                margin-top: -34px;
            }
            .rank-content {
                border: 2px solid #fff;
                box-shadow: 3px 4px 5px 0px rgba(169, 87, 201, 0.75);
                margin: 10px;
                .item {
                    position: relative;
                    display: flex;
                    justify-content: space-between;
                    height: 30px;
                    line-height: 30px;
                    padding: 10px 0;

                    .people {
                        position: absolute;
                        right: 10px;
                    }
                    .nickName {
                        position: absolute;
                        left: 90px;
                    }
                    .number {
                        position: absolute;
                        left: 12px;
                    }
                    .desc {
                        position: absolute;
                        left: 230px;
                    }
                    .rank {
                        position: absolute;
                        width: 20px;
                        left: 10px;
                    }
                    .rank-head {
                        position: absolute;
                        width: 30px;
                        border-radius: 50%;
                        left:45px
                    }
                }
            }

            .van-tab {
                padding: 10px;
                position: absolute;
                top: 27%;
                z-index: 1;
                width: 95%;

                .van-item {
                    margin-top: 10px;
                    display: flex;
                    justify-content: space-around;
                    height: 30px;
                    line-height: 30px;
                }
            }

            .img-plan {
                width: 100vw;
                margin-top: 20px;
                position: relative;

                .line {
                    width: 100%;
                }

                .day-rank {
                    position: absolute;
                    top: 50%;
                    left: 8%;
                    width: 40%;
                    height: 35%;
                }

                .all-rank {
                    position: absolute;
                    top: 50%;
                    left: 52%;
                    width: 40%;
                    height: 35%;
                }
            }

            .explain {
                text-align: center;
                color: #E1D7FF;
                font-size: 14px;
                margin: 20px;
            }
        }
    }
</style>
