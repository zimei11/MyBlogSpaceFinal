<template>
  <ContentBaseVue>
    <el-alert title="用户动态" type="success" description="你可以查看用户动态" center/>
    <el-col>
      <el-row :gutter="10">
       <el-col :sm="8" :md="6">
         <UserInfoVue :user="user"/>
         <br>
         编辑动态
       </el-col>
        <el-col :sm="16" :md="18">
          发布动态
        </el-col>
      </el-row>
    </el-col>
  </ContentBaseVue>
</template>

<script setup>
import ContentBaseVue from '@/components/ContentBase.vue';
import {useRoute} from "vue-router"
import UserInfoVue from '@/components/userprofile/UserInfo';
import {useStore} from "vuex";
import $ from 'jquery';
import {reactive} from "vue";

const route = useRoute();
const userId = route.query.userId;

const store=useStore();
const user=reactive({});

//用户信息
$.ajax({
  url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",
  type:"GET",
  headers:{
    'Authorization':"Bearer "+store.state.user.access,
  },
  data: {
    user_id: userId,
  },
  success(resp){
    user.id=resp.id;
    user.username=resp.username;
    user.photo=resp.photo;
    user.followerCount=resp.followerCount;
    user.is_followed=resp.is_followed;
  }
});
</script>