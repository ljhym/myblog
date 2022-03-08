<template>
  <transition name="fade">
    <Loading v-if="!data.Isload" text="3D模型加载中..." :Progress="data.Progress"></Loading>
  </transition>

  <transition name="fade">
    <div v-show="data.Isload" id="homedom" ref="canvasdom"></div>
  </transition>
</template> 
<script setup>
import * as api from "../api/index";
import { ref, onMounted, reactive } from "vue";
import Loading from "../components/Loading.vue";
import router from "../router";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import gsap from "gsap";
import * as dat from "dat.gui";
import { RGBELoader } from "three/examples/jsm/loaders/rgbeloader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"; // 导入轨道控制器
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"; //

const getdata = async () => {
  let res = await api.getHomepage();
  console.log(res);
};
getdata();

const canvasdom = ref();
const data = reactive({
  Isload: false,
  Progress: 0,
});
// 1.创建场景
const scene = new THREE.Scene();

// 2、创建相机 角度、比例、近端、远端
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let MYTEXT = "My Blog";
// 设置相机位置、x,y,z
camera.position.set(0, 10, 10);

setTimeout(() => { }, 1200);

// 把相机添加到场景
scene.add(camera);

// 全局加载监听器
let event = {};
event.onLoad = function (e) {
  // console.log("加载完成", e);
};
event.onProgress = function (url, num, total) {
  // console.log("地址", url);
  // console.log("数量", num);
  // console.log("总数", total);
  // console.log("进度", ((num / total) * 100).toFixed(2) + "%");
  data.Progress = ((num / total) * 100).toFixed(2) - 0;
  // console.log(data.Progress);

  if (((num / total) * 100).toFixed(2) == "100.00") {
    data.Isload = true;
  }
};
event.onError = function (e) {
  data.Isload = true;
  // console.log("加载完成", e);
};
const manager = new THREE.LoadingManager(
  event.onLoad,
  event.onProgress,
  event.onError
);
// 全局加载监听器

const cubetextload = new THREE.CubeTextureLoader(manager);
const envMapdata = cubetextload.load([
  "images/environmentMaps/1/px.jpg",
  "images/environmentMaps/1/nx.jpg",
  "images/environmentMaps/1/py.jpg",
  "images/environmentMaps/1/ny.jpg",
  "images/environmentMaps/1/pz.jpg",
  "images/environmentMaps/1/nz.jpg",
]);

// 再加一个平面
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  transparent: true, // 允许透明
  opacity: 0.2,
  depthWrite: false,
});
// basicMaterial.side = THREE.DoubleSide;
const planeGeomentry = new THREE.PlaneBufferGeometry(70, 70, 200, 200);
const plane = new THREE.Mesh(planeGeomentry, basicMaterial);
plane.position.set(0, 0, 0);
plane.rotation.x = -Math.PI / 2;
// plane
scene.add(plane);

// 四周平面
let fourplanArr = [];
[1, 2, 3, 4].forEach((i) => {
  const basicMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true, // 允许透明
    opacity: 0.5,
    depthWrite: false,
  });
  basicMaterial.side = THREE.DoubleSide;

  const planeGeomentry = new THREE.PlaneBufferGeometry(70, 2, 200, 200);
  const plane = new THREE.Mesh(planeGeomentry, basicMaterial);
  if (i == 1) {
    plane.position.set(0, 1, -35);
  } else if (i == 2) {
    plane.position.set(-35, 1, 0);
    plane.rotation.y = Math.PI / 2;
  } else if (i == 3) {
    plane.position.set(0, 1, 35);
    plane.rotation.y = -Math.PI;
  } else if (i == 4) {
    plane.position.set(35, 1, 0);
    plane.rotation.y = -Math.PI / 2;
  }
  // plane.position.set(0, 0, 0);
  // plane.rotation.x = -Math.PI / 2;
  scene.add(plane);
  fourplanArr.push(plane);
});
// 四周平面

// 画格子
var grid = new THREE.GridHelper(70, 20, 0xffffff, 0xffffff);
grid.material.opacity = 0.5;
grid.material.transparent = true;
grid.position.y = 0.005;
scene.add(grid);
// 画格子

// function Words(x, y, z) {
//   const boxScale = { x: 25, y: 3, z: 2 };
//   let quat = { x: 0, y: 0, z: 0, w: 1 };
//   let mass = 0; //mass of zero = infinite mass

//   const linkBox = new THREE.Mesh(
//     new THREE.BoxBufferGeometry(boxScale.x, boxScale.y, boxScale.z),
//     new THREE.MeshPhongMaterial({
//       color: 0xff6600,
//     })
//   );

//   linkBox.position.set(x, y, z);
//   linkBox.castShadow = true;
//   linkBox.receiveShadow = true;
//   objectsWithLinks.push(linkBox.uuid);

//   addRigidPhysics(linkBox, boxScale);
// }

// 画文字
function loadRyanText() {
  var text_loader = new FontLoader();
  // console.log(text_loader);
  text_loader.load("fonts/Poppins_Regular.json", function (font) {
    var xMid, text;

    var color = 0xfffc00;

    var textMaterials = [
      new THREE.MeshBasicMaterial({ color: color }), // front
      new THREE.MeshPhongMaterial({ color: color }), // side
    ];

    var geometry = new TextGeometry(MYTEXT, {
      font: font,
      size: 3,
      height: 0.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.11,
      bevelOffset: 0,
      bevelSegments: 1,
    });

    geometry.computeBoundingBox();
    geometry.computeVertexNormals();

    xMid = -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

    geometry.translate(xMid, 0, 0);

    // var textGeo = new THREE.BufferGeometry().fromGeometry(geometry);

    text = new THREE.Mesh(geometry, textMaterials);
    text.position.z = -10;
    text.position.y = 8;
    text.receiveShadow = true;
    text.castShadow = true;
    scene.add(text);
  });
}
loadRyanText();
// 画文字

// 银河系
const params = {
  count: 20000,
  size: 0.3,
  radius: 60,
  branch: 10,
  color: "#ff6030",
  endColor: "#1b3984",
  rotateScale: 0.3,
};

const textureLoader = new THREE.TextureLoader();
const parthMap = textureLoader.load("images/particles/1.png");

var geometry = null;
var yhematerial = null;
var points = null;
const centerColor = new THREE.Color(params.color);
const endColor = new THREE.Color(params.endcolor);
const generateGalaxy = () => {
  // 生成顶点
  geometry = new THREE.BufferGeometry();
  // 随机生成位置
  const positions = new Float32Array(params.count * 3);
  //设置顶点颜色
  const colors = new Float32Array(params.count * 3);
  // 循环生成点

  for (let i = 0; i < params.count; i++) {
    const branchAngle = (i % params.branch) * ((2 * Math.PI) / params.branch); // 角度
    const distance = Math.random() * params.radius * Math.pow(Math.random(), 3); //当前点的距离
    const current = i * 3;

    const randomX =
      (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) /
      params.radius;
    const randomY =
      (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) /
      params.radius;
    const randomZ =
      (Math.pow(Math.random() * 2 - 1, 3) * (params.radius - distance)) /
      params.radius;

    positions[current] =
      Math.cos(branchAngle + distance * params.rotateScale) * distance +
      randomX;
    positions[current + 1] = 0 + randomY - 10;
    positions[current + 2] =
      Math.sin(branchAngle + distance * params.rotateScale) * distance +
      randomZ;

    const mixColor = centerColor.clone();
    mixColor.lerp(endColor, distance / params.radius);
    colors[current] = mixColor.r;
    colors[current + 1] = mixColor.g;
    colors[current + 2] = mixColor.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  //设置材质
  yhematerial = new THREE.PointsMaterial({
    // color: new THREE.Color(params.color),
    size: params.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    map: parthMap,
    vertexColors: true,
    transparent: true,
  });
  points = new THREE.Points(geometry, yhematerial);
  scene.add(points);
};
generateGalaxy();
// 银河系

// 创建球体-几何体
const sphereGemen = new THREE.SphereBufferGeometry(1, 20, 20);
// 设置材质
const material = new THREE.MeshBasicMaterial({
  // const material = new THREE.MeshStandardMaterial({
  metalness: 0.1, // 设置为金属，等于1,金属很黑,
  roughness: 0.1, // 光滑度
  envMap: envMapdata, // 把图片放进来
  // map: envMapdata,
});
// 创建物体
const spehere = new THREE.Mesh(sphereGemen, material);
spehere.position.y = 1;
// 把球放到场景
// scene.add(spehere);

// 添加环境贴图
scene.background = envMapdata;

// 画一些平面图片
let tupian = [];

function drawImg(x, y, z, url, obj, tourl) {
  const planeGeomentry1 = new THREE.PlaneBufferGeometry(13.6, 4);
  const buliao = textureLoader.load(url);
  const basicMaterial = new THREE.MeshBasicMaterial({
    map: buliao,
    side: THREE.DoubleSide,

    // color: "#000000",
  });
  const plane = new THREE.Mesh(planeGeomentry1, basicMaterial);
  if (tourl) {
    plane.url = tourl;
    console.log(tourl);
  }
  plane.position.set(x, y, z);
  plane.rotation.x = obj.rx;
  plane.rotation.y = obj.ry;
  // plane
  tupian.push(plane);
  scene.add(plane);
  return plane;
}
drawImg(
  -20,
  2,
  0,
  "/images/home/3D立方体1.png",
  { rx: 0, ry: Math.PI / 2 },
  "lifang"
);
drawImg(
  0,
  2,
  -20,
  "/images/home/漫天飞舞雪花1.png",
  { rx: 0, ry: 0 },
  "xuehua"
);
drawImg(
  20,
  2,
  0,
  "/images/home/切屏滚动1.png",
  { rx: 0, ry: -Math.PI / 2 },
  "scrollpage"
);
drawImg(
  0,
  2,
  20,
  "/images/home/games2.png",
  { rx: 0, ry: Math.PI },
  "playgame"
);
// 画一些平面图片
console.log(tupian);
// 创建投射光线对象
const raycaster = new THREE.Raycaster();
//鼠标位置对象
const mouse = new THREE.Vector2();
tupian.push(plane);

// 创建投射光线对象

// 小球位置移动
function Barto(obj) {
  if (!obj) return;
  gsap.to(spehere.position, {
    x: obj.toX,
    duration: 3,
  });
  gsap.to(spehere.position, {
    z: obj.toZ,
    duration: 3,
  });
  let targetPos = new THREE.Vector3(obj.toX, 10, obj.toZ + 20);
  var camPos = new THREE.Vector3(
    camera.position.x,
    camera.position.y,
    camera.position.z
  );
  camPos.lerp(targetPos, 0.033);

  // camera.position.copy(camPos);
  camera.lookAt(spehere.position);
  // gsap.to(camera.position, {
  //   x: obj.toX,
  //   duration: 3,
  // });
  // gsap.to(camera.position, {
  //   z: obj.toZ,
  //   duration: 3,
  // });
  // controls.target = {
  //   x: obj.toX,
  //   y: 20,
  //   z: obj.toZ,
  // };
  // camera.position.set(0, 10, 20);
  // spehere.position.x = result[0].point.x;
  // spehere.position.z = result[0].point.z;
}
// 小球位置移动

// 不开环境光，物体黑色
// const light = new THREE.AmbientLight(0xffffff, 0.5); // 创建环境光
// scene.add(light); // 环境光添加到场景

// 平行光、太阳光
// const directionalLight = new THREE.DirectionalLight(0xffffff);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-30, 100, 20); // 设置太阳光之后，背后黑色
scene.add(directionalLight);

// 初始化渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

// 把渲染器添加到页面
onMounted(() => {
  // console.log(canvasdom);
  canvasdom.value.appendChild(renderer.domElement); // 把渲染器添加到页面

  canvasdom.value.addEventListener("click", (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);
    raycaster.setFromCamera(mouse, camera);
    let result = raycaster.intersectObjects(tupian);
    console.log(result);
    if (result[0] && result[0].object.url) {
      console.log(result[0].object.url);
      router.push({ name: result[0].object.url });
      return;
    }
    if (result[0] && result[0].point.x) {
      // Barto({ toX: result[0].point.x, toZ: result[0].point.z });
    }
  });
});

// 使用渲染器，通过相机把场景渲染进来
renderer.render(scene, camera);
// renderer.setClearColor("#ffffff", 1.0);
// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);
// 设置控制器阻尼，滑动更真实, 必须在循环渲染设置 update
controls.enableDamping = true;

// 添加坐标轴辅助器
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper); // 把这个坐标轴辅助器添加到场景

// 设置时钟
const clock = new THREE.Clock();

// 设置动画 修改cube.position 的 x 改为 5 ，时间为 5 s
// var animate1 = gsap.to(cube.position, {
//   x: 5,
//   duration: 5,
//   repeat: -1, // 重复 2 次 ， -1 为无限循环
//   yoyo: true, // 往返运动
//   ease: "circ.inOut",
//   onComplete: () => {
//     console.log("动画完成了");
//   },
//   onStart: () => {
//     console.log("动画开始");
//   },
// });
// 设置动画效果 https://greensock.com/get-started/#easing
// gsap.to(cube.rotation, { x: 2 * Math.PI, duration: 5 });

window.addEventListener("dblclick", () => {
  // 双击控制全屏
  const fullElement = document.fullscreenElement;
  if (!fullElement) {
    renderer.domElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

function render() {
  let time = clock.getElapsedTime();
  // controls.update();
  points.rotation.y = time * 0.3;
  renderer.render(scene, camera); // 重新渲染
  requestAnimationFrame(render); // 使用AFR 请求动画帧 逐帧渲染
}

render();

// 画面大小更改，重新设置画面
window.addEventListener("resize", () => {
  console.log("resize");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  // 更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
});
</script>
<style scoped>
#homedom {
  width: 100%;
}
</style>
