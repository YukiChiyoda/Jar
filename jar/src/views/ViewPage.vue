<template>
    <div class="-page" @mousemove="mouseMoveEvent">

        <div class="-pattern">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="fill" :style="patternWaving"></path>
            </svg>
        </div>

        <el-container>

            <el-header height="100px">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <!-- <el-avatar :size="50" :src="favicon" /> -->
                    <el-breadcrumb-item :to="{ path: '/' }">落雪蜜罐</el-breadcrumb-item>
                    <el-breadcrumb-item>阅览器</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <el-main></el-main>

            <el-footer height="50px">
                Copyright © 2019-2022 Yuki·Chiyoda
            </el-footer>

        </el-container>

    </div>
</template>

<script setup lang="ts">

import { ref, computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";

const mousePosition = ref([0, 0]);
const mouseMoveEvent = (e: MouseEvent) => {
    mousePosition.value = [e.x, e.y];
};
const patternWaving = computed(() => {
    const offset = [-mousePosition.value[0] / 30, mousePosition.value[1] / 20];
    return {
        transform: "translateX(" + offset[0] + "px)" +
            "translateY(" + offset[1] + "px)"
    };
});

</script>

<style lang="scss" scoped>
@import url('./../styles/ViewPage/style.scss');
</style>