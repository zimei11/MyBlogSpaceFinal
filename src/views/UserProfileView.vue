<template>
  <ContentBaseVue>
    <el-alert title="用户动态" type="success" description="你可以查看用户动态" center/>
    <el-col>
      <el-row :gutter="10">
        <el-col :sm="8" :md="6">
          <UserInfoVue :user="user" @follow="follow" @unfollow="unfollow"/>
          <UserWriteVue v-if="is_me" @post_a_post="post_a_post"/>
        </el-col>
        <el-col :sm="16" :md="18">
          <UserPostVue :posts="posts" :user="user" @delete_a_post="delete_a_post"/>
        </el-col>
      </el-row>
    </el-col>
  </ContentBaseVue>
</template>

<script setup>
import ContentBaseVue from '@/components/ContentBase.vue';
import {useRoute} from "vue-router";
import UserInfoVue from '@/components/userprofile/UserInfo';
import {useStore} from "vuex";
import $ from 'jquery';
import {computed, reactive} from "vue";
import UserPostVue from "@/components/userprofile/UserPost";
import UserWriteVue from "@/components/userprofile/UserWrite";

const route = useRoute();
const userId = parseInt(route.query.userId);

const store = useStore();
const user = reactive({});
//用户帖子
const posts=reactive({});

//用户信息
$.ajax({
  url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
  type: "GET",
  headers: {
    'Authorization': "Bearer " + store.state.user.access,
  },
  data: {
    user_id: userId,
  },
  success(resp) {
    user.id = resp.id;
    user.username = resp.username;
    user.photo = resp.photo;
    user.followerCount = resp.followerCount;
    user.is_followed = resp.is_followed;
    // console.log(typeof route.query.userId+typeof store.state.user.id);
  }
});

const follow = () => {
  if (user.is_followed) return;
    user.is_followed=true;
    user.followerCount++;
};

const unfollow=()=>{
  if(!user.is_followed) return;
  user.is_followed=false;
  user.followerCount--;
};

//删除帖子
const delete_a_post=post_id=>{
  posts.posts = posts.posts.filter(post => post.id !== post_id);
  posts.count = posts.posts.length;
}

//发布帖子
const is_me = computed(() => userId === store.state.user.id);

$.ajax({
  url: "https://app165.acapp.acwing.com.cn/myspace/post/",
  type: "GET",
  data: {
    user_id: userId,
  },
  headers: {
    'Authorization': "Bearer " + store.state.user.access,
  },
  success(resp) {
    posts.count = resp.length;
    posts.posts = resp;
  }
});

const post_a_post = content => {
  posts.count ++ ;
  posts.posts.unshift({
    id: posts.count,
    userId: userId,
    content: content,
  })
};
</script>