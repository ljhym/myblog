<template>
  <suspense>
    <template #fallback>
      <!-- <svgloadingVue></svgloadingVue> -->
    </template>
    <template #default>
      <HomeComasync></HomeComasync>
    </template>
  </suspense>
</template>
<script setup>
import { defineAsyncComponent } from "vue";
// import svgloadingVue from "../components/svgloading.vue";
const HomeComasync = defineAsyncComponent(() =>
  import("../components/HomeCom.vue")
);
// const data = reactive({
//   Isload: false,
// });
</script>
<style scoped>
#homedom {
  width: 100%;
}
</style>
