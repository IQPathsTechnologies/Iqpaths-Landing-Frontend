import React, { useState, useEffect, useCallback, useContext } from "react";
import SignUpPopup from "./SignUpPopup";
import styles from "./CourseSection.module.css";
import CourseDetails from "./CourseDetails";
import { getRazorPay, loadRazorPay } from "../../utility/Razorpay/Razorpay";
import { verifyPayment, createOrder } from "../../utility/Razorpay/RazorpayApi";
import { useParams } from "react-router-dom";
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';



const CourseSection = ({
  programName = "Data Science",
  courseTitle = "Data Science using Python",
  description = "Learn DS with Python, master data analysis with Python, and explore more courses to gain essential skills.",
  duration = "2Weeks",
  students = "156 Students",
  levels = "All levels",
  lessons = "20 Lessons",
  quizzes = "3 Quizzes",
  rating = "4.5",
  coursePrice = "$549",
  discount = "40% off",
  hoursLeft = "5 hours left at this price!",
  hours = "54.5 hours on-demand video",
  download = "Downloadable Resources",
  access = "Access on mobile and TV",
  //temp data
  courseId = "6772c5a7b22b4a5a4665a64b",
  // amount = 1999,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isRazorPayPopupVisible, setIsRazorPayPopupVisible] = useState(false);
  const [orderToken, setOrderToken] = useState(null);
  const [razorpayOptions, setRazorpayOptions] = useState(null); 
  const [courseDetails, setCourseDetails] = useState([]);

  const { title, id } = useParams();
  console.log(title, id);
  
  const { user } = useContext(UserContext);
  const apiClass = new AuthService();



  //razorpay
  const handlePurchase = useCallback(async () => {
    const response = await createOrder(courseId);
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
      prefill: { contact: user?.contact || '' },
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
    async function fetchData() {
      try {
        const response = await apiClass.getCourseDetails(id);
        console.log("CourseSection :: useEffect :: response", response);
        setCourseDetails(response.details);

      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);


  return (
    <>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.courseHeading}>
            <div className={styles.courseDetails}>
              <p className={styles.heading}>All Program &gt; {courseDetails.subject}</p>
              <h6 className={styles.title}> {courseDetails.title} </h6>
              <p className={styles.description}> {description} </p>

              <div className={styles.extraInfo}>
                <div className={styles.info}>
                  <img src="/duration.png" alt="Duration" />
                  <p> {courseDetails.duration} {courseDetails.duration == 1 ? "week" : "weeks"} </p>
                </div>
                <div className={styles.info}>
                  <img src="/students.png" alt="Students" />
                  <p> {students} </p>
                </div>
                <div className={styles.info}>
                  <img src="/levels.png" alt="Levels" />
                  <p> {levels} </p>
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
                <p> {rating} </p>
                <img src="/rating.png" alt="ratings" />
              </div>
            </div>
          </div>

          <div className={styles.courseLearning}>
            <div className={styles.whatHeading}>
              <p>What you'll learn</p>
            </div>
            <div className={styles.courseInfo}>
              <ul>
                <li className={styles.info1}>
                  In this course, you will gain proficiency in how to analyze a number of statistical procedures in SPSSS.
                </li>
                <li className={styles.info2}>
                  You will learn how to interpret the output of a number of different statical tests.
                </li>
                <li className={styles.info3}>
                  Learn how to write the result of statistical analyses using APA format.
                </li>
              </ul>
            </div>
          </div>

          <CourseDetails />
        </div>

        {/* Right Section */}
        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSection}>
            <div className={styles.coursePreview}>
              <img src="/preview.png" alt="Preview" />
            </div>
            <div className={styles.coursePricing}>
              <p className={styles.price}> {coursePrice} </p>
              <p className={styles.discount}> {discount} </p>
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
                <img
                  src="/wishlist.png"
                  alt="Wishlist"
                  className={styles.wishlist}
                />
              </div>
              <button className={styles.buy} onClick={handleOpenPopup}>
                <p> Buy Now </p>
              </button>
              <p className={styles.moneyBack}>
                <p> 30 Day Money Back Guarantee </p>
              </p>
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
              <div className={styles.gift}>
                <p className={styles.p1}> SHARE </p>
                <p> GIFT </p>
                <p> APPLY COUPON </p>
              </div>
              <input
                type="text"
                placeholder="Enter coupon"
                className={styles.coupons}
              />
              <button className={styles.apply} onClick={handleOpenPopup}> Apply </button>
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
