<template>
    <el-container class="-page">

        <div class="ocean">
            <div class="wave"></div>
            <div class="bubble" v-for="i in 5" :key="i"></div>
        </div>

        <!-- How to reuse the menu? I don't care. -->
        <el-menu class="header" mode="horizontal" :default-active="activeIndex" :unique-opened="true"
            @select="handleSelect">
            <img class="avatar" src="./../assets/ユキのハニージャー.gif" alt="Home">
            <!-- <el-menu-item index="home">落雪蜜罐</el-menu-item> -->
            <div class="spaceholder"></div>
            <el-menu-item index="view">文章</el-menu-item>
            <el-menu-item index="search">搜索</el-menu-item>
            <el-menu-item index="link">友链</el-menu-item>
            <el-menu-item index="gallery">画廊</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
        </el-menu>

        <el-container class="core">

            <el-aside width="300px">
                Folder Demo
            </el-aside>
            <el-main>
                Main Demo
            </el-main>

        </el-container>

        <el-footer height="100px">
            Copyright © 2023 Yuki·Chiyoda
        </el-footer>

    </el-container>
</template>

<script setup lang="ts">

import { ref, computed } from "vue";

const activeIndex = ref('view')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style lang="scss" scoped>
@import url('./../styles/ViewPage/style.scss');
</style>