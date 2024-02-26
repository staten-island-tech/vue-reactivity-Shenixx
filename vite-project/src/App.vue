<script setup>
import { RouterView } from "vue-router";
import ComponentA from './components/CandyCard.vue'
import ComponentB from './components/ShoppingCart.vue'
</script>

<template>
  <RouterView />
  <ComponentA />
  <ComponentB />
</template>
