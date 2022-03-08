<template>
    <Loading v-if="data.isLoading" text="3D模型加载较慢" :Progress="data.Progress"></Loading>

    <div class="product">
        <div class="prod-list" :class="{ hidden: store.state.isFullscreen }">
            <h1>
                <SketchOutlined></SketchOutlined>产品推荐
            </h1>
            <div class="products">
                <div
                    class="prod-item"
                    v-for="(prod, index) in data.products"
                    @click="changeModel(prod, index)"
                    :class="{ active: index == data.pIndex }"
                >
                    <div class="prod-title">{{ prod.title }}</div>
                    <div class="img">
                        <img :src="prod.imgsrc" alt />
                    </div>
                    <a-button block type="primary" @click.stop="addBuycart(prod)">
                        <template #icon>
                            <ShopOutlined></ShopOutlined>
                        </template>
                        加入购物车
                    </a-button>
                </div>
            </div>
        </div>
        <div ref="product" id="product">
            <div class="fix">鼠标上下滚动</div>

            <div
                class="desc-list"
                :class="{ active: data.descIndex == i }"
                v-if="data.products[data.descIndex]"
                v-for="desc, i in data.products[data.descIndex].desc"
            >
                <h1 class="title">{{ desc.title }}</h1>
                <p class="content">{{ desc.content }}</p>
            </div>
        </div>
        <div class="scene-list" :class="{ hidden: store.state.isFullscreen }">
            <h3>
                <RadarChartOutlined></RadarChartOutlined>切换使用场景
            </h3>
            <div class="scenes">
                <div
                    class="scene-item"
                    v-for="(scene, index) in data.screen"
                    @click="changeHdr(scene, index)"
                    :class="{ active: index == data.sceneIndex }"
                >
                    <img :src="`./files/hdr/${scene}.jpg`" alt />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Loading from "../components/Loading.vue";

import { useRoute } from 'vue-router';
import * as api from '../api/index'
import { onMounted, reactive, ref } from 'vue';
import { SketchOutlined, RadarChartOutlined, ShopOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex';
import Base3d from '../utils/Base3d';

const store = useStore()
const route = useRoute()
const data = reactive({
    products: [],
    screen: [],
    pIndex: 1,
    sceneIndex: 0,
    base3d: {},
    descIndex: 0,
    isLoading: true,
    Progress: 0
})
function LoadingFinish() {
    data.isLoading = false
}
let product = ref()
async function changeModel(prod, pI) {
    data.pIndex = pI
    data.isLoading = true
    data.Progress = 0
    let mydata = await data.base3d.setModel(prod.modelName)
    console.log(mydata)
    LoadingFinish()
}
function changeHdr(scene, sceneIndex) {
    data.sceneIndex = sceneIndex
    data.base3d.setEnvMap(scene)
}

function addBuycart(prod) {
    let product = { ...prod, num: 1 };
    let index = 0;
    let isExist = store.state.buycarts.some((item, i) => {
        if (product.id == item.id) {
            index = i;
            return true;
        } else {
            return false;
        }
    });
    if (isExist) {
        store.commit("addBuycartsNum", index);
    } else {
        store.commit("addBuycarts", product);
    }
}

onMounted(async () => {
    let result = await api.getProducts()
    console.log(result)
    data.products = result.list
    data.screen = result.hdr
    // console.log(product.value)
    product.value.addEventListener('mousewheel', (e) => {
        // console.log(e)
        if (e.deltaY > 0) {
            store.commit('setFullscreen', true)
        } else {
            store.commit('setFullscreen', false)
        }
        // let duration = data.base3d.animateAction._clip.duration
        // let time = data.base3d.animateAction.time
        // let index = Math.floor(time / duration * 4)
        // data.descIndex = index
    })
    data.base3d = new Base3d('#product', LoadingFinish)
    // data.base3d.setModel('shoes.glb')
    // data.base3d.setEnvMap('067')
    data.base3d.onProgress((e) => {
        // console.log(e)
        // console.log(e.loaded / e.total)
        data.Progress = (((e.loaded / e.total) - 0) * 100).toFixed(2)
        console.log(data.Progress)
        if (data.Progress == '100.00') {
            LoadingFinish()
        }
    })
})

</script>

<style scoped lang="less">
.prod-list {
    width: 300px;
    height: 100vh;
    position: fixed;
    z-index: 10;
    transition: all 0.5s;
    padding: 60px 0 60px;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.5);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    h1 {
        font-size: 20px;
        font-weight: 700;
        padding: 10px 25px 0;
    }
    .products {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .prod-item {
            &.active {
                box-shadow: 5px 5px 10px #666, 0 0 10px red;
            }
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
            margin: 10px 0;
            box-shadow: 5px 5px 10px #666;
            transition: all 0.3s;
            img {
                width: 190px;
            }
            .prod.title {
                padding: 0 20px;
            }
            &:hover {
                transform: translate(0px, -5px);
                box-shadow: 5px 5px 10px #666, 0 0 10px orange;
                // background-color: orange;
            }
        }
    }
}

.prod-list.hidden {
    transform: translate(-100%, 0);
}
.scene-list.hidden {
    transform: translate(100%, 0);
}
.scene-list {
    &::-webkit-scrollbar {
        display: none;
    }
    overflow-y: scroll;

    width: 300px;
    height: 100vh;
    position: fixed;
    z-index: 10;
    transition: all 0.5s;
    padding: 60px 0 60px;
    top: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);

    h3 {
        font-size: 20px;
        font-weight: 700;
        padding: 0 30px;
    }
    .scene {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .scene-item {
        padding: 6px 0;
        text-align: center;
        &.active {
            img {
                box-shadow: 5px 5px 10px #666, 0 0 10px red;
            }
        }
        img {
            width: 250px;
            border-radius: 10px;
            box-shadow: 5px 5px 10px #666;
            transition: all 0.3s;
            &:hover {
                transform: translate(0, -5px);
                box-shadow: 5px 5px 10px #666, 0 0 10px orange;
            }
        }
    }
}

.desc-list {
    position: fixed;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.5);
    width: 600px;
    top: 60px;
    left: 50%;
    margin-left: -300px;
    transition: all 0.5s;
    padding: 15px;
    transform: translate(-100vw, 0);
}

.desc-list.active {
    transform: translate(0, 0);
}
#product {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}
</style>