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
    <div className={styles.container}>
      <p className={styles.breadcrumb}>
        Home / <span>Cart</span>
      </p>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
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
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
        <button className={styles.returnButton}>Return To Course Section</button>
        <button className={styles.updateButton}>Update Cart</button>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.coupon}>
          <input
            type="text"
            placeholder="Coupon Code"
            className={styles.couponInput}
          />
          <button className={styles.applyCoupon}>Apply Coupon</button>
        </div>
        <div className={styles.cartTotal}>
          <h3>Cart Total</h3>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <span>Total:</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <button className={styles.checkoutButton}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
