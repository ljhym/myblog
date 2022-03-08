<template>
  <!-- <HeaderVue></HeaderVue> -->
  <svgloadingVue v-if="store.state.showpageloading"></svgloadingVue>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup>
import svgloadingVue from './components/svgloading.vue';
// import HeaderVue from './components/Header.vue';
import store from './store/index'


</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  min-width: 1200px;
}
/* html::-webkit-scrollbar {
  display: none;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

body .ant-menu-sub .ant-menu-item {
  height: auto;
}
.ant-menu-sub .ant-menu-item .prod-item {
  display: flex;
  width: 400px;
  justify-content: space-between;
}
.ant-menu .prod-item img {
  width: 100px;
  height: 100px;
}
.ant-menu-item .prod-item .middle {
  width: 220px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ant-menu-item .prod-item .middle .title {
  font-size: 16px;
  font-weight: 900;
}
.ant-menu-item .prod-item .middle .content {
  display: flex;
  justify-content: space-between;
}
.ant-menu-item .prod-item .middle .btn {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #ccc;
  margin: 0 5px;
}
.ant-menu-item .prod-item .right .price {
  font-weight: 900;
  color: orange;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ant-menu-item .total {
  font-weight: 900;
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
}
.ant-menu-item .total .num {
  color: orange;
  padding-right: 20px;
}

.fix {
  position: fixed;
  font-size: 20px;
  color: red;
  background-color: yellow;
  text-align: center;
  top: 10px;
  left: 0;
  right: 0;
  padding: 10px 20px;
  width: max-content;
  margin: 0 auto;
}
</style>
