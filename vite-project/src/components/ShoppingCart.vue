<template>
    <div class="cart">
    <h2>Shopping Cart</h2> 
        <button @click="store.increment()">
            How Many You Want 2: {{ store.count }}
        </button>
    </div>
</template>

<script setup>
import { store } from '../store'

</script>

<style scoped>
.cart{
    display: flex;
    height: 100%
}
</style>