import axios from 'axios'
import { Toast } from 'vant';

console.log(localStorage.getItem('token'))
let instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    "Source-Site": 'h5.xasq',
    "Content-Language": 'zh-cn',
    "Authorization": localStorage.getItem('token')
    // "Authorization": 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjQ2OTk3NjY3NTY5MTcyNDgiLCJhdWQiOiJudWxsIiwiaXNzIjoiOTY0Njk5NzY2NzU2OTE3MjQ4IiwiZXhwIjoyMTc5MTI1MDYyLCJpYXQiOjE1NzQzMjUwNjIsImp0aSI6IjhmZTljYjIxLWM4MDEtNGU0NC1hM2Q0LTU3YTY2ZDAxYmYxMSJ9.lT5rMC7-7zMrIwd109JzaFsuyWtP9DaZQE9AnleEsHtnDgCa86Gxc01ssN6acF92XiwOf3myPKFMADjwuHlIDg'
  }
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    if (response.data.code !== '200') {
      Toast.fail(response.data.msg);
    }
    return response.data;
  }
  return Promise.reject(response);
}, function (error) {
  // 对响应错误做点什么
  Toast.fail('请求错误');
  return Promise.reject(error);
});

export const _GET = (url, data) => {
  return instance.request({
    url: url,
    method: 'get',
    params: data
  })
}

export const _POST = (url, data) => {
  return instance.request({
    url: url,
    method: 'post',
    data: data
  })
}