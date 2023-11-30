<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '../../utils/cache.ts'
import { LOGIN_TOKEN } from '../../global/constants.ts'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('./login')
}
</script>
<style lang="less" scoped>
.main {
  color: red;
}
</style>
