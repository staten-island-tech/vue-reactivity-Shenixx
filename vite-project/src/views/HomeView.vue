<script setup>
import shopitem from '@/components/shopitem.vue';
import { candy } from '@/stores/counter';
</script>


<template>
  <main>


    <shopitem v-for="candy in candy" :key="candy.name" :candy="candy"/>
  </main>
</template>
