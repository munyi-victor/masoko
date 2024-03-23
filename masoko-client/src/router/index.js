import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import CartView from "@/views/CartView.vue";
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ContactView from '@/views/ContactView.vue';
import ElectronicsView from "@/views/ElectronicsView.vue";
import FashionView from "@/views/FashionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: ContactView,
    },
    {
      path: "/:productId",
      component: ProductDetailsView,
    },
    {
      path: "/electronics",
      name: "electronics",
      component: ElectronicsView,
    },
    {
      path: "/fashion",
      name: "fashion",
      component: FashionView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    },
  ],
});

export default router
