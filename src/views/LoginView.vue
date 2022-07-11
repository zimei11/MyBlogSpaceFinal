<template>
    <div class="common-layout">

        <el-container>

            <el-main>
                <h1 style="text-align:center;">用户登录</h1>
                <el-divider />
                <el-row>
                    <el-col :xs="6" :sm="8" :md="9">
                        <div class="grid-content ep-bg-purple"></div>
                    </el-col>
                    <el-col :xs="12" :sm="8" :md="6">

                        <el-card>
                            <el-form :model="user" label-width="120px" label-position="top">
                                <el-form-item label="用户名">
                                    <el-input type="text" v-model="user.username" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input type="password" v-model="user.password" />
                                </el-form-item>
                                <el-form-item>
                                    <el-col :xs="24" :sm="12">
                                        <el-button class="botton" type="primary" @click="login" style="width:100%">登录
                                        </el-button>
                                    </el-col>
                                    <el-col :xs="24" :sm="12">
                                        <el-button class="botton" style="width:100%">取消</el-button>
                                    </el-col>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                    <el-col :xs="6" :sm="8" :md="9">
                        <div class="grid-content ep-bg-purple"></div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const user = reactive({
    username: '',
    password: '',
})
</script>

<style scoped>
.botton {
    margin-bottom: 10px;
}

.el-container {
    height: 100%;
}

.el-main {
    height: 100%;
    background: linear-gradient(200deg, #f3e7e9, #e3eeff);
}

.common-layout {
    height: 100%;
}
/* .el-card{
    background-image: url('https://img.zimei.xyz/202207101321009.jpg');
    background-size:100%;
} */
</style>