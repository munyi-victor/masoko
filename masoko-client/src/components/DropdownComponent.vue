<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <div class="dropdown">
    <button class="dropdown-toggle text-bold link" type="button" id="dropdownMenuButton" aria-expanded="false" @click="toggleDropdown">Categories</button>
    <ul class="dropdown-menu" :class="{'show':isOpen}" aria-labelledby="dropdownMenuButton">
      <li><a href="/electronics" class="dropdown-item">Electronics</a></li>
      <li><a href="/fashion" class="dropdown-item">Fashion</a></li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-menu{
  display: none;
}

.dropdown-item {
  font-weight: bold;
}

.show {
  display: block;
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
</style>