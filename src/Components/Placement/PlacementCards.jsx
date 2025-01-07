import React, { useState, useEffect, useContext } from "react";
import styles from "./PlacementCards.module.css";
import { Link } from "react-router-dom";
import { AuthService } from '../../axios/User';
import { CoursesContext } from "../../context/coursesContext";


const apiClass = new AuthService();


// Props: courses and selectedFilters
const PlacementCards = ({ activeCategory, selectedFilters }) => {
  const {courses,setCourses}= useContext(CoursesContext)
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await apiClass.getCourses();
        const responseplacement = await apiClass.getPlacementCourses();
        console.log("resopnse of palcement",responseplacement.placementPreparation)
        setCourses(responseplacement.placementPreparation);
      } catch (error) {
        console.log("CourseCard :: useEffect :: error", error);
      }
    }
    fetchData();
  }
  , []);




  // Function to apply filters
  const applyFilters = (course) => {
    for (const [filterCategory, filterValues] of Object.entries(selectedFilters)) {
      if (filterValues.length > 0) {
        if (!filterValues.some((filter) => course[filterCategory]?.includes(filter))) {
          return false; // If any filter doesn't match, exclude the course
        }
      }
    }
    return true; // If all filters match, include the course
  };

  // Filter courses based on the active category and selectedFilters
  const filteredCourses =
    activeCategory === "ALL PROGRAM"
      ? courses?.filter(applyFilters)
      : courses?.filter((course) => course.category === activeCategory && applyFilters(course));


  return (
    <div className={styles.cardsContainer}>
      {filteredCourses?.length > 0 ? (
        
        filteredCourses.map((course, index) => (
          <Link to={`/course/${course.title}/${course._id}`} key={index} className={styles.link}>
          <div key={index} className={styles.card}>
            {/* Card Image */}
            <img src={course.coverPhoto} alt={course.title} className={styles.cardImage} />

            {/* Card Content */}
            <div className={styles.cardContent}>
              {/* Badge */}
              <div className={styles.badgeContainer}>
                <div className={styles.learning}>
                  <img src="/play.png" alt="" />
                  <span className={styles.badge}>Start Learning</span>
                </div>
                <div className={styles.ranking}>
                  {[...Array(course.review || 5)].map((_, i) => (
                    <img src="/starFilled.svg" alt="rating" className={styles.stars} key={i}/>
                  ))}
                  {[...Array(5 - course.review || 0)].map((_, i) => (
                    <img src="/starEmpty.svg" alt="rating" className={styles.stars} key={i} />
                  ))}
                  <span className={styles.rating}>{(5).toFixed(1)} Rating</span>
                </div>
              </div>

              {/* Title */}
              <h3 className={styles.title}>{course.title}</h3>

              {/* Details */}
              <div className={styles.details}>
                <ul className={styles.pointsList}>
                  {course.description.map((detail, i) => (
                    <li key={i} className={styles.point}>
                      {<span className={styles.primaryDetail}>{detail}</span>}

                      <span className={styles.priceDetail}>
                        <span className={styles.originalPrice}>{detail.realPrice}</span>{" "}
                        <span className={styles.discountedPrice}>{detail.price}</span>
                      </span>
                      
                    </li>
                  ))}
                  <li className={styles.point}>
                      <span className={styles.priceDetail}>
                        <span className={`${styles.originalPrice} ${course.discountedPrice ? styles.strike : ""}`}>Rs. {course.realPrice}</span>{" "}
                        <span className={styles.discountedPrice}>Rs. {course.price}</span>
                      </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className={styles.details}>
                <ul className={styles.pointsList}>
                  {course.details.map((detail, i) => (
                  
                  ))}
                  <li className={styles.point}>
                  <span className={styles.priceDetail}>
                    <span className={styles.originalPrice}>{course.details[2].original}</span>{" "}
                    <span className={styles.discountedPrice}>{course.details[2].discounted}</span>
                  </span>
                  </li>
                </ul> 
                </div>
              </div> */}



            {/* Action Button */}
            <button className={styles.learnNowButton}>Learn Now</button>
          </div>
          </Link>
        ))

      ) : (
        <p className={styles.noCourses}>No courses available for this category.</p>
      )}
    </div>
  );
};

export default PlacementCards;
