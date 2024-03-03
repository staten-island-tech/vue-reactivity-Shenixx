<template>
  <div>
    <cartitem v-for="candy in candy" :key="candy.name" :candy="candy"/>
    <h3>{{total}}</h3>
  </div>
</template>


<script setup>
import { total } from '@/stores/counter';
import { candy } from '@/stores/counter';
</script>


<style scoped>


</style>
