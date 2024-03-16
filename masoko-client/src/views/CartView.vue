<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const cartItems = ref([]);

const fetchCartItems = async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartItems.value = response.data;
  } catch (error) {
    console.error("Error fetching cart items: ", error);
  }
};

onMounted(fetchCartItems);

const removeFromCart = async (productId) => {
  try {
    await axios.delete(`http://localhost:3000/cart/${productId}`);
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
  } catch (error) {
    console.error("Error removing from cart.", error);
  }
};
</script>

<template>
  <div class="conainer-fluid">
    <div v-if="cartItems.length === 0" class="d-flex justify-content-center mt-3">
      <h5>Your cart is empty.</h5>
    </div>

    <div class="row mt-3" v-else>
      <div
        class="col-md-12"
        v-for="item in cartItems"
        :key="item.id"
        style="display: flex; justify-content: center; align-items: center"
      >
        <div class="body">
          <img
            :src="item.image_src"
            alt="Products image"
            class="card-img-top w-25"
          />

          <div class="card-1">
            <h4 class="card-title">{{ item.name }}</h4>
            <p class="card-text" style="font-weight: bold">
              Ksh. {{ item.price }}
            </p>
          </div>

          <button class="btn btn-danger" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
  width: 75%;
}
</style>
