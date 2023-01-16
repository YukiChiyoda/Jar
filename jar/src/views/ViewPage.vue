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

            <el-aside class="folder" width="300px"><el-menu default-active="2" class="el-menu-vertical-demo"
                    @open="handleMenuOpen" @close="handleMenuClose">
                    <el-sub-menu index="1">
                        <template #title>
                            <span>Frontend</span>
                        </template>
                        <el-menu-item-group title="Group One">
                            <el-menu-item index="1-1">item one</el-menu-item>
                            <el-menu-item index="1-2">item two</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="Group Two">
                            <el-menu-item index="1-3">item three</el-menu-item>
                        </el-menu-item-group>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <span>Backend</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <span>Life</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span>Gallery</span>
                    </el-menu-item>
                </el-menu>
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
                            <div class="block">
                                <el-icon color="#F7CBD1" :size="14">
                                    <User />
                                </el-icon> / Yuki
                            </div>
                            <div class="block">
                                <el-icon color="#F7CBD1" :size="14">
                                    <Mug />
                                </el-icon> / 2023-1-16
                            </div>
                        </div>
                        <div class="title_A">0x00: Welcome</div>
                        <p>Here welcome to my blog! This is a static test-page for blog viewer. I'll show you some
                            functions it has already completed, though I'm still struggling with my blog project. :p</p>
                        <p>If you like, visit my Github repository to find my source code.</p>
                        <div class="title_A">0x01: Tags</div>
                        <div class="title_AA">0 | Text</div>
                        <div class="title_AAA">Title</div>
                        <p>The main title is in the top of the page, following the HeadImg.</p>
                        <div class="title_AAA">Subtitle</div>
                        <p>The subtitle is also in the top of the page, following the main title.</p>
                        <div class="title_AAA">Detail</div>
                        <p>Well, it follows the subtitle, including 'Authors' and 'Last Update Time'.</p>
                        <div class="title_AAA">Main body</div>
                        <p>Fell free to type any text in the main body! Use tag 'p' to make our blog more orderlined.
                            More tags like 'a' 'b' and so on are also available.</p>
                        <p>Here is tag <a href="./e">'a'</a> example, leading you to an empty page.</p>
                        <p>Here is tag <b>'b'</b> example, making its font heavier.</p>
                        <p>Now let's appreciate some lorems generated by the Visual Studio Code. :p</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat optio eaque molestiae
                            ea aliquam consequatur exercitationem numquam. Ex, consequatur. Consectetur cum vel tenetur
                            atque dolore modi quaerat explicabo officia.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora asperiores ipsa, blanditiis
                            dolorem ducimus quae inventore quas dolor? Iure non consequuntur magnam, in et quae
                            asperiores tempora minus molestias maxime?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam illum soluta
                            recusandae accusamus sequi, quia sit ad fuga fugit neque ab eveniet numquam alias assumenda
                            suscipit? Asperiores, qui excepturi!</p>
                        <div class="title_AA">1 | Media</div>
                        <div class="title_AAA">HeadImg</div>
                        <p>Every blog has one HeadImg to attract more visitors. It will be shown in the top of the page,
                            as well as the search page.</p>
                        <div class="title_AAA">TextImg with description</div>
                        <p>Obviously the images are of great importance for blog. To push an image with description by
                            tag 'img'
                            and 'span' is easy. An example is shown below.</p>
                        <img src="./../assets/demo.png" alt="TestImg" @click="showImg">
                        <span>
                            <el-icon>
                                <CaretTop />
                            </el-icon>
                            An image inserted into the text.</span>
                        <p>To zoom in this image, just click it.</p>
                        <div class="title_AAA">Other</div>
                        <p>Other media such as audios may be added into my blog soon.</p>
                        <div class="title_A">0x03: Future</div>
                        <p>What you're viewing is a static page, which means the backend project is not finally
                            completed yet. Looking forward to the next chance to meet you here!</p>
                    </div>
                </el-main>

                <el-footer height="100px">
                    Copyright © 2023 Yuki·Chiyoda
                </el-footer>

            </el-container>

            <el-aside class="ads" width="300px">
                <el-tree class="content" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
            </el-aside>

        </el-container>

        <Transition name="viewer">
            <div class="viewer" v-if="activeViewer" @click="activeViewer = !activeViewer;">
                <div class="panel">
                    <img :src="activeImg" alt="PreviewImg">
                    <div class="func">
                        <el-icon>
                            <ZoomIn @click="imgZoomIn" />
                        </el-icon>
                        <el-icon>
                            <Download @click="imgSave" />
                        </el-icon>
                    </div>
                </div>
            </div>
        </Transition>

    </el-container>
</template>

<script setup lang="ts">

import { ref, computed } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus';

const activeIndex = ref('view')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const activeViewer = ref(false);
const activeImg = ref('');
const showImg = () => {
    activeViewer.value = !activeViewer.value;
    activeImg.value = './demo.png';
    ElMessage.success("Click any space to return~");
};
const imgZoomIn = () => {
    window.open(activeImg.value);
}
const imgSave = () => {
    window.open(activeImg.value);
}

interface Tree {
    label: string
    children?: Tree[]
}
const handleNodeClick = (data: Tree) => {
    console.log(data)
}
const data: Tree[] = [
    {
        label: '0x00: Welcome',
        children: [],
    },
    {
        label: '0x01: Tags',
        children: [
            {
                label: '0 | Text',
                children: [
                    {
                        label: 'Title',
                    },
                    {
                        label: 'Subtitle',
                    },
                    {
                        label: 'Detail',
                    },
                    {
                        label: 'Main Body',
                    },
                ],
            },
            {
                label: '1 | Media',
                children: [
                    {
                        label: 'HeadImg',
                    },
                    {
                        label: 'TextImg with description',
                    },
                    {
                        label: 'Other',
                    },
                ],
            },
            {
                label: '0x03: Future',
                children: [],
            },
        ],
    },
]
const defaultProps = {
    children: 'children',
    label: 'label',
}

const handleMenuOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleMenuClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

</script>

<style lang="scss" scoped>
@import url('./../styles/ViewPage/style.scss');
@import url('./../styles/ViewPage/core.scss');
@import url('./../styles/ViewPage/viewer.scss');
</style>