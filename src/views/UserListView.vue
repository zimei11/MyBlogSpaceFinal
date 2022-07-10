<template>
    <ContentBaseVue>
        <el-alert title="用户列表" type="success" description="这里包含了所有的用户" center />
        <!-- 表单 -->
        <el-card shadow="always" style="margin-top:20px">
            <el-table :data="userTableData" stripe style="width: 100%">

                <el-table-column prop="photo" label="头像" width="180">
                    <!-- 图片的显示 -->
                    <template #default="scope">
                        <img :src="scope.row.photo" min-width="45" height="45" />
                    </template>
                </el-table-column>
                <el-table-column prop="username" label="用户名" width="180" />
                <el-table-column prop="followerCount" label="粉丝数" />
            </el-table>
        </el-card>
    </ContentBaseVue>
</template>

<script setup>
import ContentBaseVue from '@/components/ContentBase.vue';
import $ from "jquery";
import { ref } from "vue";
// 用户列表
let userTableData = ref([]);
$.ajax({
  url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
  type: "get",
  success(resp) {
    userTableData.value = resp;
  }
})
</script>

<style scoped>
img{
    border-radius: 50%;
}
</style>