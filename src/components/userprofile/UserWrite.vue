<template>
  <form>
    <p>编辑帖子</p>
    <el-input
        v-model="textarea"
        maxlength="30"
        placeholder="输入内容"
        show-word-limit
        type="textarea"
        class="textarea"
    />
    <el-button class="button" @click="post_a_post" type="primary" size="small">发帖</el-button>
  </form>
</template>

<script>
import {ref} from 'vue';
import $ from 'jquery';
import {useStore} from 'vuex';

export default {
  name: "UserWrite",
  emits: ['post_a_post'],
  setup(props, context) {
    let textarea = ref('');
    const store = useStore();
    const post_a_post = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        type: "POST",
        data: {
          content: textarea.value,
        },
        headers: {
          'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit('post_a_post', textarea.value);
            textarea.value = "";
          }
        }
      });
    };
    return {
      textarea,
      post_a_post,
    }
  }
}
</script>

<style scoped>
.textarea {
  margin-bottom: 10px;
}

.button {
  margin-bottom: 10px;
}
</style>