import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'
import { localCache } from '../utils/cache.ts'
import { LOGIN_TOKEN } from '../global/constants.ts'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      if (config.headers && token) {
        config.headers.Authorization = 'Bearer' + token
      }
      return config
    }
  }
})

export default hyRequest
