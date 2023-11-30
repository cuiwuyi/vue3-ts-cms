<template>
  <div class="pane-account">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import { accountLoginRequest } from '../../../service/login/login.ts'
import useLoginStore from '../../../store/login/login.ts'
import type { IAccount } from '../../../types'
import { localCache } from '../../../utils/cache.ts'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

const account = reactive<IAccount>({
  name: localCache.getCache(CACHE_NAME) ?? '',
  password: localCache.getCache(CACHE_PASSWORD) ?? ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '*必须输入账号信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,16}$/,
      message: '*必须是3-16位长度',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '*必须输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '*必须是3-16位长度',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
function loginAction(isRememberPassword: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      const name = account.name
      const password = account.password
      loginStore.loginAccountAction({ name, password }).then((res) => {
        if (isRememberPassword) {
          localCache.setCache(CACHE_NAME, name)
          localCache.setCache(CACHE_PASSWORD, password)
        } else {
          localCache.removeCache(CACHE_NAME)
          localCache.removeCache(CACHE_PASSWORD)
        }
      })
    } else {
      ElMessage.error('Oops,请输入正确账号信息或密码')
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
