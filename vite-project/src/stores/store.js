import { reactive } from 'vue'



export const store = reactive({
  store: [],
  count: 0,
  increment() {
    this.count++
    store.push(this.count)
  }
})