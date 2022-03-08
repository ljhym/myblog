<template>
    <div class="honeswiper">
        <div class="swiperBg" :style="{ 'background': data.bgColor }"></div>
        <a-carousel autoplay arrows :beforeChange="changeFn">
            <template #prevArrow>
                <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                    <left-circle-outlined />
                </div>
            </template>
            <template #nextArrow>
                <div class="custom-slick-arrow" style="right: 10px">
                    <right-circle-outlined />
                </div>
            </template>
            <div
                class="swiper-item"
                v-for="item, i in prop.banner"
                @click.stop="router.push({ name: item.link })"
            >
                <div class="swiper-box">
                    <div class="swiper-left">
                        <h3 :style="{ color: item.text_color }">{{ item.sub_title }}</h3>
                        <h1 :style="{ color: item.text_color }">{{ item.title }}</h1>
                    </div>
                    <div class="banner-right">
                        <img :src="item.imgsrc" alt />
                        <!-- <img
                            :src="'https://pixl.decathlon.com.cn/' + item.picture_desktop + '/banner.jpg'"
                            alt
                        />-->
                    </div>
                </div>
            </div>
        </a-carousel>
    </div>
</template>

<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineProps, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const prop = defineProps({ banner: Array })
const data = reactive({
    bgColor: prop.banner[0].bg_color
})
function changeFn(from, to) {
    console.log(prop)
    data.bgColor = prop.banner[to].bg_color
}
</script>


<style scoped lang="less">
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 575px;
    // line-height: 575px;
    // background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    opacity: 0.3;
    z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
    display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}

.honeswiper {
    position: relative;
    height: 575px;
    margin-bottom: 50px;
    overflow: hidden;
    .swiperBg {
        position: absolute;
        width: 100%;
        background-color: orangered;
        display: block;
        height: 575px;
        transform: skew(0, -9deg);
        transition: all 0.5s;
        transform-origin: 0 0;
    }

    .swiper-item {
        height: 575px;
        .swiper-box {
            display: flex;
            min-width: 1200px;
            justify-content: center;
            .swiper-left {
                width: 340px;
                padding-right: 100px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-top: 100px;
                text-align: right;
            }
            h3 {
                font-size: 30px;
                font-weight: 700;
                margin: 0;
                line-height: 40px;
            }
            h3 {
                font-size: 60px;
                font-weight: 700;
                margin: 0;
                line-height: 70px;
            }
            .banner-right {
                margin-top: 45px;
                transform-origin: 0 100%;
                transform: skew(0, -8deg);
                overflow: hidden;
                border-radius: 20px;
                border-bottom-right-radius: 80px;
            }
            img {
                transform-origin: 0 100%;
                transform: skew(0, 8deg);
                border-radius: 20px;
            }
        }
    }
}
</style>