<script setup>
import { RouterLink, RouterView } from "vue-router";

import CartCount from "@/components/CartCount.vue";
import DropdownComponent from "@/components/DropdownComponent.vue";

import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";

const searchQuery = ref("");
const products = ref([]);
const menu = ref();
const isMenuOpen = ref(false);
const smallScreen = ref(false);

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

const checkScreenSize = () => {
  smallScreen.value = window.innerWidth <= 760;
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreenSize);
});

const removeQuery = () => {
  searchQuery.value = "";

  closeMenu();
};

const openMenu = () => {
  menu.value.style.display = "flex";
  isMenuOpen.value = true;
};

const closeMenu = () => {
  menu.value.style.display = "none";
  isMenuOpen.value = false;
};
</script>

<template>
  <header>
    <nav class="nav">
      <div>
        <RouterLink to="/" @click="removeQuery" class="link logo under-line"
          >Masoko</RouterLink
        >
      </div>

      <!-- Open menu button on small screens -->
      <span class="times" @click="closeMenu" v-if="isMenuOpen"
        ><i class="fa fa-times"></i
      ></span>
      <span class="times" @click="openMenu" v-else
        ><i class="fa fa-bars"></i
      ></span>

      <div class="nav-links bg-light shadow" v-if="smallScreen" ref="menu">
        <RouterLink to="/" @click="removeQuery" class="link">Home</RouterLink>
        <RouterLink to="/about" @click="removeQuery" class="link"
          >About</RouterLink
        >

        <DropdownComponent/>
      </div>

      <div class="d-flex gap-4" v-else>
        <RouterLink to="/" @click="removeQuery" class="link">Home</RouterLink>
        <RouterLink to="/about" @click="removeQuery" class="link"
          >About</RouterLink
        >
        <DropdownComponent/>
      </div>

      <div class="d-flex cart-btn">
        <RouterLink
          to="/cart"
          @click="removeQuery"
          class="btn btn-primary btn-dark mx-3"
          >Cart</RouterLink
        >

        <CartCount />
      </div>
    </nav>
  </header>

  <div class="search-item">
    <form class="form d-flex">
      <input
        v-model="searchQuery"
        type="search"
        class="form-control me-2"
        placeholder="Search for products..."
        aria-label="Search"
      />
    </form>
  </div>

  <div class="container mt-3" v-if="filteredProducts.length >= 0">
    <div class="row">
      <div
        v-if="searchQuery"
        class="d-flex-column gap-4 justify-content-center"
      >
        <h3 class="d-flex justify-content-center">
          Search results for "{{ searchQuery }}"
        </h3>
        <div class="search-cont">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="col-md-4"
          >
            <div class="card px-2 d-flex justify-content-center">
              <img :src="product.image_src" class="card-img-top w-50" />

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
                    ><button @click="removeQuery" class="btn btn-primary">
                      View Product
                    </button></RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
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
  padding: 3px 20px;
}

.nav-links {
  display: flex;
  gap: 25px;
  transition: 0.5s;
}

.link {
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: bold;
  outline: none;
  border: none;
  background: transparent;
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

.search-item {
  position: absolute;
  top: 6px;
  right: 16vw;
}

.times {
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  top: 4px;
  right: 15px;
  display: none;
}

.search-cont {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 760px) {
  .logo {
    font-size: 20px;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    height: 50vh;
    align-items: left;
    z-index: 10;
    width: 200px;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 8vh;
  }

  .search-item {
    right: 30vw;
  }

  .cart-btn {
    display: flex;
    height: 40px;
    margin-right: 30px;
  }

  .times {
    display: block;
  }

  .search-cont {
    display: flex;
    flex-direction: column;
  }
}

/* https://th.bing.com/th/id/OIP.dQsyGVU2ZnERbE61glQurgHaHa?rs=1&pid=ImgDetMain */
</style>
