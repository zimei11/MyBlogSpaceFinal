<template>
  <el-card class="box-card">
    <div class="text item">
      <el-row :gutter="10">
        <el-col :span="6">
          <img :src=user.photo alt="用户头像">
        </el-col>
        <el-col :span="18">
          <div class="username">
            {{ user.username}}
          </div>
          <div class="fans">
            {{user.followerCount}}
          </div>
          <el-button type="primary" size="small">
            +关注
          </el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>

export default {
  name:"UserInfo",
  props:{
    user:{
      type:Object,
      required:true,
    },
  },
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