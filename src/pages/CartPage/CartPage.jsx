import { removeFromCart } from "../../axios/cartService";
import { useCart } from "../../context/cartContext";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cartItems, fetchCart } = useCart();

  const handleRemove = async (courseId) => {
    try {
      const res = await removeFromCart(courseId);
      alert(res.message);
      fetchCart();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to remove item");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        cartItems.map((course) => (
          <div key={course._id} className={styles.cartItem}>
            <div className={styles.details}>
              <h2 className={styles.title}>{course.title}</h2>
              <p className={styles.price}>₹ {course.price}</p>
            </div>
            <button
              onClick={() => handleRemove(course._id)}
              className={styles.removeButton}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
