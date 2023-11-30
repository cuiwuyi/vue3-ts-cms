import hyRequest from '../index.ts'
import { IAccount } from '../../types'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
