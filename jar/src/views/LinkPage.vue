<template>
    <div class="page" @mousemove="mouseMoveEvent">

        <div class="pattern">
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
                    <el-breadcrumb-item>友情链接</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <el-main>
                <div v-infinite-scroll="loadMore" class="infinite-list" style="overflow: auto">
                    <el-row v-for="(item, index) in linkList.slice(0, currentLoad)" :key="index">
                        <el-col :span="4" :offset="2" :xs="{ span: 4, offset: 0 }">
                            <el-avatar :icon="UserFilled" />
                        </el-col>
                        <el-col :span="6" :offset="2" :xs="{ span: 8, offset: 0 }" style="align-items: flex-start;">
                            <el-link type="primary">{{ item.name }}</el-link>
                            <el-link type="success">{{ item.herf }}</el-link>
                        </el-col>
                        <el-col :span="8" :xs="{ span: 12, offset: 0 }">
                            {{ item.info }}
                        </el-col>
                    </el-row>
                    <!-- <el-skeleton :rows="3" animated /> -->
                    <el-empty description="拉到底了喵~" :image-size="100" />
                </div>
            </el-main>

            <el-footer height="50px">
                Copyright © 2019-2022 Yuki·Chiyoda
            </el-footer>

        </el-container>

    </div>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, reactive, toRefs } from "vue";
import { ArrowRight, UserFilled } from "@element-plus/icons-vue";

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

class linkDetail {
    index: number;
    avatar: string;
    name: string;
    info: string;
    herf: string;
    constructor() {
        this.index = 0;
        this.avatar = "";
        this.name = "";
        this.info = "";
        this.herf = "";
    }
}
const linkList = ref(new Array<linkDetail>());
const goQuery = onMounted(() => {
    linkList.value = new Array<linkDetail>()
    const n = Math.random() * 100;
    for (let i = 0; i < n; i++) {
        let temp = new linkDetail();
        temp.index = 0;
        temp.avatar = "test.jpg";
        temp.name = "工具人" + i + "号";
        temp.info = "喵的好朋友工具人";
        temp.herf = "https://bilibili.com";
        linkList.value.push(temp);
    }
});
const currentLoad = ref(10);
const loadMore = () => {
    currentLoad.value += 5;
};

</script>

<style lang="scss" scoped>
@import url('./../styles/LinkPage/style.scss');
</style>