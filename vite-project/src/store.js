import { reactive } from 'vue'

export const cart = reactive({
  count: 0,
  increment() {
    this.count++
    
  }
})