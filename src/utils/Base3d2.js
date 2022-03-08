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
        this.animate();
        this.progressFn
    }
    init() {
        this.initSence()// 初始化场景
        this.initCamera()// 初始化相机
        this.initRender()// 初始化渲染器
        // this.initControls()// 控制器
        this.addMesh()// 添加物体
        window.addEventListener('resize', this.onWindowResize.bind(this))
        this.container.addEventListener('mousewheel', this.onMouseWheel.bind(this))
    }
    initSence() {
        this.scene = new THREE.Scene()
        this.setEnvMap('000')
    }
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.2,
            200
        )
        this.camera.position.set(-1.8, 0.6, 2.7)
    }
    initRender() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,// 抗锯齿
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)// 设置屏幕像素比
        this.renderer.setSize(window.innerWidth, window.innerHeight)// 设置渲染尺寸
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping// 色调映射
        this.renderer.toneMappingExposure = 2// 曝光程度
        this.container.appendChild(this.renderer.domElement)
    }
    setEnvMap(hdr) {
        new RGBELoader().setPath('./files/hdr/').load(hdr + '.hdr', (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping
            this.scene.background = texture
            this.scene.environment = texture
        })
    }
    render() {
        var delta = this.clock.getDelta()
        this.mixer && this.mixer.update(delta)
        this.renderer.render(this.scene, this.camera)
    }
    animate() {
        this.renderer.setAnimationLoop(this.render.bind(this))
    }
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    }
    setModel(modelName) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader().setPath('files/gltf/')
            loader.load(modelName, (gltf) => {
                this.model && this.model.removeFromParent()
                // console.log(gltf)
                this.model = gltf.scene.children[0]
                this.scene.add(this.model)
                if (modelName == 'bag2.glb' && !this.panzi) {
                    // this.panzi = gltf.scene.children[4]
                    this.scene.add(gltf.scene)
                    this.camera = gltf.cameras[0]
                    this.mixer = new THREE.AnimationMixer(gltf.scene.children[0])
                    this.animateAction = this.mixer.clipAction(gltf.animations[0])
                    this.animateAction.setDuration(20).setLoop(THREE.LoopOnce)
                    this.animateAction.clampWhenFinished = true
                    // this.animateAction.play()
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
        let res = await this.setModel('bag2.glb')
        if (this.onFinish) {
            this.onFinish(res)
        }
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
    onMouseWheel(e) {
        // console.log(this.animateAction)
        let timeScale = e.deltaY > 0 ? 1 : -1;
        this.animateAction.setEffectiveTimeScale(timeScale)
        this.animateAction.paused = false;
        this.animateAction.play()
        if (this.timeoutid) {
            clearTimeout(this.timeoutid)
        }
        this.timeoutid = setTimeout(() => {
            this.animateAction.halt(0.5)
        }, 300);
    }

}
export default Base3d