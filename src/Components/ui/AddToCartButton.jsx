import { addToCart } from "../../axios/cartService";
import { useCart } from "../../context/cartContext";
import { notifyError, notifyInfo, notifySuccess } from "../../utility/Tostify/Tosts";
import styles from "./AddToCartButton.module.css"; 

const AddToCartButton = ({ courseId }) => {
  const { fetchCart } = useCart();

  const handleAddToCart = async () => {
    try {
      const res = await addToCart(courseId);
      console.log("Add to cart response:", res);
        if (res.success) {
            notifySuccess("Item added to cart successfully");
        } 
        else if(res.success && res.message == "Course already in cart"){
            notifyInfo("Item is already in cart")
        }
        else {
            notifyError("Failed to add item to cart");
        }
      fetchCart();
    } catch (error) {
        notifyError( "Error adding to cart");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className={styles.cart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
