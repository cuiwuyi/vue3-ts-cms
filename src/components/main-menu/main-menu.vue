<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="../../assets/img/logo.svg" alt="" />
      <h2 class="title">后台管理系统</h2>
    </div>
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        text-color="#b7bdc3"
        background-color="#001529"
      >
        <el-sub-menu>
          <template #title>
            <el-icon><monitor></monitor></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>核心技术</el-menu-item>
        </el-sub-menu>

        <el-sub-menu>
          <template #title>
            <el-icon><setting></setting></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>核心技术</el-menu-item>
        </el-sub-menu>

        <el-sub-menu>
          <template #title>
            <el-icon><shopping-bag></shopping-bag></el-icon>
            <span>产商品信息</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>核心技术</el-menu-item>
        </el-sub-menu>

        <el-sub-menu>
          <template #title>
            <el-icon><chat-dot-round></chat-dot-round></el-icon>
            <span>随便聊聊</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>核心技术</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChatDotRound,
  Location,
  Management,
  Monitor,
  Setting,
  Shop,
  ShoppingBag
} from '@element-plus/icons-vue'

import useLoginStore from '../../store/login.ts'

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus
console.log(userMenus)
</script>

<style scoped lang="less">
.main-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.img {
  height: 100%;
  margin: 0 10px;
}

.title {
  font-size: 16px;
  font-weight: 700;
  color: white;
  white-space: nowrap;
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px;
    background-color: black;
  }

  .el-menu-item:hover {
    color: whitesmoke;
  }

  .el-menu-item .is-active {
    background-color: darkblue;
  }
}
</style>
