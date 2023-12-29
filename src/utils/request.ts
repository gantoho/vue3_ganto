import axios from 'axios'
import type { axiosRequestConfig } from '@/types'

export default (config: axiosRequestConfig) => {
  const instance = axios.create({
    baseURL: 'https://java.cevno.cn',
    timeout: 5000,
  })

  instance.interceptors.request.use(conf => {
    // console.log("axios request", conf)
    return conf
  }, err => {
    console.error("axios request error", err)
  })
  
  instance.interceptors.response.use(res => {
    // console.log("axios response", res.data)
    return res.data
  }, err => {
    console.error("axios response error", err)
  })

  return instance(config)
}

export const getServerImgHttp = (config: axiosRequestConfig) => {
  const instance = axios.create({
    baseURL: "https://yun.cevno.cn",
    timeout: 5000
  })

  instance.interceptors.request.use(conf => {
    return conf
  }, err => {
    console.error("axios request error", err)
  })
  
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.error("axios response error", err)
  })

  return instance(config)
}
