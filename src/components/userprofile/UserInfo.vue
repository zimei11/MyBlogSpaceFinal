<template>
  <el-card class="box-card">
    <div class="text item">
      <el-row :gutter="10">
        <el-col :span="6">
          <img :src=user.photo alt="用户头像">
        </el-col>
        <el-col :span="18">
          <div class="username">
            {{ user.username }}
          </div>
          <div class="fans">
            {{ user.followerCount }}
          </div>
          <el-button @click="follow" v-if="!user.is_followed&&!is_me" type="primary" size="small">
            +关注
          </el-button>
           <el-button @click="unfollow" v-if="user.is_followed&&!is_me" type="primary" plain size="small">
            取消关注
          </el-button>

        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>

import {useStore} from "vuex";
import $ from 'jquery';
import {computed} from "vue";

export default {
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const store = useStore();
    const follow = () => {
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit('follow');
          }
        }
      });
    };

    const unfollow=()=>{
      $.ajax({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        type: "POST",
        data: {
          target_id: props.user.id,
        },
        headers: {
          'Authorization': "Bearer " + store.state.user.access,
        },
        success(resp) {
          if (resp.result === "success") {
            context.emit('unfollow');
            // console.log(is_me);
          }
        }
      });
    };
    let is_me=computed(()=>store.state.user.id===props.user.id);
    return{
      follow,
      unfollow,
      is_me,
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;
  color: gray;
}

button {
  padding: 2px 4px;
  font-size: 12px;
}
</style>