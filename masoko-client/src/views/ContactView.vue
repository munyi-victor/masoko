<script setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="container w-75">
    <h2>Contact us through:</h2>

    <div class="d-flex-column mt-4 gap-3">
      <div class="phone-icon">
        <i class="fa-solid fa-phone icon"></i>
      </div>
      <div>
        <h6>Call or Whatsapp</h6>
        <ul class="numbers">
          <li>+254708905136</li>
          <li>+254756823682</li>
        </ul>
      </div>

      <div>
        <h6>Follow us on Social Media:</h6>

        <ul class="socials">
          <li>
            <div>
              <a href="/"><i class="fab fa-facebook" style="color: #3b5998;"></i></a>
              <a href="/">Facebook</a>
            </div>
          </li>

          <li>
            <div>
              <a href="/"><i class="fab fa-instagram" style="color: #bc1888;"></i></a>
              <a href="/">Instagram</a>
            </div>
          </li>
<!-- #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 #f09433); -->
          <li>
            <div>
              <a href="/"><i class="fab fa-twitter" style="color: #1da1f2;"></i></a>
              <a href="/">X</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer">
    <FooterComponent />
  </div>
</template>

<style scoped>
.phone-icon {
  display: flex;
  margin-left: 8%;
  margin-bottom: 20px;
  background-color: #eee;
  color: lightgreen;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* .numbers {
  list-style: none;
} */

.socials {
  list-style: none;
  display: flex;
  gap: 20px;
}

.socials li div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.socials li div a {
  text-decoration: none;
  color: #000;
}

/* .footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
} */
</style>
