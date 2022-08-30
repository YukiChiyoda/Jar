<template>
    <div class="application">
        <div class="game">
            <div class="score">{{  score  }}</div>
            <div class="bar" v-for="(r, i) in rows" :key="i" @click="remove(i); insert()">
                <TransitionGroup name="fade">
                    <div class="block" v-for="item in r" :key="item"
                        :class="{ active: item < 0, wrong: item === err && !status }">
                    </div>
                </TransitionGroup>
            </div>
        </div>
        <div class="cover" v-if="!status">
            <div class="title">You Lost!</div>
            <div class="score">Final Score: {{  score  }}</div>
            <div class="praise">{{  getPraised  }}</div>
            <div class="button" @click="restart">Retry</div>
            <a href="https://github.com/YukiChiyoda/EatIt/">
                <div class="button">View Code</div>
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const rows = ref([[], [], [], []]);
let id = 0, uid = 0;
const score = ref(0), err = ref(-1);
const status = ref(true);
const getPraised = computed(() => {
    if (score.value < 30) {
        return "Have a retry!";
    } else if (score.value < 50) {
        return "You're so cool!";
    } else {
        return "dalao, orz...";
    }
});

const buildGame = onMounted(() => {
    restart();
});

function restart() {
    rows.value = [[], [], [], []];
    id = 0, uid = 0;
    score.value = 0, err.value = 0;
    status.value = true;
    for (let i = 0; i < 6; i++) {
        insert();
    }
}

function insert() {
    let temp = Math.floor(Math.random() * rows.value.length);
    for (let i = 0; i < rows.value.length; i++) {
        rows.value[i].unshift(i != temp ? ++id : --uid);
    }
}

function remove(r) {
    for (let i = 0; i < rows.value.length; i++) {
        const t = rows.value[i].pop();
        if (i === r && t > 0) {
            err.value = rows.value[i].at(-1);
            status.value = false;
            return;
        }
    }
    score.value += 1;
}
</script>

<style lang="scss">
@import url('./../styles/GamePage/style.scss');
</style>