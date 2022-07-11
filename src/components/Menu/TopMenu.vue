<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router
           @select="handleSelect">
    <el-menu-item index="1" route="/">ZIMEI</el-menu-item>

    <el-sub-menu index="2" class="hidden-md-and-up">
      <template #title>菜单</template>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/userlist/">用户列表</el-menu-item>
      <el-menu-item index="/userprofile/" :route="{ name: 'userprofile', query: { userId: $store.state.user.id } }"
                    v-if="$store.state.user.is_login">用户动态
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="/" class="hidden-sm-and-down">首页</el-menu-item>
    <el-menu-item index="/userlist/" class="hidden-sm-and-down">用户列表</el-menu-item>
    <el-menu-item index="/userprofile/" class="hidden-sm-and-down"
                  v-if="$store.state.user.is_login"
                  :route="{ name: 'userprofile', query: { userId: $store.state.user.id } }">用户动态
    </el-menu-item>

    <div class="flex-grow"></div>

    <el-menu-item index="/login/" v-if="!$store.state.user.is_login">登录</el-menu-item>
    <el-menu-item index="/regist/" v-if="!$store.state.user.is_login">注册</el-menu-item>

    <el-menu-item index="3" :route="{ name: 'userprofile', query: { userId: $store.state.user.id } }"
                  v-if="$store.state.user.is_login">{{ $store.state.user.username }}
    </el-menu-item>
    <el-menu-item index="4" route="/" @click="logout" v-if="$store.state.user.is_login">退出</el-menu-item>

    <el-button circle @click="toggleDark()" style="margin-top:10px;margin-left:10px;margin-right:10px">
      <el-icon>
        <Moon/>
      </el-icon>
    </el-button>
  </el-menu>
</template>

<script setup>
import 'element-plus/theme-chalk/display.css'
import {useRoute} from "vue-router"
import {toggleDark} from '@/composables/dark.js'
import {Moon} from '@element-plus/icons-vue'
import {useStore} from "vuex"

const route = useRoute();
const activeIndex = route.path;
// console.log("route.path:"+route.path) //打印route.path


const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
}

const store = useStore();
const logout = () => {
  store.commit("logout");
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>