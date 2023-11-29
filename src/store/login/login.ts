import { defineStore } from 'pinia'
import { accountLoginRequest } from '../../service/login/login.ts'
import { IAccount } from '../../types'
import { localCache } from '../../utils/cache.ts'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localStorage.getItem('token') ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name

      localCache.setCache('token', this.token)
    }
  }
})
export default useLoginStore
