<template>
    <div>
        <h2>{{candy.name}}</h2>
        <img :src="candy.img"/>
        <p>{{candy.price}}</p>
        <button @click="addtocart(candy)">Add to cart</button>
    </div>
</template>


<script setup>
import { total } from '@/stores/counter';


const props = defineProps({
    candy:Object,
})


function addtocart(candy){
    candy.amount++
    console.log(candy.name,candy.amount)
    total.value+=candy.price
}
</script>


<style scoped>
img{
    width: 10%;
}
</style>
