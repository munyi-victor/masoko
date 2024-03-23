<script setup>
import logo from "@/assets/images/masoko-logo.png"
</script>

<template>
  <div class="container-fluid bg-dark d-flex py-3 justify-content-center footer">
    <div class="col-1">
      <img :src="logo" alt="masoko logo" height="150px" width="150px"/>
    </div>
    <div class="col-2">
      <h5>Quick Links</h5>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/electronics">Electronics</a></li>
        <li><a href="/fashion">Fashion</a></li>
        <li><a href="/contact-us">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.col-2 {
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
}

.col-2 ul {
  list-style: none;
}

.col-2 ul li a {
  color: lightgrey;
  text-decoration: none;
}

.col-2 ul li a:hover{
  color: #fff;
}

.footer{
  height: 40vh;
  gap: 20vw;
}
</style>