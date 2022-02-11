import { defineStore } from 'pinia';

interface AppState {
  count: number;
}

export const useAppStore = defineStore({
  // 必填项，store 唯一标识
  id: 'app',
  state: (): AppState => ({
    count: 0
  }),
  getters: {
    countPow2(): number {
      return this.count ** 2;
    }
  },
  actions: {
    increment() {
      this.count++;
    },
    decrease() {
      this.count--;
    }
  }
});
