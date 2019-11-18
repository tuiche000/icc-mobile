import { _GET } from '../../../utils/axios'
/*
* 活动：日排行榜
*/
export const RANK_DAILY = (params) => {
    return _GET('/api/user/h5/invite/rank/daily', params)
}
/*
* 活动：总排行榜
*/
export const RANK_COUNT = (params) => {
    return _GET('/api/user/h5/invite/rank/count2', params)
}
/*
* 活动：我的排行 params:{date}
*/
export const RANK_MY = (params) => {
    return _GET('/api/user/h5/invite/rank/my', params)
}
/*
* 活动：最新邀请数据
*/
export const RANK_NEW = (params) => {
    return _GET('/api/user/h5/invite/rank/new', params)
}
/*
* 活动：每日第一名
*/
export const RANK_REWARD = (params) => {
    return _GET('/api/user/h5/invite/rank/reward', params)
}
/*
* 活动：剩余时间
*/
export const ACTIVITY_TIME = (params) => {
    return _GET('/api/user/h5/invite/activity/time', params)
}