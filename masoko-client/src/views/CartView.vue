<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";

const cartItems = ref([]);
const totalAmount = ref(0);
const screenSmall = ref(false);

const fetchCartItems = async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartItems.value = response.data;
    calculateTotalAmount();
  } catch (error) {
    console.error("Error fetching cart items: ", error);
  }
};

const checkSmallCreen = () => {
  screenSmall.value = window.innerWidth < 760;
};

onMounted(() => {
  fetchCartItems();

  window.addEventListener("resize", checkSmallCreen);
  checkSmallCreen();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkSmallCreen);
});

const removeFromCart = async (productId) => {
  try {
    await axios.delete(`http://localhost:3000/cart/${productId}`);
    cartItems.value = cartItems.value.filter((item) => item.id !== productId);
    calculateTotalAmount();
  } catch (error) {
    console.error("Error removing from cart.", error);
  }
};

const calculateTotalAmount = () => {
  totalAmount.value = cartItems.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const updateTotalAmount = () => {
  calculateTotalAmount();
};
</script>

<template>
  <div class="conainer-fluid">
    <div
      v-if="cartItems.length === 0"
      class="d-flex justify-content-center mt-3"
    >
      <h5>Your cart is empty.</h5>
    </div>

    <div class="col d-flex gap-5 mx-4 cart-cont" v-else>
      <div class="d-flex-column">
        <div
          v-for="item in cartItems"
          :key="item.id"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="body shadow">
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

              <div class="d-flex gap-1">
                <label for="quantity">Quantity:</label>
                <input
                  type="number"
                  v-model="item.quantity"
                  @input="updateTotalAmount"
                />
              </div>
            </div>

            <button class="btn btn-danger" @click="removeFromCart(item.id)">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="pay-section">
        <div class="w-100 d-flex gap-2 justify-content-center">
          <h5>Pay via:</h5>
          <select class="w-75" v-model="paymentMethod">
            <option value="M-Pesa">M-Pesa</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        <div class="w-100 d-flex justify-content-center">
          <h5>Location:</h5>
          <select class="w-75">
            <option value="Awendo">Awendo</option>
            <option value="Kisii">Kisii</option>
            <option value="Kitere">Kitere</option>
            <option value="Migori">Migori</option>
            <option value="Rongo">Rongo</option>
          </select>
        </div>
        <h4>Total Amount: Ksh. {{ totalAmount }}</h4>
        <button class="btn btn-primary btn-dark w-75">Pay now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
  width: 75%;
}

.pay-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
  width: 125%;
  height: 40vh;
  align-items: center;
  padding-top: 20px;
}

@media only screen and (max-width: 760px) {
  .cart-cont {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .pay-section {
    width: 100%;
  }
}
</style>
