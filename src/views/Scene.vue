<template>
    <div id="scene">
        <div class="fix">鼠标上下滚动</div>
    </div>
</template>
<script setup>
import Base3d from '../utils/Base3d';
import { reactive, onMounted } from 'vue'
const data = reactive({
    base3d: {}
})
onMounted(() => {
    data.base3d = new Base3d('#scene')
})
</script>
<style scoped>

</style>