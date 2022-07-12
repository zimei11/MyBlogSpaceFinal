<template>
  <el-card class="box-card" shadow="hover" v-for="post in posts.posts" :key="post.id">
    {{ post.content }}

    <el-button class="button" size="small" type="danger" v-if="is_me"
               @click="delete_a_post(post.id)">删除
    </el-button>

  </el-card>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import $ from 'jquery';

export default {
  name: "UserPost",
  props: {
    posts: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const store = useStore();
    let is_me = computed(() => store.state.user.id === props.user.id);

    const delete_a_post = post_id => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "DELETE",
        data: {
          post_id,
        },
        headers: {
          'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit('delete_a_post', post_id);
          }
        }
      })
    }
    return {
      is_me,
      delete_a_post,
    }
  }
}
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.button {
  float: right;
}
</style>