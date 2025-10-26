import { Camera, Vector3 } from 'three';

export const lookAt = (camera: Camera, direction: Vector3 | number[], target: Vector3 | number[]) => {
    if (Array.isArray(direction)) {
        direction = new Vector3(...direction);    // 设置方向向量    
    }
    camera.lookAt(camera.position.clone().add(direction)); // 相机沿指定方向看
    camera.updateMatrixWorld(); // 更新相机矩阵
}

export const lookAtDirection = (camera: Camera, direction: Vector3 | number[]) => {
    if (Array.isArray(direction)) {
        direction = new Vector3(...direction);    // 设置方向向量    
    }
    camera.lookAt(camera.position.clone().add(direction)); // 相机沿指定方向看
    camera.updateMatrixWorld(); // 更新相机矩阵
}

export const lookAtPosition = (camera: Camera, position: Vector3 | number[]) => {
    if (Array.isArray(position)) {
        position = new Vector3(...position);    // 设置方向向量    
    }
    camera.lookAt(position); // 相机沿指定方向看
    camera.updateMatrixWorld(); // 更新相机矩阵
}

export const lookAtTarget = (camera: Camera, target: Vector3 | number[]) => {
    if (Array.isArray(target)) {
        target = new Vector3(...target);    // 设置方向向量    
    }
    camera.lookAt(target); // 相机沿指定方向看
    camera.updateMatrixWorld(); // 更新相机矩阵
}