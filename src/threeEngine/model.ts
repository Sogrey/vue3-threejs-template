import { Scene, BoxGeometry, MeshNormalMaterial, Mesh } from 'three';

export const loadTestModel = (scene: Scene) => {
    if (scene) {
        const geometry = new BoxGeometry(0.2, 0.2, 0.2);
        const material = new MeshNormalMaterial();

        const mesh = new Mesh(geometry, material);
        scene.add(mesh);
    }
}
