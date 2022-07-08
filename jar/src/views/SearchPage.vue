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
                    <el-breadcrumb-item>全站搜索</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>

            <el-main id="control" v-loading="ifLoading">

                <el-form>
                    <el-form-item>
                        <el-row justify="center">
                            <el-input v-model="keyString" placeholder="输入待匹配内容" class="input-with-select">
                                <template #prepend>
                                    <el-select v-model="selectExpression" style="width: 120px">
                                        <el-option label="任意项含有" value="any=" />
                                        <el-option label="标题含有" value="title=" />
                                        <el-option label="副标题含有" value="desc=" />
                                        <el-option label="标签含有" value="tag=" />
                                        <el-option label="作者含有" value="auth=" />
                                    </el-select>
                                </template>
                                <template #append>
                                    <el-button :icon="Plus" @click="addExpression" />
                                </template>
                            </el-input>
                        </el-row>
                    </el-form-item>
                </el-form>

                <el-row justify="center">
                    <!-- <el-space size="small" :spacer="h(ElDivider, { direction: 'vertical' })"> -->
                    <el-tag type="info" size="large" effect="light" v-for="(item, index) in targetExpression"
                        :key="index" closable @close="popExpression(index)" round>{{ item }}
                    </el-tag>
                    <!-- </el-space> -->
                </el-row>

                <el-row justify="end" class="col-button">
                    <el-button type="success" :icon="Search" @click="beginSearch" round>找找看</el-button>
                </el-row>

            </el-main>

            <el-main id="result" v-loading="ifLoading">
                <!-- <el-space direction="vertical" :fill="true" wrap> -->
                <el-row :gutter="20">
                    <el-col :span="12"
                        v-for="(item, index) in resultList.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                        :key="index">
                        <el-card class="box-card" :style="getBackgroundStyle(index)">
                            <template #header>
                                <div class="card-header">
                                    <span>{{ item.title }}</span>
                                </div>
                            </template>
                            {{ item.description }}
                        </el-card>
                    </el-col>
                </el-row>
                <!-- </el-space> -->
                <el-pagination layout="prev, pager, next" :page-size="pageSize" :pager-count="11"
                    :total="resultList.length" :current-page="currentPage" @update:current-page="currentChange"
                    hide-on-single-page background />
            </el-main>

            <el-footer height="50px">
                Copyright © 2019-2022 Yuki·Chiyoda
            </el-footer>

        </el-container>

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, h, computed } from "vue";
import { Plus, Search, ArrowRight } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox, ElDivider } from 'element-plus';
import { randomUUID } from "crypto";
import { random, result } from "lodash";

const keyString = ref("");
const selectExpression = ref("any=");
const targetExpression = ref(new Array<string>());
const ifLoading = ref(false);
const addExpression = () => {
    if (keyString.value) {
        const temp = selectExpression.value + keyString.value;
        if (targetExpression.value.indexOf(temp) > -1) {
            ElMessage.error("该搜索条件已存在！");
            return;
        }
        targetExpression.value.push(temp);
        keyString.value = "";
    } else {
        ElMessage.error("条件匹配内容不能为空！");
        return;
    }
};
const popExpression = (i: number) => {
    ElMessageBox.confirm(
        "你真的要去掉搜索条件[" + targetExpression.value[i] + "]吗？",
        "等一等",
        {
            confirmButtonText: "删掉",
            cancelButtonText: '不要',
            type: "warning",
        }
    ).then(() => {
        targetExpression.value.splice(i, 1);
        // console.warn(targetExpression.value);
        ElMessage({
            type: "success",
            message: "删掉啦~",
            duration: 1000,
        })
    }).catch((err) => {
        console.error(err);
    });

};
const beginSearch = () => {
    if (targetExpression.value.length) {
        ElMessage.info("正在努力寻找符合以下条件的内容：\n" + targetExpression.value);
        ifLoading.value = true;
        const flag = goQuery()
        ifLoading.value = false;
        if (flag) {
            ElMessage.success("搜索到" + resultList.value.length + "条结果~");
        } else {
            ElMessage.error("搜索出错啦，请重试！");
        }
    } else {
        ElMessage.error("一个搜索条件都没有呢~");
    }
};

const getURLParams = (s: string) => {
    return new URLSearchParams(document.location.search.substring(1)).get(s);
};

const getParameters = onMounted(() => {
    let t = getURLParams("tag");
    t && targetExpression.value.push("tag=" + t);
});

class blogDetail {
    index: number;
    title: string;
    description: string;
    tag: Array<string>;
    author: Array<string>;
    background: string;
    constructor() {
        this.index = 0;
        this.title = "";
        this.description = "";
        this.tag = [];
        this.author = [];
        this.background = "";
    }
}
const resultList = ref(new Array<blogDetail>());
const goQuery = () => {
    resultList.value = new Array<blogDetail>()
    const n = Math.random() * 100;
    for (let i = 0; i < n; i++) {
        let temp = new blogDetail();
        temp.index = i;
        temp.title = "测试文章" + i;
        temp.description = String(Math.random());
        temp.tag = ["life", "cat"];
        temp.author = ["Yuki"]
        temp.background = "";
        resultList.value.push(temp);
    }
    return true;
};
const getBackgroundStyle = (i: number) => {
    if (resultList.value[i].background) {
        return {
            "background-image": "url('" + resultList.value[i].background + "')"
        };
    }
    return {};
};

const pageSize = ref(10);
const currentPage = ref(1);
const currentChange = (i: number) => {
    currentPage.value = i;
};

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
@import url('./../styles/SearchPage/style.scss');
</style>