<template>
  <h2>home page</h2>
  <div>count: {{appStore.count}}</div>
  <div>countPow2: {{appStore.countPow2}}</div>
  <button @click="appStore.increment">count + 1</button>
  <button @click="appStore.decrease">count - 1</button>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/modules/app';

const appStore = useAppStore();
</script>