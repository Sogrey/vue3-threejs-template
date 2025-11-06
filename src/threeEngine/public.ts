import { Scene, AxesHelper,Vector3 } from 'three';

export const addAxesHelper = (scene: Scene, center: Vector3|number[]=[0,0,0], size : number=10) => {
    if (scene) {
        if(Array.isArray(center))
            center = new Vector3(...center);
        const axesHelper = new AxesHelper(size);
        axesHelper.position.copy(center);
        scene.add(axesHelper);
    }
}
