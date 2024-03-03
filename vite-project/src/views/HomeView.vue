<script setup>
import shopitem from '@/components/shopitem.vue';
import { candy } from '@/stores/counter';
</script>


<template>
  <main>
    <p class = "container"><shopitem v-for="candy in candy" :key="candy.name" :candy="candy"/></p>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>
