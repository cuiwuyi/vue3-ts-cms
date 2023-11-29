import hyRequest from '../index.ts'

export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: '/login',
    date: account
  })
}
