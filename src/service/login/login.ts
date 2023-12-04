import hyRequest from '../index.ts'
import { IAccount } from '../../types'
import { localCache } from '../../utils/cache.ts'
import { LOGIN_TOKEN } from '../../global/constants.ts'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/user/${id}`,
    headers: {
      Authorization: 'bearer' + localCache.getCache(LOGIN_TOKEN)
    }
  })
}

export function getUserMenuByRoleId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
