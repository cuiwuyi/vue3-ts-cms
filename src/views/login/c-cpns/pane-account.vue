<template>
  <div class="pane-account">
    <el-form
      :model="account"
      :rules="accountRules"
      label-width="60px"
      size="large"
      status-icon
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
import { reactive } from 'vue'
import { FormRules } from 'element-plus'

const account = reactive({
  name: '',
  password: ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '*必须输入账号信息', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3-16}$/,
      message: '*必须是3-16位长度',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '*必须输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3-16}$/,
      message: '*必须是3-16位长度',
      trigger: 'blur'
    }
  ]
}

function loginAction() {
  console.log(
    'pane-account login action function exection',
    account.name,
    account.password
  )
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
