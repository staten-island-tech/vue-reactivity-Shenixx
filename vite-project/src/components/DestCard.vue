<template>
  <div>
    <h2>{{ Candy.name }}</h2>
    <img :src="Candy.img" alt= "" />
    <h3>{{ Candy.price }}</h3>
    <!-- <h3>{{ clicked }}</h3>
    <button @click="increment">Click Me</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  Candy: Object,
});



//clicker logic
let clicked = ref(0);
function increment() {
  clicked.value++;
}
</script>

<style scoped>
img {
  width: 400px;
  height: 300px;
  object-fit: cover;
}
</style>