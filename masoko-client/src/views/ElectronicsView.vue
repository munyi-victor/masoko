<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import FooterComponent from "@/components/FooterComponent.vue";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const reponse = await axios.get("http://localhost:3000/products");
    products.value = reponse.data;
  } catch (error) {
    console.error("Error fetching products: ", error);
  }
}

onMounted(fetchProducts);
</script>

<template>
  <div class="container-fluid">
    <h2 class="bg-dark text-white p-2 w-25">Electronics</h2>
    <div class="row">
      <div
        class="col-md-4 cont-card"
        v-for="product in products"
        :key="product.id"
      >
        <div v-if="product.category === 'electronics'">
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
      </div>
      <FooterComponent/>
    </div>
  </div>
</template>