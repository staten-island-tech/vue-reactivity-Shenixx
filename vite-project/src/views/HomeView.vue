<template>
  <div>
    <DestCard
      v-for="candy in candies"
      :key="candy.name"
      :Candy="candy"
    />
  </div>
</template>

<script setup>
import DestCard from "@/components/DestCard.vue";
const candies = [
  {
    name: "Reese's Peanut Butter Cups",
    img: "https://assets.stickpng.com/images/58d2a06cdc164e9dd9e668dc.png;",
    price: 1300,
  },
  // {
  //   name: "KitKat",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
  // {
  //   name: "",
  //   img: ";",
  //   price: ,
  // },
]
</script>

<style scoped></style>