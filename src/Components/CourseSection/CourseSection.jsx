import React, { useState, useEffect } from "react";
import SignUpPopup from "./SignUpPopup";
import styles from "./CourseSection.module.css";
import CourseDetails from "./CourseDetails";

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
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true); // Show the pop-up
    document.body.style.overflow = "hidden"; // Disable scrolling
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

  return (
    <>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.courseHeading}>
            <div className={styles.courseDetails}>
              <p className={styles.heading}>All Program &gt; {programName}</p>
              <h6 className={styles.title}> {courseTitle} </h6>
              <p className={styles.description}> {description} </p>

              <div className={styles.extraInfo}>
                <div className={styles.info}>
                  <img src="src/assets/duration.png" alt="Duration" />
                  <p> {duration} </p>
                </div>
                <div className={styles.info}>
                  <img src="src/assets/students.png" alt="Students" />
                  <p> {students} </p>
                </div>
                <div className={styles.info}>
                  <img src="src/assets/levels.png" alt="Levels" />
                  <p> {levels} </p>
                </div>
                <div className={styles.info}>
                  <img src="src/assets/lessons.png" alt="Lessons" />
                  <p> {lessons} </p>
                </div>
                <div className={styles.info}>
                  <img src="src/assets/quizzes.png" alt="Quizzes" />
                  <p> {quizzes} </p>
                </div>
              </div>

              <div className={styles.rating}>
                <p> {rating} </p>
                <img src="src/assets/rating.png" alt="ratings" />
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
              <img src="src/assets/preview.png" alt="Preview" />
            </div>
            <div className={styles.coursePricing}>
              <p className={styles.price}> {coursePrice} </p>
              <p className={styles.discount}> {discount} </p>
            </div>
            <div className={styles.timeLeft}>
              <img src="src/assets/alarm.png" alt="Alarm" />
              <p> {hoursLeft} </p>
            </div>
            <div className={styles.buyDetails}>
              <div className={styles.details}>
                <button className={styles.cart} onClick={handleOpenPopup}>
                  <p> Add to cart </p>
                </button>
                <img
                  src="src/assets/wishlist.png"
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
                <img src="src/assets/camera.png" alt="Camera" />
                <p> {hours} </p>
              </div>
              <div className={styles.content}>
                <img src="src/assets/download.png" alt="Download" />
                <p> {download} </p>
              </div>
              <div className={styles.content}>
                <img src="src/assets/access.png" alt="Access" />
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
