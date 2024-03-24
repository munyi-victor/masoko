<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  showButton.value = window.scrollY > 100;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})
</script>

<template>
  <div class="scroll-to-top" @click="scrollToTop" v-show="showButton">
    <i class="fas fa-arrow-up"></i>
  </div>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  font-size: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  opacity: 0.8;
  z-index: 10;
}
</style>