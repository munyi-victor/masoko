<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import FooterComponent from "@/components/FooterComponent.vue";

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    products.value = response.data;
  } catch (error) {
    console.log("Error fetching products ", error);
  }
});
</script>

<template>
  <div class="container-fluid d-flex-colum">
    <div class="row">
      <div
        class="col-md-4 cont-card"
        v-for="product in products"
        :key="product.id"
      >
        <div class="card shadow mt-4 mb-4 px-3 py-2">
          <img
            :src="product.image_src"
            :alt="product.name + 'Image'"
            class="card-img-top"
            height="300px"
          />
          <div class="card-body">
            <h4 class="card-title">{{ product.name }}</h4>
            <p class="card-text" style="font-weight: bold">
              Ksh. {{ product.price }}
            </p>
            <p class="card-text" style="margin-top: -10px">
              {{ product.description }}
            </p>
            <div class="d-flex gap-2">
              <RouterLink :to="'/' + product.id"
                ><button class="btn btn-primary">
                  View Product
                </button></RouterLink
              >
              <button class="btn btn-primary btn-dark">Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
