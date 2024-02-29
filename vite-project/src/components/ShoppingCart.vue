<template>
    <div class="cart">
    <h2>Shopping Cart</h2> 
        <button @click="cart.increment()">
            How Many You Want 2: {{ cart.count }}
        </button>
    </div>
</template>

<script setup>
import { cart } from '../store'

</script>

<style scoped>
.cart{
    display: flex;
    height: 100%
}
</style>