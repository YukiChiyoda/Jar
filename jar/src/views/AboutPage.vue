<template>
    <div>
        <el-main></el-main>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue";

const keyString = ref("");
const beginSearch = () => {
    console.info(keyString.value);
};

</script>

<style lang="scss" scoped>
</style>