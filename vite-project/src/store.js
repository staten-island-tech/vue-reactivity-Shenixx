import { reactive } from 'vue'

export const inCart = [];

export const cart = reactive({
  count: 0,
  increment() {
    this.count++
  }
})