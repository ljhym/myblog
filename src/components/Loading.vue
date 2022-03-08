<template>
  <!-- <?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> -->
  <div class="box">
    <svg width="100" height="100" class="svg">
      <circle
        r="35"
        cy="50"
        cx="50"
        stroke-width="4"
        stroke="#EAEFF4"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
      />
      <circle
        class="svg2"
        r="35"
        cy="50"
        cx="50"
        stroke-width="4"
        stroke="#1593FF"
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        :stroke-dasharray="data.Progress + ',1000'"
      />
      <text x="50" y="55" text-anchor="middle" fill="#333">{{ data.num }}</text>
    </svg>
    <div class="textx">{{ prop.text }}</div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, reactive, watch } from "vue";
const prop = defineProps({
  Progress: 0,
  text: {
    default: "数据加载中...",
  },
});
const data = reactive({
  num: 0,
  Progress: 0,
});

watch(
  () => prop.Progress,
  (newVal, oldVal) => {
    console.log(newVal);
    let p = (35 * 2 * Math.PI * newVal) / 100
    data.Progress = p;
    if (p == 'Infinity') {
      data.num = '请稍后'
    } else {
      data.num = prop.Progress + '%'
    }
  }
);
onMounted(() => { });
</script>
<style scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
}

.svg2 {
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
}

.textx {
  padding-top: 10px;
  color: #333;
}
</style>
