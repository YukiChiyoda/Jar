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
            <a href="https://github.com/YukiChiyoda/">
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
* {
    user-select: none;
}

::-webkit-scrollbar {
    display: none;
}

a {
    color: none;
    cursor: pointer;
    text-decoration: none;
}

.application {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
}

.game {
    display: flex;
    justify-content: center;
    width: 400px;
    height: 90vh;
    background-color: #FFFAFA;
    box-shadow: 5px 3px 3px #E8D4D1,
        -3px -2px 3px #E8D4D1;
    border-radius: 15px;
    overflow: hidden;
}

.game .score {
    position: fixed;
    margin-top: 20px;
    font-size: 48px;
    font-weight: 600;
    color: #E35D72;
    text-shadow: 1px 1px 1px #FFFAFA;
    z-index: 233;
}

.game .bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    width: 25%;
    height: 100%;
    overflow: hidden;
}

.game .bar .block {
    flex-shrink: 0;
    bottom: 0;
    width: 100px;
    height: 150px;
    background-size: cover;
    background-color: #FFFAFA;
    background-repeat: no-repeat;
    background-position: center center;
}

.game .bar .active {
    background-color: #FA8072;
    // background-image: url('./../../public/img/yuki.jpg');
}

.game .bar .wrong {
    background-color: #E35D72;
    // background-image: url('');
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(30px);
}

.fade-leave-active {
    position: absolute;
    border: none;
}

.cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #E35D72;
    opacity: 0.5;
}

.cover .title {
    font-size: 64px;
    font-weight: 600;
    line-height: 128px;
    color: #FFFAFA;
    text-shadow: 3px 3px 1px #FA8072;
}

.cover .score {
    font-size: 36px;
    font-weight: 600;
    line-height: 64px;
    color: #FFFAFA;
    text-shadow: 3px 3px 1px #FA8072;
}

.cover .praise {
    font-size: 28px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFAFA;
}

.cover .button {
    margin-top: 50px;
    padding: 20px;
    font-size: 28px;
    font-weight: 400;
    color: #FA8072;
    background-color: #FFFAFA;
    border-radius: 20px;
    box-shadow: 3px 3px 1px #FA8072;
}

@media screen and (max-width: 450px) {
    .game {
        width: 90vw;
        height: 95vh;
    }

    .game .score {
        font-size: 36px;
    }

    .cover .title {
        font-size: 32px;
    }

    .cover .score {
        font-size: 20px;
        line-height: 48px;
    }

    .cover .praise {
        font-size: 16px;
    }

    .cover .button {
        margin-top: 50px;
        padding: 15px;
        font-size: 16px;
    }
}
</style>