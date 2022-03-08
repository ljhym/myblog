<template>
    <div class="history">
        <h1>知识点记录</h1>
        <div class="allbox">
            <div class="hisitem" v-for="(item, index) in data.list">
                <div class="title">{{ index + 1 }}.{{ item.title }}</div>
                <img v-if="item.img" :src="item.img" class="itemimg" alt />
                <div v-if="item.content" class="content">{{ item.content }}</div>
            </div>
        </div>

        <div class="morebtn">
            <a-button type="primary" block size="large" @click="router.push('/morecode')">查看更多</a-button>
        </div>
    </div>
</template>
<script setup>
import list from '../../api/mycode';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

console.log(list)
const data = reactive({
    list: []
})
data.list = list
</script>
<style scoped lang="less">
.history {
    h1 {
        font-size: 30px;
        padding: 30px 0;
        text-align: center;
    }
    .allbox {
        width: 100%;
        display: block;
        margin: 0 auto;
        max-width: 750px;
        padding: 0 20px;
        .hisitem {
            margin-bottom: 30px;
            min-height: 100px;
            background-color: #fff;
            .title {
                font-size: 20px;
                font-weight: 700;
                padding: 0 10px;
                margin: 10px 0;
                position: relative;
            }
            .title::after {
                position: absolute;
                background-color: #c80000;
                width: 5px;
                height: 100%;
                content: " ";
                left: 0;
                top: 0;
            }
            .content {
                background-color: #f6f6f6;
                border-radius: 10px;
                font-size: 14px;
                color: #3a385d;
                padding: 10px;
            }
            .itemimg {
                width: 100%;
                margin: 10px;
            }
        }
    }
}
.morebtn {
    width: 750px;
    margin: 0 auto;
}
</style>