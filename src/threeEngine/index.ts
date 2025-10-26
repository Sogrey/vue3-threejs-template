import configs from '@/configs';
import utils from '@/utils';
import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshNormalMaterial, Mesh } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import * as Camera from './camera';
import * as Model from './model';

class ThreeEngine {
    public scene: Scene | null = null;
    public camera: PerspectiveCamera | null = null;
    public renderer: WebGLRenderer | null = null;
    public containerEle: HTMLElement | null = null;
    public controls: OrbitControls | null = null;

    // 主功能：初始化
    init(viewId: string, options = {}) {
        const _that = this;
        const width = window.innerWidth, height = window.innerHeight;

        // init
        _that.camera = new PerspectiveCamera(70, width / height, 0.01, 10);
        _that.camera.position.z = 1;

        _that.scene = new Scene();

        _that.renderer = new WebGLRenderer({ antialias: true });
        _that.renderer.setSize(width, height);
        _that.renderer.setAnimationLoop(animate);

        _that.controls = new OrbitControls(_that.camera, _that.renderer.domElement);
        _that.controls.update();

        // onresize 事件会在窗口被调整大小时发生
        window.onresize = function () {
            // 重置渲染器输出画布canvas尺寸
            _that.renderer?.setSize(window.innerWidth, window.innerHeight);
            // 全屏情况下：设置观察范围长宽比aspect为窗口宽高比
            _that.camera && (_that.camera.aspect = window.innerWidth / window.innerHeight);
            // 渲染器执行render方法的时候会读取相机对象的投影矩阵属性projectionMatrix
            // 但是不会每渲染一帧，就通过相机的属性计算投影矩阵(节约计算资源)
            // 如果相机的一些属性发生了变化，需要执行updateProjectionMatrix ()方法更新相机的投影矩阵
            _that.camera?.updateProjectionMatrix();
        };

        // 将渲染器挂载到页面中
        _that.containerEle = document.getElementById(viewId)
        _that.containerEle?.appendChild(_that.renderer.domElement)

        // animation
        function animate(time: number) {
            _that.controls?.update();
            _that.scene && _that.camera && _that.renderer?.render(_that.scene, _that.camera);
        }

        return this.scene!!
    }

    // 各功能模块命名空间导出
    public Camera = Camera;
    public Model = Model;
}

export default new ThreeEngine();

