<template>
    <div class="container">
      <cartitem v-for="candy in candy" :key="candy.name" :candy="candy"/>
      <h3 class="head3">${{total}}</h3>
    </div>
  </template>
  
  
  <script setup>
  import { total } from '@/stores/counter';
  import cartitem from '@/components/cartitem.vue';
  import { candy } from '@/stores/counter';
  </script>
  
  
  <style scoped>
  .container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

.head3{
    background-color: azure;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
}
  </style>
  