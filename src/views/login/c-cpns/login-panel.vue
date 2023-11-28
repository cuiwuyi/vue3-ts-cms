<template>
  <div class="login-panel">
    <h1 class="title">鸿源后台管理系统</h1>

    <div class="tabs">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登陆" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登陆</span>
            </div>
          </template>
          <PaneAccount ref="accountRef"></PaneAccount>
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <PanePhone></PanePhone>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="controls">
      <el-checkbox v-model="isRememberPassword" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Iphone, PhoneFilled, UserFilled } from '@element-plus/icons-vue'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'

const activeName = ref('account')
const isRememberPassword = ref(false)
const accountRef = ref<InstanceType<typeof PaneAccount>>()

function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  } else {
    console.log('Phone Login')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
