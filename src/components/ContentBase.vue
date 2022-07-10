<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <TopMenuVue/>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>
                <FooterMenuVue/>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import FooterMenuVue from './Menu/FooterMenu.vue';
import TopMenuVue from './Menu/TopMenu.vue';


</script>
