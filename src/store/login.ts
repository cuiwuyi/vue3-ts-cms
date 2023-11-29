import { defineStore } from 'pinia'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  loginAccountAction(account: any) {}
})
export default useLoginStore
