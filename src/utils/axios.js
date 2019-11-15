import axios from 'axios'

let instance = axios.create({
  baseURL: '/',
  // baseURL: 'http://dev.mobile.icctoro.com:5003',
  timeout: 1000,
  // proxy: {
  //   host: 'http://dev.mobile.icctoro.com',
  //   port: 5003
  // },
  headers: {
    "Source-Site": 'h5.xasq',
    "Content-Language": 'zh-cn',
  }
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