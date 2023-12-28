import type { axiosRequestConfig } from '@/types'

export { axiosRequestConfig }

export interface requestConfig {
  url: string
  method: string
  data?: any
  params?: any
  headers?: any
}
