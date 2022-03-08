<template>
    <div class="beaderbgs" :class="{ hidden: store.state.isFullscreen }"></div>
    <div class="header" :class="{ hidden: store.state.isFullscreen }">
        <div class="logo" @click="router.push('/')">
            <img src="../assets/images/logo_rect.jpg" alt />
        </div>
        <a-input-search
            v-model:value="data.value"
            placeholder="搜索商品"
            class="input-search"
            @search="onSearch"
        />
        <a-menu v-model:selectedKeys="data.current" mode="horizontal">
            <a-menu-item key="help">
                <template #icon>
                    <question-circle-filled />
                </template>
                帮助
            </a-menu-item>
            <a-menu-item key="salesroom">
                <template #icon>
                    <taobao-circle-outlined />
                    
                </template>
                门店
            </a-menu-item>
            <a-sub-menu key="account">
                <template #icon>
                    <twitter-circle-filled />
                </template>
                <template #title>账户</template>
            </a-sub-menu>
            <a-sub-menu key="buycart">
                <template #icon>
                    <dropbox-circle-filled />
                </template>
                <template #title>购物车</template>
                <a-menu-item-group title="购物商品">
                    <a-menu-item v-for="(item, i) in store.state.buycarts" :key="item.id">
                        <div class="prod-item">
                            <div class="left">
                                <img :src="item.imgsrc" :alt="item.title" />
                            </div>
                            <div class="middle">
                                <div class="title">{{ item.title }}</div>
                                <div class="content">
                                    <span class="num">数量：{{ item.num }}</span>
                                    <div class="control">
                                        <span
                                            class="btn"
                                            @click.stop="store.commit('addBuycartsNum', i)"
                                        >+</span>
                                        <span
                                            class="btn"
                                            @click.stop="store.commit('minusBuycartsNum', i)"
                                        >-</span>
                                    </div>
                                </div>
                            </div>
                            <div class="right">
                                <div class="price">¥ {{ item.price * item.num }}</div>
                            </div>
                        </div>
                    </a-menu-item>
                    <a-menu-item key="totalPrice">
                        <div class="total">
                            <span>总价：</span>
                            <span class="num">¥ {{ store.getters.totalPrice }}</span>
                        </div>
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
import { QuestionCircleFilled, TaobaoCircleOutlined, DropboxCircleFilled, TwitterCircleFilled } from '@ant-design/icons-vue';
import { reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const router = useRouter()
const data = reactive({
    value: '',
    current: ['help']
})
const onSearch = () => { }
</script>
<style scoped lang="less">
.beaderbgs {
    height: 46px;
    transition: all 0.5s;
}

.header {
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10000;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px #f0f0f0;
    transition: all 0.5s;
    .logo {
        margin-right: 40px;
        img {
            height: 30px;
        }
    }
}
.input-search {
    flex: 1;
}
.beaderbgs.hidden {
    height: 0;
}
.header.hidden {
    transform: translate(0, -100%);
}
</style>
