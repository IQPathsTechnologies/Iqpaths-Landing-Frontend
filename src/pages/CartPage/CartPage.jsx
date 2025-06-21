import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../axios/cartService";
import { useCart } from "../../context/cartContext";
import styles from "./CartPage.module.css";
import { FaStar, FaClock, FaTrashAlt } from "react-icons/fa";
import { notifyError, notifySuccess } from "../../utility/Tostify/Tosts";
import { createCartOrder, verifyCartPayment } from "../../utility/Razorpay/RazorpayApi";
import UserContext from "../../context/userContext";
import { loadRazorPay, getRazorPay } from "../../utility/Razorpay/Razorpay";

const CartPage = () => {
  const { cartItems, fetchCart } = useCart();
  const [razorpayOptions, setRazorpayOptions] = useState(null);
  const [orderToken, setOrderToken] = useState(null);
  const { isLoggedIn } = useContext(UserContext);
  
  

  const handleRemoveItem = async (courseId) => {
    try {
      const res = await removeFromCart(courseId);
      console.log("Response from removeFromCart:", res);
      if(res.success)
        notifySuccess("Item removed from cart successfully!");
      else
        notifyError("Failed to remove item from cart.");
      fetchCart();
    } catch (error) {
      notifyError("Failed to remove item from cart.");
    }
  };


  
  //razorpay
  const handlePurchase = useCallback(async () => {
    // console.log("coupon code ye lagega re bawa", couponCode);

    console.log("Fetching order details for cart...");

    const response = await createCartOrder();

    console.log("response from createCartOrder", response);

    const { token, currency, key, name, description } = response;
    const { amount, id } = response.razorpayOrder;
    const order_id = id;
    setOrderToken(token);
    setRazorpayOptions({ order_id, amount, currency, key, name, description });
  }, []);

  useEffect(() => {
    if (razorpayOptions) {
      handlePayNow();
    }
  }, [razorpayOptions]);

  const handlePayNow = useCallback(async () => {
    loadRazorPay();
    // setIsRazorPayPopupVisible(true);
    const rzp = getRazorPay({
      ...razorpayOptions,
      prefill: {},
      notes: {},
      theme: { color: "#0047B2" },
      handler: async ({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }) => {
        await verifyCartPayment({
          token: orderToken,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        });
        fetchCart();
        notifySuccess("Payment successful! Your order has been placed.");
      }
    });

    rzp.on("payment.success", () => {
      console.log("Payment successful");
      fetchCart();
      notifySuccess("Payment successful! Your order has been placed.");
      // setIsPurchased(true);
    });


    rzp.on("payment.failed", () => {
      notifyError("Payment failed! Please try again.");
      console.log("Payment failed");
    });

    rzp.open();
  }, [orderToken, razorpayOptions]);

  const handleGoBack = () => {
    navigate(-1);
  };

   const handleOpenPopup = () => {
    if (!isLoggedIn) {
        navigate("/login");
        notifyWarning("Please login to buy the course.");
    } 
    else {
      handlePurchase();
    }
};

  const calculateSubtotal = () =>
    cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartWrapper}>

      {cartItems.length > 0 ? (
        <div>
      <div className={styles.cartHeader}>
        <h1>🛒 Your Cart</h1>
        <p className={styles.breadcrumb}>
          <Link to="/">Home</Link> / <span>Cart</span>
        </p>
      </div>
        <div className={styles.cartBody}>
          <div className={styles.cartItemsSection}>
            {cartItems.map((item) => (
              <div className={styles.cartCard} key={item._id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={styles.thumbnail}
                />
                <div className={styles.details}>
                  <h3>{item.title}</h3>
                  <div className={styles.metaInfo}>
                    <span><FaStar color="#f5b400" /> {item.review || 5}</span>
                    <span><FaClock /> {item.duration}</span>
                  </div>
                  <div className={styles.priceBlock}>
                    {item.realPrice && item.realPrice > item.price && (
                      <span className={styles.oldPrice}>₹ {item.realPrice}</span>
                    )}
                    <span className={styles.price}>₹ {item.price}</span>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summarySection}>
            <h2>Order Summary</h2>
            <div className={styles.summaryItem}>
              <span>Subtotal</span>
              <span>₹ {calculateSubtotal()}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={styles.summaryDivider}></div>

            <div className={styles.totalAmount}>
              <span>Total</span>
              <span>₹ {calculateSubtotal()}</span>
            </div>

            <button className={styles.checkoutBtn} onClick={handleOpenPopup}>
              Proceed to Checkout
            </button>
          </div>
        </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className={styles.emptyCartImage}
            style={{ width: 120, marginBottom: 24, opacity: 0.7 }}
          />
          <h1 >Your Cart is Empty</h1>
          <p>Add some courses to see them here!</p>
          <Link to="/" className={styles.shopNowBtn}>
            Browse Courses
          </Link>

        </div>
      )}
    </div>
  );
};

export default CartPage;
      