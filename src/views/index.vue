<template>
  <h2 id="title">home page</h2>
  <div class="count">count: {{appStore.count}}</div>
  <div class="countPow2">countPow2: {{appStore.countPow2}}</div>
  <button @click="appStore.increment">count + 1</button>
  <button @click="appStore.decrease">count - 1</button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';
import { TestApi, MockGet, MockPost } from '@/api/test';

(async () => {
  // 测试封装的 axios
  const res1 = await TestApi();
  console.log('TestApi:', res1);

  const res2 = await MockGet();
  console.log('MockGet:', res2);

  const res3 = await MockPost();
  console.log('MockPost:', res3);
})()

const appStore = useAppStore();
</script>

<style lang="stylus" scoped>
  #title
    color: pink
</style>

<style lang="scss" scoped>
  $color: red;

  .count {
    color: $color;
  }
</style>

<style lang="less" scoped>
  @color: green;

  .countPow2 {
    color: @color;
  }
</style>