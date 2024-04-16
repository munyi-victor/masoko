import { ref } from "vue";
import axios from "axios";

import { cartCounterRducer, cartCounterReducerFunction } from "./cartCountReducer";

const cartItemsCount = ref();

export const getCartItems = async () => {
  try {
    const response = await axios.get("http://localhost:3000/cart");
    cartItemsCount.value = response.data.length;
  } catch (error) {
    console.error("Error fetching cart items: ", error);
  }
};

const [cartCount, dispatch] = cartCounterRducer(cartItemsCount, cartCounterReducerFunction);

export { cartCount };

export const addFun = () => {
  dispatch({ type: "add" });
}

export const remFun = () => {
  dispatch({ type: "remove" });
};