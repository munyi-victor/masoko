<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, computed } from "vue";
import axios from "axios";

import CartCount from "@/components/CartCount.vue";

const searchQuery = ref("");
const products = ref([]);

try {
  axios.get("http://localhost:3000/products").then((response) => {
    products.value = response.data;
  });
} catch (error) {
  console.error("Error fetching products: ", error);
}

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>

<template>
  <header>
    <nav class="nav">
      <div>
        <RouterLink to="/" class="link logo under-line">Masoko</RouterLink>
      </div>
      <div class="nav-links">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/about" class="link">About</RouterLink>
      </div>

      <div class="">
        <form class="form d-flex">
          <input
            v-model="searchQuery"
            type="search"
            class="form-control me-2"
            placeholder="Search for products..."
            aria-label="Search"
          />
          <button type="submit" class="btn btn-outline-dark" title="search">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div class="d-flex">
        <RouterLink to="/cart" class="btn btn-primary btn-dark mx-3"
          >Cart</RouterLink
        >

        <CartCount />
      </div>
    </nav>
  </header>

  <div class="container mt-3" v-if="filteredProducts.length >= 0">
    <div class="row">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="col-md-4"
      >
        <div class="card px-2">
          <img :src="product.image_src" class="card-img-top" />

          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text" style="font-weight: bold">
              {{ product.price }}
            </p>
            <p class="card-text">
              {{ product.description }}
            </p>

            <div class="d-flex gap-2">
              <RouterLink :to="'/' + product.id"
                ><button class="btn btn-primary">
                  View Product
                </button></RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="filteredProducts.length === 0"
    class="d-flex justify-content-center"
  >
    <h5>The items you searched for are not available.</h5>
  </div>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  height: 8vh;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  padding: 4px 20px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
}
.logo {
  font-family: fantasy;
  letter-spacing: 0.5px;
  font-size: 28px;
  color: orangered;
}

.under-line {
  position: relative;
  text-decoration: none;
}

.under-line::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 10px;
  border-radius: 50%;
  background-color: black;
}

/* https://th.bing.com/th/id/OIP.dQsyGVU2ZnERbE61glQurgHaHa?rs=1&pid=ImgDetMain */
</style>
