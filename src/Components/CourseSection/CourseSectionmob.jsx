import React, { useState, useEffect, useCallback, useRef, useContext } from "react";
import SignUpPopup from "./SignUpPopup";
import styles from "./CourseSection.module.css";
import CourseDetailsmob from "./CourseDetailsmob";
import { getRazorPay, loadRazorPay } from "../../utility/Razorpay/Razorpay";
import { verifyPayment, createOrder } from "../../utility/Razorpay/RazorpayApi";
import { useParams, useNavigate } from "react-router-dom";
import { AuthService } from '../../axios/User';
import { UserContext } from "../../context/userContext";




const CourseSection = ({
  students = "156 Students",
  lessons = "20 Lessons",
  hoursLeft = "5 hours left at this price!",
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRazorPayPopupVisible, setIsRazorPayPopupVisible] = useState(false);
  const [orderToken, setOrderToken] = useState(null);
  const [razorpayOptions, setRazorpayOptions] = useState(null);
  const [courseDetails, setCourseDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isApplied, setIsApplied] = useState(false);
  const [whishlist, setWhishlist] = useState(false);
  const [isPurchased, setIsPurchased] = useState(null);
  const [couponDiscountedPrice, setCouponDiscountedPrice] = useState(null);
  const [coupon, setCoupon] = useState("");
  // const [couponCode, setCouponCode] = useState(null);
  const couponCode = useRef("");

  const { isLoggedin } = useContext(UserContext);
  const { title, id } = useParams();
  const courseId = id;

  const apiClass = new AuthService();
  const navigate = useNavigate();



  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await apiClass.isCoursePurchase(courseId);
        console.log("CourseSection me response aa raha", response);
        setIsPurchased(response.data.data.isPurchased);
        console.log(response.data.data.isPurchased)
      } catch (error) {
        console.log("CourseSection me isCoursePurchased ka reponse", error);
      }
    }
    fetchData();
  }, []);




  //razorpay
  const handlePurchase = useCallback(async () => {
    console.log("coupon code ye lagega re bawa", couponCode);
    const response = await createOrder(courseId, couponCode.current);

    const { token, currency, key, name, description } = response;
    const { amount, id } = response.razorpayOrder;
    const order_id = id;
    setOrderToken(token);
    setRazorpayOptions({ order_id, amount, currency, key, name, description });
  }, [courseId]);

  useEffect(() => {
    if (razorpayOptions) {
      handlePayNow();
    }
  }, [razorpayOptions]);

  const handlePayNow = useCallback(async () => {
    loadRazorPay();
    setIsRazorPayPopupVisible(true);
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
        verifyPayment({
          token: orderToken,
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        });
      }
    });

    rzp.on("payment.success", () => {
      console.log("Payment successful");
      setIsPurchased(true);
    });


    rzp.on("payment.failed", () => {
      console.log("Payment failed");
    });

    rzp.open();
  }, [orderToken, razorpayOptions, courseId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleOpenPopup = () => {

    // login popup
    setIsPopupVisible(true); 
    document.body.style.overflow = "hidden"; 


    if(!isLoggedin){
      // alert("Please login to buy the course.");
    }
    else{
    // razor pay 
    if (!isPurchased) {
      handlePurchase();
    }
    else {
      alert("You have already purchased this course.");
    }
    }


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
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await apiClass.getCourseDetails(id);
        // console.log("CourseSection :: useEffect :: response", response);
        setCourseDetails(response.details);
        setLoading(false);

      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);


  const handleApplyCoupon = async () => {

    if (couponCode.current.trim() !== "") {
      console.log("CourseSection :: handleApplyCoupon :: couponCode", couponCode.current);
      const couponResponse = await apiClass.useCoupon({ couponCode: couponCode.current, courseId: id });
      console.log("CourseSection :: handleApplyCoupon :: couponResponse", couponResponse);
      setCouponDiscountedPrice(couponResponse.data.data.course.price);
      setIsApplied(true);
    } else {
      alert("Please enter a valid coupon.");
    }
  };



  const handleCouponInputChanges = (e) => {
    console.log("coupon ki value", e.target.value);
    couponCode.current = e.target.value;
    setCoupon(e.target.value);
  };

  const handleCancelCoupon = () => {
    couponCode.current = "";
    setIsApplied(false);
    setCoupon("");
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
      <div className={styles.containermob}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.courseHeading}>
            <div className={styles.courseDetails}>
              <p className={styles.heading}>
                <span onClick={handleGoBack} style={{ cursor: "pointer" }}>All Programs </span>&gt; {courseDetails.subject}
              </p>
              <div className={styles.coursePreview}>
                <img src={courseDetails.thumbnail} alt="Preview" />
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
              <h6 className={styles.title}> {courseDetails.title} </h6>
              <p className={styles.description}> {courseDetails.detailDescription} </p>

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
                  <p> {courseDetails.totalLecture} lectures </p>
                </div>
                {/* <div className={styles.info}>
                  <img src="/quizzes.png" alt="Quizzes" />
                  <p> {quizzes} </p>
                </div> */}
              </div>
              <div className={styles.coursePricing}>
                <p className={styles.price}> Rs.{couponDiscountedPrice ? Math.floor(couponDiscountedPrice) : courseDetails.price} </p>
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
                  {(isPurchased ? (<p> Purchased </p>) : (<p> Buy Now </p>))}
                </button>
                {/* <p className={styles.moneyBack}>
                <p> 30 Day Money Back Guarantee </p>
              </p> */}
              </div>
              <div className={styles.courseInclude}>
                <p className={styles.includes}> This course includes: </p>
                <div className={styles.content}>
                  <img src="/camera.png" alt="Camera" />
                  <p> Interactive live sessions</p>
                </div>
                <div className={styles.content}>
                  <img src="/download.png" alt="Download" />
                  <p> Hands on Projects and Assignments </p>
                </div>
                <div className={styles.content}>
                  <img src="/access.png" alt="Access" />
                  <p> Personalized feedback</p>
                </div>
              </div>
              <div className={styles.coupon}>
                <form onSubmit={(e) => { e.preventDefault(); handleApplyCoupon() }}>
                  <input
                    type="text"
                    placeholder="Enter coupon"
                    className={styles.coupons}
                    // ref={couponCode}
                    // value={couponCode.current}
                    // onChange={(e) => setCoupon(e.target.value)
                    value={coupon}
                    onChange={handleCouponInputChanges}
                    disabled={isApplied}
                  />
                  {/* {console.log("coupon code applied ye vala", coupon)} */}
                  <button className={isApplied ? styles.applied : styles.apply} type="submit" disabled={isApplied}>
                    {isApplied ? "Applied" : "Apply"}
                  </button>
                </form>
                <div className={styles.displayCoupon} style={{ display: isApplied ? "flex" : "none" }}>
                  <div className={styles.couponDisplaying}> {couponCode.current} </div>
                  <div className={styles.cancelCoupon} onClick={handleCancelCoupon}>X</div>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.courseLearning}>
            <div className={styles.whatHeading}>
              <p>What you'll learn</p>
            </div>
            <div className={styles.courseInfo}>
              {courseDetails.whatYouWilLearn?.map((item, index) => (
                <>
                  <p key={index} className={styles.points}>
                    {item}
                  </p>
                </>
              ))}
            </div>
          </div>

          <CourseDetailsmob />
        </div>

      </div>

      {/* SignUp Popup */}
      {isPopupVisible && <SignUpPopup onClose={handleClosePopup} />}
    </>
  );
};

export default CourseSection;
