<template>
  <div class="canvas" ref="scrollpage"></div>

  <div id="xuehua">
    <div class="page page0">
      <h1>《王牌对王牌》回归</h1>
      <h3>吴彤晒合影播出倒计时</h3>
    </div>
    <div class="page page1">
      <h1>半熟恋人收官</h1>
      <h3>王彦霖要给罗拉王能能包红包开席</h3>
    </div>
    <div class="page page2">
      <h1>韩女星Jessi确诊新冠</h1>
      <h3>新综艺节目已三人相继感染</h3>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import gsap from "gsap";
import * as dat from "dat.gui";
const scrollpage = ref();

// 目标：全屏滚动特效
// 监听滚动事件
let currentPage = 0;
// 记录scrollY的位置
let scrollY = 0;

//创建gui对象
const gui = new dat.GUI();

// console.log(THREE);
// 初始化场景
const scene = new THREE.Scene();

// 创建透视相机
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerHeight / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置
// object3d具有position，属性是1个3维的向量
camera.position.set(0, 0, 6);
// 更新摄像头
camera.aspect = window.innerWidth / window.innerHeight;
//   更新摄像机的投影矩阵
camera.updateProjectionMatrix();
scene.add(camera);

// 加入辅助轴，帮助我们查看3维坐标轴
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// 加载纹理

// 创建加载管理器，管理加载数据
const loadingManager = new THREE.LoadingManager(
  () => {
    console.log("load");
  },
  (e, num, total) => {
    console.log("onPregress");
    console.log(e, num, total);
    console.log("纹理图片的加载进度：" + ((num / total) * 100).toFixed(2)) +
      "%";
  },
  () => {
    console.log("loaded");
  },
  (err) => {
    console.log("err");
  }
);
// console.log(loadingManager);
loadingManager.onStart = function () {
  console.log("loading start");
};
loadingManager.onError = function (e) {
  console.log("error");
  console.log(e);
};
// 创建纹理加载器对象
const textureLoader = new THREE.TextureLoader(loadingManager);

const alphaMap = textureLoader.load("images/texture/threeTone.jpg");
const alphaMap5 = textureLoader.load("images/texture/fiveTone.jpg");
const material = new THREE.MeshToonMaterial({
  color: "#ffffff",
});

// 创建3个物体添加到场景中
const geometry1 = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
const geometry2 = new THREE.CylinderGeometry(1, 1, 1, 32);
const geometry3 = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);

const mesh1 = new THREE.Mesh(geometry1, material);
const mesh2 = new THREE.Mesh(geometry2, material);
const mesh3 = new THREE.Mesh(geometry3, material);

scene.add(mesh1, mesh2, mesh3);

const meshArr = [mesh1, mesh2, mesh3];
meshArr.forEach((item, i) => {
  item.position.y = -i * 3;
  item.position.x = 1;
});

// 获取3个page对象
var pageList;

// 给物体打光
const directionLight = new THREE.DirectionalLight("#ffffff", 1);
directionLight.position.set(1, 1, 0);
scene.add(directionLight);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.BasicShadowMap;
// renderer.shadowMap.type = THREE.VSMShadowMap;

// 设置渲染尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

// 监听屏幕大小改变的变化，设置渲染的尺寸
window.addEventListener("resize", () => {
  //   console.log("resize");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();

  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比例
  renderer.setPixelRatio(window.devicePixelRatio);
});

// 设置双击显示全屏效果
window.addEventListener("dblclick", () => {
  // 判断现在是否是全屏
  // 判断是否有全屏对象
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;
  if (!fullscreenElement) {
    // console.log(renderer.domElement);
    // 使用canvas对象请求全屏
    if (renderer.domElement.requestFullscreen) {
      renderer.domElement.requestFullscreen();
    } else if (renderer.domElement.webkitRequestFullscreen) {
      renderer.domElement.webkitRequestFullscreen();
    }
  } else {
    //   使用document对象取消全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

// 将渲染器添加到body
onMounted(() => {
  scrollpage.value.appendChild(renderer.domElement); // 把渲染器添加到页面
  pageList = document.querySelectorAll(".page");
  console.log(pageList);
  animate();
});
// document.body.appendChild(renderer.domElement);

// // 初始化控制器
// const controls = new OrbitControls(camera, renderer.domElement);
// // 设置控制器阻尼
// controls.enableDamping = true;
// // 设置自动旋转
// controls.autoRotate = true;

const cursor = {};
cursor.x = 0;
cursor.y = 0;
cursor.clientX = 0;
cursor.clientY = 0;
// 监听鼠标事件
window.addEventListener("mousemove", (event) => {
  cursor.clientX = event.clientX;
  cursor.clientY = event.clientY;
  cursor.x = event.clientX / window.innerWidth - 0.5;
  cursor.y = event.clientY / window.innerHeight - 0.5;
});

const clock = new THREE.Clock();
function animate(t) {
  //   controls.update();
  const deltaTime = clock.getDelta();
  //   控制物体循环旋转
  for (const mesh of meshArr) {
    mesh.rotation.x += 0.1 * deltaTime;
    mesh.rotation.y += 0.1 * deltaTime;
  }

  // 控制相机的位置
  camera.position.y = -(scrollY / window.innerHeight) * 3;

  //   通过鼠标的位置，小幅度的修正摄像机的拍摄位置
  //   camera.position.x = cursor.x * 0.5;
  camera.position.x += (cursor.x * 0.5 - camera.position.x) * deltaTime * 5;

  // 文字的位置
  var txtPosition = { x: 0, y: 0 };
  txtPosition.x = cursor.x * 50;
  //   摇晃文字

  pageList[
    currentPage
  ].style.transform = `translate(${txtPosition.x}px,${txtPosition.y}px)`;

  requestAnimationFrame(animate);
  // 使用渲染器渲染相机看这个场景的内容渲染出来
  renderer.render(scene, camera);
}

window.addEventListener("scroll", (event) => {
  //   console.log(event);
  //   console.log(window.scrollY);
  scrollY = window.scrollY;
  const newSection = Math.round(window.scrollY / window.innerHeight);
  if (newSection != currentPage) {
    console.log("改变页数，当前是：", newSection);
    currentPage = newSection;
    gsap.to(meshArr[currentPage].rotation, {
      duration: 1.5,
      x: "+=" + Math.PI,
      z: "+=" + Math.PI,
      ease: "back.inOut(1.7)",
    });

    gsap.to(`.page${currentPage} h1`, {
      rotationZ: "+=360",
      duration: 1,
      ease: "back.inOut(1.7)",
    });
  }
});
</script>
<style scoped lang="less">
.canvas {
  position: fixed;
  top: 0;
  left: 0;
}
#xuehua {
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: #111;

  .page {
    display: flex;
    justify-content: center;
    height: 100vh;
    padding: 0 10%;
    color: #fff;
    flex-direction: column;
    h1 {
      margin: 60px 0;
      font-size: 40px;
      color: #fff;
    }
    h3 {
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
