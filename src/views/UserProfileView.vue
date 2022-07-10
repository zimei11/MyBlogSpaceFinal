<template>
<ContentBaseVue>
     <el-alert  title="用户动态" type="success" description="你可以查看用户动态" center/>
</ContentBaseVue>
</template>

<script setup>
import ContentBaseVue from '@/components/ContentBase.vue';
import {  useRoute } from "vue-router"

const route=useRoute();
const userId=route.query.userId;
console.log(userId);
</script>