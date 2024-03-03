<template>
    <div class = "card">
        <h2 class>{{candy.name}}</h2>
        <img :src="candy.img"/>
        <p>${{candy.price}}</p>
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
    width: 40%;
}

.card {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 26%;
  height: 35%;
  margin: 1.5% auto;
  justify-content: space-around;
  padding: 0 auto;
  background-color: rgb(220, 216, 253);

}
</style>
