<template>
  <div class="homepage">
    <HomeSwiperVue :banner="data.banner"></HomeSwiperVue>
    <HostoryproVue></HostoryproVue>
    <div class="live">
      <h1>我的兴趣爱好</h1>
      <div class="live-list">
        <div class="live-item" v-for="index in 10" v-if="data.sports.length != 0">
          <div class="live-btn">
            <img :src="data.sports[index].menuThumbnail" :alt="data.sports[index].displayName" />
            <h3>{{ data.sports[index].displayName }}</h3>
          </div>
        </div>
      </div>
      <a-button type="primary" size="large" @click="router.push('/product2')">查看商品</a-button>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import HomeSwiperVue from "./Home/HomeSwiper.vue";
import * as api from "../api/index";
import { useRouter } from 'vue-router'
import HostoryproVue from "./Home/Hostorypro.vue";
// const data = reactive({
//   alldata: {},
// });
const router = useRouter()
let result = await api.getHomepage();
let data = reactive({
  banner: result.banner,
  sports: result.sports
});
console.log(result);
</script>
<style scoped lang="less">
#homepage {
  width: 100%;
}

.live {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  padding-bottom: 40px;
  h1 {
    font-size: 30px;
    padding: 30px 0;
  }
  .live-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .live-item {
      width: 240px;
    }
    .live-btn {
      display: flex;
      height: 73px;
      width: 200px;
      background-color: #fff;
      border-radius: 8px 8px 25px 8px;
      margin-bottom: 30px;
      box-shadow: 5px 5px 5px #ccc;
      align-items: center;
      font-size: 13px;
      justify-content: center;
      position: relative;
      img {
        position: absolute;
        width: 80px;
        height: 80px;
        left: -15px;
        top: -15px;
      }
      h3 {
        font-weight: 700;
      }
    }
  }
}
</style>
