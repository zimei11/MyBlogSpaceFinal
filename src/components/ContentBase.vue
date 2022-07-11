<template>
    <div class="common-layout">
        <el-container>
            <el-affix :offset="0">
                <el-header>
                    <TopMenuVue />
                </el-header>
            </el-affix>
            <el-main>
                <el-row :gutter="0">
                    <el-col :span="24">
                        <el-card shadow="never" style="background-color:var(--el-color-info-light-9)">
                            <slot></slot>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>
                <FooterMenuVue />
            </el-footer>
        </el-container>
    </div>
    <!-- 暗黑模式 -->
    <el-affix position="bottom" :offset="50">
        <el-button @click="toggleDark()" circle size="large">
            <el-icon color="var(--el-color-primary-dark-2)">
                <Moon />
            </el-icon>
        </el-button>
    </el-affix>
    <!-- 回到顶部 -->
    <el-backtop :right="20" :bottom="100"  />
</template>

<script setup>
import FooterMenuVue from './Menu/FooterMenu.vue';
import TopMenuVue from './Menu/TopMenu.vue';
import { toggleDark } from '@/composables/dark.js'
import { Moon } from '@element-plus/icons-vue'

</script>

<style scoped>
/* card */
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>
