import React, { useState } from "react";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Python", price: 650, quantity: 1 },
    { id: 2, name: "Machine Learning", price: 550, quantity: 2 },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <h1>Your Cart</h1>
        <p className={styles.breadcrumb}>
          Home / <span>Cart</span>
        </p>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <div className={styles.cartCard} key={item.id}>
              <div className={styles.cardContent}>
                <h3>{item.name}</h3>
                <p className={styles.price}>${item.price}</p>
              </div>
              <div className={styles.quantityControl}>
                <label>Quantity</label>
                <select
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </div>
              <p className={styles.subtotal}>
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryDetails}>
            <p>
              <span>Subtotal:</span>
              <span>${calculateSubtotal()}</span>
            </p>
            <p>
              <span>Shipping:</span>
              <span>Free</span>
            </p>
          </div>
          <div className={styles.total}>
            <p>
              <span>Total:</span>
              <span>${calculateSubtotal()}</span>
            </p>
          </div>
          <button className={styles.checkoutButton}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
