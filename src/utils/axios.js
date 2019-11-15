import axios from 'axios'

let instance = axios.create({
  baseURL: '/',
  timeout: 1000,
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