<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const cartItemsCount = ref(0);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartItemsCount.value = response.data.length;
  } catch (error) {
    console.error("Error fetching cart items: ", error)
  }
})
</script>

<template>
  <div>{{ cartItemsCount }}</div>
</template>

<style scoped>
div{
  display: flex;
  align-items: center;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  right: 20px;
}
</style>