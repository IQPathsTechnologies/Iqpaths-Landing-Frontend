import { createContext, useContext, useState, useEffect } from "react";
import { getCartItems } from "../axios/cartService";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const fetchCart = async () => {
    try {
      const res = await getCartItems();
      setCartItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
