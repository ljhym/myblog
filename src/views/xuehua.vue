<template>
  <transition name="fade">
    <div id="xuehua" ref="xuehuadom">
      <audio id="myaudio" controls src="music/187831236.mp3"></audio>
    </div>
  </transition>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import gsap from "gsap";
import * as dat from "dat.gui";
import { RGBELoader } from "three/examples/jsm/loaders/rgbeloader";
const xuehuadom = ref();

const scene = new THREE.Scene(); // 1.创建场景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  20
); //创建相机 角度、比例、近端、远端
camera.position.set(0, 0, 20); // 设置相机位置、x,y,z
scene.add(camera); // 把相机添加到场景

function createPoints(url, size = 0.5) {
  const partsMaster = new THREE.BufferGeometry();
  const count = 3000;

  // 设置缓冲区
  const positions = new Float32Array(count * 3);
  // 设置顶点颜色
  const colors = new Float32Array(count * 3);
  // 设置顶点
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 40;
    colors[i] = Math.random();
  }
  partsMaster.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  partsMaster.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.5,
    // color: 0xfff000,
  });
  // pointsMaterial.sizeAttenuation = false; // true近大远小,false一样大

  const textureLoader = new THREE.TextureLoader();

  const texture = textureLoader.load(`/images/particles/${url}.png`); // 导入纹理
  pointsMaterial.map = texture; // 设置纹理
  pointsMaterial.transparent = true; // 允许透明
  pointsMaterial.alphaMap = texture; // 透明纹理，黑色透明，白色不透明
  pointsMaterial.depthWrite = false; // 两个点重叠更亮，需设置叠加算法
  pointsMaterial.blending = THREE.AdditiveBlending; // 叠加算法，亮度相加
  pointsMaterial.vertexColors = true; // 启用设置的顶点颜色
  const points = new THREE.Points(partsMaster, pointsMaterial);
  scene.add(points);
  return points;
}

const points = createPoints("xh", 0.7);
const points2 = createPoints("5", 0.3);
const points3 = createPoints("9", 0.3);

const Light = new THREE.AmbientLight(0x00cccc, 1); // 创建环境光
scene.add(Light); // 环境光添加到场景
// const gui = new dat.GUI(); //创建gui调试器
// gui.add(Light, "intensity").min(0).max(1).step(0.01); // 调试器添加环境光强度
const renderer = new THREE.WebGL1Renderer(); // 初始化渲染器
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染的尺寸大小
onMounted(() => {
  console.log(xuehuadom);
  xuehuadom.value.appendChild(renderer.domElement); // 把渲染器添加到页面
  document.getElementById("myaudio").volume = 0.05;
});
renderer.render(scene, camera); // 使用渲染器，通过相机把场景渲染进来
// renderer.setClearColor("#ffffff", 1.0);
// const controls = new OrbitControls(camera, renderer.domElement); // 创建轨道控制器
// controls.enableDamping = true; // 设置控制器阻尼，滑动更真实, 必须在循环渲染设置 update
// const axesHelper = new THREE.AxesHelper(5); // 添加坐标轴辅助器
// scene.add(axesHelper); // 把这个坐标轴辅助器添加到场景
const clock = new THREE.Clock(); // 设置时钟
function render() {
  let time = clock.getElapsedTime();
  points.rotation.x = time * 0.3;
  points2.rotation.x = time * 0.3;
  points2.rotation.y = time * 0.08;
  points3.rotation.x = time * 0.3;
  points3.rotation.y = time * 0.02;

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
#xuehua {
  width: 100%;
  position: relative;
}
#myaudio {
  position: fixed;
  top: 20px;
  left: 0;
  margin: auto;
  right: 0;
}
*::-webkit-scrollbar {
  display: none;
}
</style>
