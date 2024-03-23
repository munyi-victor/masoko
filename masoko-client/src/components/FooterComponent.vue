<script setup>
import logo from "@/assets/images/masoko-logo.png";
</script>

<template>
  <div class="container-fluid bg-dark pt-3 w-100 justify-content-center footer">
    <div class="d-flex justify-content-center footer-div">
      <div class="col-1">
        <img :src="logo" alt="masoko logo" height="150px" width="150px" />
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

    <div
      class="d-flex align-items-center justify-content-center w-100 copyri"
      style="position: relative; bottom: 0px"
    >
      <span class="text-white" style="font-size: 12px"
        >&copy; 2024 - Munyi Victor</span
      >
    </div>
  </div>
</template>

<style scoped>
.col-1 {
  display: flex;
  justify-content: center;
}

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

.col-2 ul li a:hover {
  color: #fff;
}

.footer {
  height: 40vh;
  width: 100%;
}

.footer-div {
  gap: 20vw;
}

.copyri {
  margin-top: 30px;
}

@media only screen and (max-width: 760px) {
  .footer {
    height: 70vh;
    align-items: center;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: -10vh;
  }

  .footer-div {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    align-items: center;
  }

  .col-2 {
    width: 100%;
    align-items: center;
  }

  .copyri {
    margin-top: 10px;
  }
}
</style>
