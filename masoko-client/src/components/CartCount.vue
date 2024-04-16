<script setup>
import { cartCount } from '@/reducers/getReducers';
</script>

<template>
  <div>{{ cartCount }}</div>
</template>

<style scoped>
div{
  display: flex;
  align-items: center;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 5px;
  position: absolute;
  right: 20px;
}

@media only screen and (max-width: 760px) {
  div {
    right: 50px;
  }
}
</style>