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

            <el-container>

                <el-main>
                    <div class="box">
                        <div class="headimg">
                            <img src="./../assets/demo.png" alt="TestImg">
                        </div>
                        <div class="title">
                            Test Page
                        </div>
                        <div class="subtitle">
                            This is a test page for testing.
                        </div>
                        <div class="detail">
                            <el-icon color="#F8DADE">
                                <User />
                            </el-icon>: Yuki,
                            <el-icon color="#F8DADE">
                                <Mug />
                            </el-icon>: 2023-1-10
                        </div>
                        <div class="title_A">The A Title</div>
                        <div class="title_AA">The AA Title</div>
                        <div class="title_AAA">The AAA Title</div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                            <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, facilis quasi.
                            Temporibus
                            voluptate porro culpa vero optio rerum ratione minima ex qui molestias dolor non, explicabo
                            neque
                            itaque harum nobis!<br />Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Voluptatem
                            enim
                            quod quae. Alias, fugit ratione fugiat illum adipisci officiis doloremque vitae harum rerum
                            ad
                            iure
                            numquam, placeat laboriosam, nobis architecto!<br />Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Soluta pariatur non alias dolor, at commodi possimus, suscipit a obcaecati
                            distinctio assumenda sunt deserunt harum culpa nesciunt. Architecto quam tempore tenetur.
                        </p>
                    </div>
                </el-main>

                <el-footer height="100px">
                    Copyright © 2023 Yuki·Chiyoda
                </el-footer>

            </el-container>

        </el-container>

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