import axios from 'axios'

let instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  proxy: {
    host: '127.0.0.1',
    port: 9000
  }
});

export const _GET = (url, data) => {
  instance.request({
    url: url,
    method: 'get',
    params: data
  })
}

export const _POST = (url, data) => {
  instance.request({
    url: url,
    method: 'post',
    data: data
  })
}