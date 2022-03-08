<template>
  <transition name="fade">
    <div id="lifang" ref="lifangdom"></div>
  </transition>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import gsap from "gsap";
import * as dat from "dat.gui";
import { RGBELoader } from "three/examples/jsm/loaders/rgbeloader";
const lifangdom = ref();

// 目标用pointes打造下雪
const scene = new THREE.Scene(); // 1.创建场景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
); //创建相机 角度、比例、近端、远端
camera.position.set(0, 0, 20); // 设置相机位置、x,y,z
scene.add(camera); // 把相机添加到场景

const cubeGem = new THREE.BoxBufferGeometry(1, 1, 1);
const materialcube = new THREE.MeshBasicMaterial({
  wireframe: true,
});
const redMater = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});
let cubeArr = [];
for (let i = -5; i < 5; i++) {
  for (let j = -5; j < 5; j++) {
    for (let z = -5; z < 5; z++) {
      const cube = new THREE.Mesh(cubeGem, materialcube);
      cube.position.set(i, j, z);
      cubeArr.push(cube);
      scene.add(cube);
    }
  }
}

// 创建投射光线对象
const raycaster = new THREE.Raycaster();
//鼠标位置对象
const mouse = new THREE.Vector2();
// 监听鼠标位置
// window.addEventListener("mousemove", (event) => {
//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
//   raycaster.setFromCamera(mouse, camera);
//   let result = raycaster.intersectObjects(cubeArr);
//   console.log(result);
//   if (result[0]) {
//     result[0].object.material = redMater;
//   }
// });
window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
  raycaster.setFromCamera(mouse, camera);
  let result = raycaster.intersectObjects(cubeArr);
  console.log(result);
  if (result[0]) {
    result[0].object.material = redMater;
  }
});
// 创建投射光线对象

const Light = new THREE.AmbientLight(0x00cccc, 1); // 创建环境光
scene.add(Light); // 环境光添加到场景
// const gui = new dat.GUI(); //创建gui调试器
// gui.add(Light, "intensity").min(0).max(1).step(0.01); // 调试器添加环境光强度
const renderer = new THREE.WebGL1Renderer(); // 初始化渲染器
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染的尺寸大小
onMounted(() => {
  console.log(lifangdom);
  lifangdom.value.appendChild(renderer.domElement); // 把渲染器添加到页面
});
renderer.render(scene, camera); // 使用渲染器，通过相机把场景渲染进来
// renderer.setClearColor("#ffffff", 1.0);
const controls = new OrbitControls(camera, renderer.domElement); // 创建轨道控制器
controls.enableDamping = true; // 设置控制器阻尼，滑动更真实, 必须在循环渲染设置 update
// const axesHelper = new THREE.AxesHelper(5); // 添加坐标轴辅助器
// scene.add(axesHelper); // 把这个坐标轴辅助器添加到场景
const clock = new THREE.Clock(); // 设置时钟
function render() {
  let time = clock.getElapsedTime();

  // controls.update(); // 轨道改变更新视图
  renderer.render(scene, camera); // 逐帧更新视图
  requestAnimationFrame(render);
} // RAF 渲染函数
render();
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight; // 更新摄像头比例
  camera.updateProjectionMatrix(); // 更新摄像机投影矩阵
  renderer.setSize(window.innerWidth, window.innerHeight); // 更新渲染器大小
  renderer.setPixelRatio(window.devicePixelRatio); // // 更新渲染器像素比
});
</script>
<style scoped>
#lifang {
  width: 100%;
}
</style>
