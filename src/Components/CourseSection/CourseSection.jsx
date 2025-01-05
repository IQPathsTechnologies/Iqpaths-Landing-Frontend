import React, { useState, useEffect, useCallback, useContext } from "react";
import SignUpPopup from "./SignUpPopup";
import styles from "./CourseSection.module.css";
import CourseDetails from "./CourseDetails";
import { getRazorPay, loadRazorPay } from "../../utility/Razorpay/Razorpay";
import { verifyPayment, createOrder } from "../../utility/Razorpay/RazorpayApi";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';
import axios from "axios";
import { set } from "react-hook-form";
import { use } from "react";



const CourseSection = ({
  description = "Learn DS with Python, master data analysis with Python, and explore more courses to gain essential skills.",
  students = "156 Students",
  lessons = "20 Lessons",
  quizzes = "3 Quizzes",
  hoursLeft = "5 hours left at this price!",
  hours = "54.5 hours on-demand video",
  download = "Downloadable Resources",
  access = "Access on mobile and TV",

  userId,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRazorPayPopupVisible, setIsRazorPayPopupVisible] = useState(false);
  const [orderToken, setOrderToken] = useState(null);
  const [razorpayOptions, setRazorpayOptions] = useState(null); 
  const [courseDetails, setCourseDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coupon, setCoupon] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [whishlist, setWhishlist] = useState(false);
  const [isPurchased, setIsPurchased] = useState([]);
  const [couponDiscountedPrice, setCouponDiscountedPrice] = useState(null);


  const { title, id } = useParams();
  console.log(title, id);
  const courseId = id;
  
  const { user  } = useContext(UserContext);
  const apiClass = new AuthService();
  console.log("user id ye hai yaah pe line 50 me", userId);
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async function () {
      try {
          const response = await apiClass.isCoursePurchase(courseId);
          console.log("CourseSection me response aa raha", response);
          setIsPurchased(response.data.data.isPurchased);
          // console.log(response.data.data.isPurchased)
      } catch (error) {
        console.log("CourseSection me user ni aa raha", error);
      }
    }
    fetchData();
  }, []);
  



  //razorpay
  const handlePurchase = useCallback(async () => {
    const response = await createOrder(courseId, coupon);
    const { token, currency, key, name, description } = response;
    const { amount, id } = response.razorpayOrder;
    const order_id = id;
    setOrderToken(token);
    setRazorpayOptions({ order_id, amount, currency,  key, name, description });
  }, [courseId]);

  useEffect(() => {
    if(razorpayOptions){
      handlePayNow();
    }
  }, [razorpayOptions]);
  
  const handlePayNow = useCallback(async () => {
    await loadRazorPay();
    setIsRazorPayPopupVisible(true);
    const rzp = getRazorPay({
      ...razorpayOptions,
      prefill: { contact: user?.user?.mobileNo || '' },
      notes: { ...user, id: courseId },
      theme: { color: "#0047B2" },
      handler: async ({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      }) => {
        verifyPayment({
          token: orderToken,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        });
      }
    });

    rzp.on("payment.failed", (response) => {
      console.log("Payment failed");
    });

    rzp.open();
  }, [orderToken, razorpayOptions, courseId, user]);

  const handleGoBack = () => {
    navigate(-1); 
  };

  const handleOpenPopup = () => {

    //login popup
    // setIsPopupVisible(true); 
    // document.body.style.overflow = "hidden"; 

    //razor pay 
    handlePurchase();
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the pop-up
    document.body.style.overflow = "auto"; // Enable scrolling
  };

  useEffect(() => {
    // Cleanup in case the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);


  

  //get content 
  useEffect(() => {
    window.scrollTo(0, 1500);
    async function fetchData() {
      try {
        const response = await apiClass.getCourseDetails(id);
        console.log("CourseSection :: useEffect :: response", response);
        setCourseDetails(response.details);
        setLoading(false);

      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);


  const handleApplyCoupon = async () => {

    if (coupon.trim() !== "") {
      const couponResponse = await apiClass.useCoupon({ couponCode: coupon, courseId: id });
      console.log("CourseSection :: handleApplyCoupon :: couponResponse", couponResponse.data.data.course.price);
      setCouponDiscountedPrice(couponResponse.data.data.course.price);
      setIsApplied(true);
    } else {
      alert("Please enter a valid coupon.");
    }
  };

  const handleCancelCoupon = () => {
    setCoupon("");
    setIsApplied(false);
    setCouponDiscountedPrice(null);
  };
  

  const addToWhishlist = async () => {
    try {
      const response = await apiClass.addToWishlist(courseId);
      console.log("CourseSection :: addToWhishlist :: response", response);
      setWhishlist(true);
    } catch (error) {
      console.log("CourseSection :: addToWhishlist :: error", error);
    }
    setWhishlist(!whishlist);
  }


  return (
    <>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.courseHeading}>
            <div className={styles.courseDetails}>
              <p className={styles.heading}>
              <span onClick={handleGoBack} style={{ cursor: "pointer"}}>All Programs </span>&gt; {courseDetails.subject}
              </p>
              <h6 className={styles.title}> {courseDetails.title} </h6>
              <p className={styles.description}> {description} </p>

              <div className={styles.extraInfo}>
                <div className={styles.info}>
                  <img src="/duration.png" alt="Duration" />
                  <p>
                    {" "}
                    {courseDetails.duration}{" "}
                    {courseDetails.duration == 1 ? "week" : "weeks"}{" "}
                  </p>
                </div>
                <div className={styles.info}>
                  <img src="/students.png" alt="Students" />
                  <p> {students} </p>
                </div>
                <div className={styles.info}>
                  <img src="/levels.png" alt="Levels" />
                  <p> {courseDetails?.chapters?.length} Modules </p>
                </div>
                <div className={styles.info}>
                  <img src="/lessons.png" alt="Lessons" />
                  <p> {lessons} </p>
                </div>
                <div className={styles.info}>
                  <img src="/quizzes.png" alt="Quizzes" />
                  <p> {quizzes} </p>
                </div>
              </div>

              <div className={styles.rating}>
                {loading ? (
                  <p>Loading...</p> // Show a loader or placeholder while fetching data
                ) : (
                  <>
                    <p>{courseDetails.review}</p>
                    {[...Array(courseDetails.review || 0)].map((_, i) => (
                      <img
                        key={i}
                        src="/starFilled.svg"
                        alt="rating"
                        className={styles.star}
                      />
                    ))}
                    {[...Array(5 - (courseDetails.review || 0))].map(
                      (_, index) => (
                        <img
                          key={index}
                          src="/starEmpty.svg"
                          alt="rating"
                          className={styles.star}
                        />
                      )
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className={styles.courseLearning}>
            <div className={styles.whatHeading}>
              <p>What you'll learn</p>
            </div>
            <div className={styles.courseInfo}>
              {courseDetails.whatYouWillLearn?.map((item, index) => (
                <p key={index} className={styles.info}>
                  &#8226; {item}
                </p>
              ))}
            </div>
          </div>

          <CourseDetails />
        </div>

        {/* Right Section */}
        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSection}>
            <div className={styles.coursePreview}>
              <img src={courseDetails.thumbnail} alt="Preview" />
            </div>
            <div className={styles.coursePricing}>
              <p className={styles.price}> Rs.{couponDiscountedPrice ? couponDiscountedPrice : courseDetails.price} </p>
              <p className={styles.discount}>
                {" "}
                {(
                  ((courseDetails.realPrice - courseDetails.discountedPrice) /
                    courseDetails.realPrice) *
                  100
                ).toFixed(0)}
                {" %off "}
              </p>
            </div>
            <div className={styles.timeLeft}>
              <img src="/alarm.png" alt="Alarm" />
              <p> {hoursLeft} </p>
            </div>
            <div className={styles.buyDetails}>
              <div className={styles.details}>
                <button className={styles.cart} onClick={handleOpenPopup}>
                  <p> Add to cart </p>
                </button>

                <div className={styles.whishlist} onClick={addToWhishlist}>

                  {whishlist ? (
                    <img src="/heartFilled.svg" alt="Wishlist" />
                  ) : (
                    <img src="/heartEmpty.svg" alt="Wishlist" />
                  )  
                  }

                  {/* <img src="/heartEmpty.svg" alt="Wishlist" />
                  <img src="/heartFilled.svg" alt="Wishlist" /> */}
                  {/* <p> Wishlist </p> */}
                </div>
              </div>
              <button className={styles.buy} onClick={handleOpenPopup}>
                {isPurchased ? (<p> Purchased </p>) : (<p> Buy Now </p>)}
              </button>
              {/* <p className={styles.moneyBack}>
                <p> 30 Day Money Back Guarantee </p>
              </p> */}
            </div>
            <div className={styles.courseInclude}>
              <p className={styles.includes}> This course includes: </p>
              <div className={styles.content}>
                <img src="/camera.png" alt="Camera" />
                <p> {hours} </p>
              </div>
              <div className={styles.content}>
                <img src="/download.png" alt="Download" />
                <p> {download} </p>
              </div>
              <div className={styles.content}>
                <img src="/access.png" alt="Access" />
                <p> {access} </p>
              </div>
            </div>
            <div className={styles.coupon}>
              {/* <div className={styles.gift}>
                <p className={styles.p1}> SHARE </p>
                <p> GIFT </p>
                <p> APPLY COUPON </p>
              </div> */}
              <form onSubmit={(e) => { e.preventDefault(); handleApplyCoupon()}}>
                <input
                  type="text"
                  placeholder="Enter coupon"
                  className={styles.coupons}
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  disabled={isApplied}
                />
                <button  className={isApplied ? styles.applied : styles.apply}  type="submit" disabled={isApplied}>
                {isApplied ? "Applied" : "Apply"}
                </button>
              </form>
              <div className={styles.displayCoupon} style={{ display: isApplied ? "flex" : "none" }}>
                <div className={styles.couponDisplaying}> {coupon} </div>
                <div className={styles.cancelCoupon} onClick={handleCancelCoupon}>X</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SignUp Popup */}
      {isPopupVisible && <SignUpPopup onClose={handleClosePopup} />}
    </>
  );
};

export default CourseSection;
