<template>
    <div class="page">
        <div id="control" class="mt-4" v-loading="ifLoading">
            <el-input v-model="keyString" placeholder="输入待匹配内容" class="input-with-select">
                <template #prepend>
                    <el-select v-model="selectExpression" placeholder="任何项含有" style="width: 150px">
                        <el-option label="任意项含有" value="all=" />
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
            <el-row justify="space-around">
                <el-col :span="item.length" v-for="(item, index) in targetExpression" :key="index">
                    <el-button type="info" @click="popExpression(index)">{{ item }}</el-button>
                </el-col>
            </el-row>
            <el-button type="success" :icon="Search" @click="beginSearch" round>找找看</el-button>
        </div>
        <div id="result" v-loading="ifLoading">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>Result</span>
                    </div>
                </template>
                <!-- <div v-for="(item, index) in resultList" :key="index">
                    <div :class="item[index].style">{{ item[index].title }}</div>
                </div> -->
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import { Plus, Search } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const keyString = ref("");
const selectExpression = ref("all=");
const targetExpression = ref(new Array<string>());
const ifLoading = ref(false);
const resultList = ref(new Array<unknown>());
const addExpression = () => {
    if (keyString.value) {
        const temp = selectExpression.value + keyString.value;
        if (targetExpression.value.indexOf(temp) > -1) {
            ElMessage.error("该搜索条件已存在！")
            return;
        }
        targetExpression.value.push(temp);
        keyString.value = "";
    } else {
        ElMessage.error("条件匹配内容不能为空！")
        return;
    }
};
const popExpression = (i: number) => {
    ElMessageBox.confirm(
        "你要去掉搜索条件[" + targetExpression.value[i] + "]吗？",
        'Warning',
        {
            confirmButtonText: "删掉",
            cancelButtonText: '不要',
            type: "warning",
        }
    ).then(() => {
        targetExpression.value.splice(i, 1);
        console.warn(targetExpression.value);
        ElMessage({
            type: "success",
            message: "删掉啦~",
            duration: 1000,
        })
    }).catch(() => {
        return;
    });

};
const beginSearch = () => {
    if (targetExpression.value.length) {
        ElMessage.info("正在努力寻找符合以下条件的内容：\n" + targetExpression.value)
        ifLoading.value = true;
        // resultList.value = axio()...
        // ifLoading.value = false;
        // ElMessage.success("搜索到{-1}条结果~")
    } else {
        ElMessage.error("一个搜索条件都没有呢~")
    }
};

const getURLParams = function (s: string) {
    return new URLSearchParams(document.location.search.substring(1)).get(s);
};
const getParameters = onMounted(() => {
    let t = getURLParams("tag");
    t && targetExpression.value.push("tag=" + t);
});

</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>