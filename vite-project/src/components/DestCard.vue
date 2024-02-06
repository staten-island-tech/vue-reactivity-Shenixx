<template>
    <div>
        <h2>{{ Destination.name }}</h2>
        <img :scr="Destination.img" alt=""/>
    </div>
</template>

<script setup>
import {ref} from "vue";
    const props = defineProps({
        Destination: Object,
    });
//clicker logic
const clicked = ref(0);

function increment(){
    clicked.value++;
}
</script>


<style scoped>
</style>