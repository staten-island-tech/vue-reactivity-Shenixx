<template>
  <div class="card">
    <h2>{{ Candy.name }}</h2>
    <img :src="Candy.img" alt="" />
    <h3>{{ Candy.price }}</h3>
      <button @click="store.increment()">
        @add-to-cart="$emit('add-to-cart', $event)"
        How Many You Want: {{ store.count }}
      </button>
  </div>
</template>

<script setup>
import { store } from '../store'

const props = defineProps({
  Candy: Object,
});


methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product.id, 1);
    }
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

