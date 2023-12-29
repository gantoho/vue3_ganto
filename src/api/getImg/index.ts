import { getServerImgHttp } from "@/utils/request";
import type { axiosRequestConfig } from './type'

enum API {
  GET_IMG  =  '/bgimg',
}

// 获取列表数据接口
export const getImg = (config: axiosRequestConfig) => getServerImgHttp({ ...config, url: API.GET_IMG })
