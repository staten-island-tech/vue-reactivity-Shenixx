<template>
    <div class="card" v-if="candy.amount>0">
        <h2>{{candy.name}}</h2>
        <img :src="candy.img"/>
        <p>${{candy.price}}</p>
        <div id="select">
        <button @click="minus(candy)">-</button>
        <p>{{candy.amount}}</p>
        <button @click="add(candy)">+</button>
        </div>
    </div>
</template>


<script setup>


import { total } from '@/stores/counter';


const props = defineProps({
    candy:Object,
})


function add(candy){
    candy.amount++
    total.value+=candy.price
}


function minus(candy){
    candy.amount-=1
    total.value-=candy.price
}
</script>


<style scoped>
img{
    width: 50%;
}
#select{
    display: flex;
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
  background-color: rgb(225, 225, 255);
}
</style>
