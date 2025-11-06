<template>
  <div :id="viewId" class="ThreeViewContainer">
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

import Engine from '@/threeEngine';

const props = defineProps<{
  viewId?: string
}>()

const viewId = ref(props.viewId || 'defaultThreeViewContainer')

// 生命周期函数
onBeforeMount(() => {
  console.log('Scene.vue: onBeforeMount - 挂载开始之前');
})

onMounted(() => {
  console.log('Scene.vue: onMounted - 挂载完成');
  init(viewId.value);
})

onBeforeUpdate(() => {
  console.log('Scene.vue: onBeforeUpdate - 数据更新时，虚拟DOM重新渲染之前');
})

onUpdated(() => {
  console.log('Scene.vue: onUpdated - 数据更新后，虚拟DOM重新渲染完成');
})

onBeforeUnmount(() => {
  console.log('Scene.vue: onBeforeUnmount - 实例销毁之前');
})

onUnmounted(() => {
  console.log('Scene.vue: onUnmounted - 实例销毁完成');
})

// 方法
const init = async (viewId: string) => {

  let scene = Engine.init(viewId)
  Engine.Public.addAxesHelper(scene)
  Engine.Model.loadTestModel(scene)

}
</script>

<style scoped>
.ThreeViewContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
