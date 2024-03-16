import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import CartView from "@/views/CartView.vue";
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

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
      path: "/:productId",
      component: ProductDetailsView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView
    },
  ],
});

export default router
