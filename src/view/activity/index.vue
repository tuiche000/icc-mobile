<template>
    <div class="activity">
        <div class="bg"></div>
        <div class="content">
            <a v-if="lang==='zh'" class="last-notice last-zh" href="http://m.icctoro.com/shequdasai/index.html">上期获奖公告</a>
            <a v-if="lang!=='zh'" class="last-notice" href="http://m.icctoro.com/shequdasai/index.html">Previous award announcement</a>
            <div class="header-info">
                <img v-if="lang==='zh'" class="top" src="./images/top-zh.png">
                <img v-if="lang!=='zh'" class="top" src="./images/top-cn.png">
                <div class="time-box">
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
                    <img v-if="lang==='zh'" class="countdown" src="./images/countdown.png" alt="">
                    <img v-if="lang!=='zh'" class="countdown" src="./images/countdown-cn.png" alt="">
                </div>
            </div>
            <div v-if="JSON.stringify(inviteData) != '{}'" class="invite-info" :class="{active: animate}">
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
                <img v-if="lang==='zh'" class="line" src="./images/rank.png" alt="">
                <img v-if="lang!=='zh'" class="line" src="./images/rank-cn.png" alt="">
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
                    <span v-if="lang==='zh'" class="desc">已邀请</span>
                    <span v-if="lang!=='zh'" class="desc">Invites</span>
                    <span v-if="lang==='zh'" class="people">{{item.inviteNum}}人</span>
                    <span v-if="lang!=='zh'" class="people">{{item.inviteNum}}</span>
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
                    <span v-if="lang==='zh'" class="desc">已邀请</span>
                    <span v-if="lang!=='zh'" class="desc">Invites</span>
                    <span v-if="lang==='zh'" class="people">{{item.inviteNum}}人</span>
                    <span v-if="lang!=='zh'" class="people">{{item.inviteNum}}</span>
                </div>
            </div>
            <div class="img-plan">
                <img v-if="lang==='zh'" class="line" src="./images/daily-reward.png" alt="">
                <img v-if="lang!=='zh'" class="line" src="./images/daily-reward-cn.png" alt="">
                <van-tabs class="van-tab" swipeable>
                    <van-tab class="van-item" v-for="(item, index) in rankRewardList" :key="index" :title="item.inviteDate|fmtDate('MM.dd')">
                        <span v-if="item.headImg===''"><img class="head" src="./images/default-head.png" alt=""></span>
                        <span v-else><img class="head" :src="item.headImg" alt=""></span>
                        <span>{{item.nickName}}</span>
                        <span v-if="lang==='zh'">邀请人数</span>
                        <span v-if="lang!=='zh'">Invites</span>
                        <span>{{item.inviteNum}} </span>
                    </van-tab>
                </van-tabs>
            </div>
            <div class="img-plan">
                <img v-if="lang==='zh'" class="line" src="./images/award.png" alt="">
                <img v-if="lang!=='zh'" class="line" src="./images/award-cn.png" alt="">
            </div>
            <div class="img-plan">
                <img v-if="lang==='zh'" class="line" src="./images/rules.png" alt="">
                <img v-if="lang!=='zh'" class="line" src="./images/rules-cn.png" alt="">
            </div>
            <div v-if="lang==='zh'" class="explain"> *本次活动最终解释权归西岸社区所有</div>
            <div v-if="lang!=='zh'" class="explain"> West Coast Strategy reserves all the right for the final explanation of this event</div>
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
                dateCount: 0,
                inviteInfo: [],
                rankDayList: [],
                rankAllList: [],
                rankRewardList: [],
                showDay: true,
                animate: false,//最新邀请轮播动画
                lang:''
            };
        },
        created() {
            this.queryData()
            this.getInviteInfo()
            this.getRankReward()
            this.changeDay()
            let lang = navigator.language || navigator.userLanguage;
            lang = lang.substr(0, 2); //截取lang前2位字符
            if (lang == "zh") {
                this.lang = "zh";
            } else {
                this.lang = "en";
            }
        },
        methods: {
            queryData() {
                ACTIVITY_TIME({}).then(res => {
                    if (res.code === '200') {
                        this.dateCount = parseInt(res.data.time)*1000
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
            }
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
            .last-notice{
                position: absolute;
                width: 220px;
                height: 24px;
                line-height: 24px;
                top: 20px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 0px 20px 20px 0px;
                color: #fff;
                padding-left: 5px;
                font-size: 14px;
                z-index: 3;
            }
            .last-zh {
                width: 100px;
            }
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
                        width: 110px;
                        display: block;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                    }
                    .number {
                        position: absolute;
                        left: 12px;
                    }
                    .desc {
                        position: absolute;
                        left: 200px;
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
