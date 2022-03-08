import * as THREE from 'three'
import { RGBELoader } from "three/examples/jsm/loaders/rgbeloader";
import { OrbitControls } from "three/examples/jsm/controls/orbitcontrols";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
class Base3d {
    constructor(selector, onFinish) {
        this.container = document.querySelector(selector)
        this.camera;
        this.scene;
        this.renderer;
        this.panzi;
        this.model;
        this.mixer
        this.onFinish = onFinish
        this.clock = new THREE.Clock()
        this.init();
        this.progressFn
    }
    init() {
        this.initSence()// 1.初始化场景
        this.initCamera()// 2.初始化相机
        this.initRender()// 3.初始化渲染器
        this.initControls()// 4.控制器
        this.render();// 5.循环更新视图
        this.addMesh()// 6.添加物体
        this.setLight()
        window.addEventListener('resize', this.onWindowResize.bind(this))// 7.监听屏幕变化
    }
    initSence() {
        this.scene = new THREE.Scene()
        this.setEnvMap('000')
    }
    setEnvMap(hdr) {
        new RGBELoader().setPath('./files/hdr/').load(hdr + '.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping
            this.scene.background = texture
            this.scene.environment = texture
        })
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.2,
            200
        )
        this.camera.position.set(-1.8, 1.6, 2.7)
    }
    initRender() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,// 1.抗锯齿
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)// 2.设置屏幕像素比
        this.renderer.setSize(window.innerWidth, window.innerHeight)// 3。设置渲染尺寸
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping// 4.色调映射
        this.renderer.toneMappingExposure = 2// 5.曝光程度
        this.container.appendChild(this.renderer.domElement)//6.把渲染的元素添加到页面
        this.renderer.setClearColor("#ffffff", 1.0);// 7.设置背景颜色
    }
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.controls.enableDamping = true;
    }
    render() {
        requestAnimationFrame(this.render.bind(this))
        this.renderer.render(this.scene, this.camera)
    }
    setLight() {
        // 不开环境光，物体黑色
        const light = new THREE.AmbientLight(0xffffff, 0.5); // 创建环境光
        this.scene.add(light); // 环境光添加到场景
    }
    setModel(modelName) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader().setPath('files/gltf/')
            loader.load(modelName, (gltf) => {
                this.model && this.model.removeFromParent()
                this.model = gltf.scene.children[0]
                this.scene.add(this.model)
                if (modelName == 'bag2.glb' && !this.panzi) {
                    this.scene.add(gltf.scene)
                    this.spotlight1 = gltf.scene.children[2].children[0]
                    this.spotlight1.intensity = 1
                    this.spotlight2 = gltf.scene.children[3].children[0]
                    this.spotlight2.intensity = 1
                    this.spotlight3 = gltf.scene.children[1].children[0]
                    this.spotlight3.intensity = 1
                }
                resolve(gltf)
            }, (e) => {
                if (this.progressFn) {
                    this.progressFn(e)
                }
            })
        })
    }
    onProgress(fn) {
        this.progressFn = fn
    }
    async addMesh() {
        let res = await this.setModel('shoes.glb')
        if (this.onFinish) {
            this.onFinish(res)
        }
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
}
export default Base3d