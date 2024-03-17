<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import router from "@/router";

const route = useRoute();
const productId = ref(route.params.productId);
const product = ref({});
const screnSmall = ref(false)

const fetchProducts = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/products/${productId.value}`
    );
    product.value = response.data;
  } catch (error) {
    console.log("Error fetching products ", error);
  }
};

const addToCart = async (product) => {
  try {
    axios.post("http://localhost:3000/cart", product);
    router.push("/cart");
  } catch (error) {
    console.error("Error adding to cart: ", error);
  }
};

const checkScreenSize = () => {
  screnSmall.value = window.innerWidth <= 760;
}

onMounted(() => {
  fetchProducts();

  window.addEventListener('resize', checkScreenSize);

  checkScreenSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div>
    <div class="container-fluid">
      <div class="card mt-4 p-4">
        <div class="d-flex justify-content-center">
          <div v-if="screnSmall" class="d-flex justify-content-center">
            <img
            :src="product.image_src"
            class="card-img-top"
            alt="Product image"
            height="400px"
          />
          </div>
          <div class="d-flex gap-1 justify-content-center" v-else>
            <img
            :src="product.image_src"
            class="card-img-top"
            alt="Product image"
            height="400px"
          />
          <img
            :src="product.image_src"
            class="card-img-top"
            alt="Product image"
            height="400px"
          />
          <img
            :src="product.image_src"
            class="card-img-top"
            alt="Product image"
            height="400px"
          />
          </div>
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ product.name }}</h3>
          <p class="card-text" style="font-weight: bold">
            Ksh. {{ product.price }}
          </p>
          <p class="card-text">{{ product.more_details }}</p>

          <div class="d-flex gap-2">
            <button
              @click="addToCart(product)"
              class="btn btn-primary btn-dark"
            >
              Add to Cart
            </button>
            <button class="btn btn-primary btn-dark">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
