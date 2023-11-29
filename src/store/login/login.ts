import { defineStore } from 'pinia'
import { accountLoginRequest } from '../../service/login/login.ts'

// @ts-ignore
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  async loginAccountAction(account: any) {
    const loginResult = await accountLoginRequest(account)
    this.id = loginResult.data.id
    this.token = loginResult.data.token
    this.name = loginResult.data.name
  }
})
export default useLoginStore
