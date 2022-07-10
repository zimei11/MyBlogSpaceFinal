<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <TopMenuVue />
            </el-header>
            <el-main>
                <el-row :gutter="0">
                    <el-col :span="24">
                        <el-card shadow="never" style="background-color:#f2f2f5"> 
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
</template>

<script setup>
import FooterMenuVue from './Menu/FooterMenu.vue';
import TopMenuVue from './Menu/TopMenu.vue';


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
