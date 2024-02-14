<template>
      <div class = "card">
      <h2>{{ Candy.name }}</h2>
      <img :src="Candy.img" alt= "" />
      <h3>{{ Candy.price }}</h3>
      <h3>{{ clicked }}</h3>
      <button @click="increment">Click Me</button>
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
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  object-fit: cover;
}

card {
  font-family: Mukta;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 26%;
  height: 35%;
  /* color: var(--seconary);
  background-color: var(--primary1);
  border: 1px solid var(--third); */
  margin: 1.5% auto;
  justify-content: space-around;
  padding: 0 auto;
}
</style>