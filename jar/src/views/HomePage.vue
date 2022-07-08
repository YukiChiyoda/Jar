<template>
    <div @mousemove="mouseMoveEvent" @mousedown="mouseClickEvent">
        <div class="background" id="location">
            <img src="./../assets/ユキのハニージャー.gif" class="symbol">
            <div class="cloud" id="cloud_A" :style="cloudOffset(0)"></div>
            <div class="cloud" id="cloud_B" :style="cloudOffset(1)"></div>
            <div class="cloud" id="cloud_C" :style="cloudOffset(2)"></div>
            <div class="cloud" id="cloud_D" :style="cloudOffset(3)"></div>
            <img src="./../assets/桜.png" class="sakura" :style="sakuraOffset(index)" v-for="(item, index) in mouseTrack"
                :key="index">
        </div>
        <div class="text_line">
            <div class="low_title">ユキのハニージャー</div><br />
            <div class="main_title">落雪蜜罐</div>
        </div>
        <div class="cake_line">
            <div class="cake_box">
                <a href="s?tag=frontend">
                    <div class="cake"></div>
                    <div class="text">前端设计</div>
                </a>
            </div>
            <div class="cake_box">
                <a href="s?tag=backend">
                    <div class="cake"></div>
                    <div class="text">运维笔记</div>
                </a>
            </div>
            <div class="cake_box">
                <a href="s?tag=life">
                    <div class="cake"></div>
                    <div class="text">喵言喵语</div>
                </a>
            </div>
        </div>
        <div class="footer">
            <div class="button" id="show" @click="footerUnfold"><img src="./../assets/svg/more.svg"></div>
            <div :class="footerStyles" id="box" v-if="footerExpansion">
                <a href="about">
                    <div class="button" id="me"><img src="./../assets/svg/me.svg"></div>
                </a>
                <a href="friends">
                    <div class="button" id="friends"><img src="./../assets/svg/link.svg"></div>
                </a>
                <a href="https://github.com/YukiChiyoda/Jar">
                    <div class="button" id="github"><img src="./../assets/svg/github.svg"></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { computed, ref } from "vue";

const footerExpansion = ref(0);
const footerUnfold = function () {
    footerExpansion.value ^= 1;
};
const footerStyles = computed(() => {
    return {
        box: 1,
        box_show: footerExpansion.value,
        box_hide: footerExpansion.value ^ 1
    };
});

const mousePosition = ref([0, 0]);
const mouseMoveEvent = function (e: MouseEvent) {
    mousePosition.value = [e.x, e.y];
};
const cloudOffset = function (i: number) {
    const offset = [[
        mousePosition.value[0] / 5,
        -mousePosition.value[0] / 3,
        mousePosition.value[0] / 10,
        -mousePosition.value[0] / 10
    ], [
        mousePosition.value[1] / 30,
        mousePosition.value[1] / 50,
        mousePosition.value[1] / 5,
        -mousePosition.value[1] / 10
    ]];
    return {
        transform: "translateX(" + offset[0][i] + "px)"
            + "translateY(" + offset[1][i] + "px)"
    };
};

const mouseTrack = ref(new Array<[number, number]>());
const mouseClickEvent = function (e: MouseEvent) {
    mouseTrack.value.push([e.x, e.y]);
    console.warn("我推入了第%d个元素x坐标为%d", mouseTrack.value.length - 1, e.x);
    // I don't know how to recycle them... :(
    // 一旦数组发生改变就会导致v-for重新渲染引发css动画重置不连贯，可能需要换种动画实现方式
    setTimeout(() => {
        const temp = mouseTrack.value.splice(0, 1);
        console.error("我删除了第%d个元素x坐标为%d", 0, temp[0]);
    }, 1000);
};
const sakuraOffset = function (i: number) {
    return {
        left: mouseTrack.value[i][0] + "px",
        top: mouseTrack.value[i][1] + "px"
    };
};

</script>

<style lang="scss" scoped>
@import url('./../styles/HomePage/style.scss');
</style>