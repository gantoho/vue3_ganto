import request from "@/utils/request";
import type { axiosRequestConfig } from './type'

enum API {
  GET_LIST = '/user/order',
  POST_ADD_LIST_ITEM = '/addorder'
}

// 获取列表数据接口
export const getListData = (config: axiosRequestConfig) => request({...config, url: API.GET_LIST})
