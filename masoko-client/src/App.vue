<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="nav">
        <div>
          <RouterLink to="/" class="link logo under-line">Masoko</RouterLink>
        </div>
        <div class="nav-links">
          <RouterLink to="/" class="link">Home</RouterLink>
          <RouterLink to="/about" class="link">About</RouterLink>
        </div>
        <div class="d-flex">
          <RouterLink to="/cart" class="btn btn-primary btn-dark mx-3"
            >Cart</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>

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
  content: '';
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
