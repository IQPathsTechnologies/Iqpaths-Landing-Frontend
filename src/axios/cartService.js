// src/services/cartService.js
import axios from "axios"

export const addToCart = async (courseId) => {
  const res = await axios.post("/api/cart/addToCart", { courseId });
  console.log("add to cart ka response ye hia", res.data);
  return res.data;
};

export const removeFromCart = async (courseId) => {
    const res = await axios.post("/api/cart/removeFromCart", { courseId });
    console.log("remove from cart ka response ye hia", res.data);
    return res.data;
};

export const getCartItems = async () => {
    const res = await axios.get("/api/cart/getCartItems");
    console.log("get cart ka response ye hia", res.data);
  return res.data;
};
