<template>
  <el-config-provider size="small" :zIndex="zIndex">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElConfigProvider } from 'element-plus';
import 'element-plus/dist/index.css';

const zIndex = ref<number>(3000);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
