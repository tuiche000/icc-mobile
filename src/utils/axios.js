import axios from 'axios'

let instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: {
    "Source-Site": 'h5.xasq',
    "Content-Language": 'zh-cn',
  }
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    return response.data;
  }
  return Promise.reject(response);
}, function (error) {
  // 对响应错误做点什么
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