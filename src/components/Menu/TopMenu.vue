<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" 
  mode="horizontal" :ellipsis="false"
    @select="handleSelect">
    <el-menu-item index="0">ZIMEI</el-menu-item>

    <el-sub-menu index="1" class="hidden-md-and-up">
      <template #title>功能</template>
      <el-menu-item index="1-1">游戏</el-menu-item>
      <el-menu-item index="1-2">排行榜</el-menu-item>
      <el-menu-item index="1-3">回放</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="2" class="hidden-sm-and-down">游戏</el-menu-item>
    <el-menu-item index="3" class="hidden-sm-and-down">排行榜</el-menu-item>
    <el-menu-item index="4" class="hidden-sm-and-down">回放</el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="5">登录</el-menu-item>
    <el-menu-item index="6">注册</el-menu-item>
  </el-menu>
</template>

<script  setup>
import { ref } from 'vue'
import 'element-plus/theme-chalk/display.css'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>