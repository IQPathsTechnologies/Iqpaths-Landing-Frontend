import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Python for Beginners", price: 650 },
    { id: 2, name: "Machine Learning Basics", price: 550 },
  ]); 

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.header}>
        <h1>Your Cart</h1>
        <p className={styles.breadcrumb}>
          <a href="/" className={styles.breadHome}> Home </a> / <span>Cart</span>
        </p>
      </div>

      {cartItems.length > 0 ? (
        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div className={styles.cartCard} key={item.id}>
                <div className={styles.cardContent}>
                  <h3>{item.name}</h3>
                  <p className={styles.price}>${item.price}</p>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <span className={styles.removeIcon}>&#x2715;</span> Remove
                </button>
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
      ) : (
        <Link to="/courses" className={styles.emptyCartLink}> 
          <div className={styles.emptyCart}>
            <h2>Your Cart is Empty</h2>
            <p>Add some courses to see them here!</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CartPage;
