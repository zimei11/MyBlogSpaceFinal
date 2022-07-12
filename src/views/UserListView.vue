<template>
  <ContentBaseVue>
    <el-alert title="用户列表" type="success" description="你可以查看用户列表" center/>
    <el-card class="box-card" shadow="hover" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
      <div class="text item">

        <el-row :gutter="10">
          <el-col :span="3">
            <img class="img-fluid" :src="user.photo" alt="用户头像">
          </el-col>
          <el-col :span="21">
            <div class="username">{{ user.username }}</div>
            <div class="follower-count">{{ user.followerCount }}</div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </ContentBaseVue>
</template>

<script setup>
import ContentBaseVue from '@/components/ContentBase.vue';
import $ from "jquery";
import {ref} from "vue";
import router from '@/router/index';
import {useStore} from 'vuex';

const store = useStore();

// 用户列表
let users = ref([]);

$.ajax({
  url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
  type: "get",
  success(resp) {
    users.value = resp;
  }
});


const open_user_profile = userId => {
  if (store.state.user.is_login) {
    // console.log("userId:"+userId);
    router.push({
      name: "userprofile",
      query: {
        userId
      }
    })
  } else {
    router.push({
      name: "login"
    });
  }
}

</script>

<style scoped>
img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}

.el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>