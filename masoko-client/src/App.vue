<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <nav class="nav">
        <div>
          <RouterLink to="/" class="link">Masoko</RouterLink>
        </div>
        <div class="nav-links">
          <RouterLink to="/" class="link">Home</RouterLink>
          <RouterLink to="/about" class="link">About</RouterLink>
        </div>
        <div class="d-flex">
          <RouterLink to="/cart" class="btn btn-primary btn-dark mx-3">Cart</RouterLink>
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
</style>
