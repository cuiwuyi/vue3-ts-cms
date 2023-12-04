<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-haeder></main-haeder>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '../../utils/cache.ts'
import { LOGIN_TOKEN } from '../../global/constants.ts'
import { useRouter } from 'vue-router'
import MainMenu from '../../components/main-menu/main-menu.vue'
import MainHaeder from '../../components/main-header/main-header.vue'

const router = useRouter()
function handleExitClick() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('./login')
}
</script>
<style lang="less" scoped>
.main {
  color: red;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    background-color: darkgrey;
  }

  .el-header {
    background-color: gray;
  }

  .el-main {
    background-color: skyblue;
  }
}
</style>
