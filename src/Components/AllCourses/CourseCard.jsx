import React from "react";
import styles from "./CourseCard.module.css";
import pythonImg from "../../assets/subject.png";
import machineLearningImg from "../../assets/subject.png";
import backendImg from "../../assets/subject.png";
import frontendImg from "../../assets/subject.png";
import uiuxImg from "../../assets/subject.png";
import ratingImg from "../../assets/rating.png";

// Props: courses and selectedFilters
const CourseCard = ({ activeCategory, selectedFilters }) => {
  const courses = [
    {
      courseId: 1,
      category: "DATA SCIENCE",
      image: pythonImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "DS using Python",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
    {
      courseId: 2,
      category: "MACHINE LEARNING",
      image: machineLearningImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "Machine Learning",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
    {
      courseId: 3,
      category: "MACHINE LEARNING",
      image: machineLearningImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "Machine Learning",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
    {
      courseId: 4,
      category: "WEB DEVELOPMENT",
      image: backendImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "Back End Developer",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
    {
      courseId: 5,
      category: "WEB DEVELOPMENT",
      image: frontendImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "Front End Developer",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
    {
      courseId: 6,
      category: "UI/UX",
      image: uiuxImg,
      badge: "Start Learning",
      img: ratingImg,
      rating: "4.0 (2 ratings)",
      title: "UI/UX Design",
      details: [
        "Learn ML course with internship in IQPath Technologies",
        "Limited seats available!!",
        { original: "Rs. 9999", discounted: "Rs. 4999" },
      ],
    },
  ];

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
      ? courses.filter(applyFilters)
      : courses.filter((course) => course.category === activeCategory && applyFilters(course));


  return (
    <div className={styles.cardsContainer}>
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course, index) => (
          <div key={index} className={styles.card}>
            {/* Card Image */}
            <img src={course.image} alt={course.title} className={styles.cardImage} />

            {/* Card Content */}
            <div className={styles.cardContent}>
              {/* Badge */}
              <div>
                <div className={styles.learning}>
                  <img src="src/assets/play.png" alt="" />
                  <span className={styles.badge}>{course.badge}</span>
                </div>
                <div className={styles.ranking}>
                  <img src={course.img} alt="rating" className={styles.stars} />
                  <p className={styles.rating}>{course.rating}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className={styles.title}>{course.title}</h3>

              {/* Details */}
              <div className={styles.details}>
                <ul className={styles.pointsList}>
                  {course.details.map((detail, i) => (
                    <li key={i} className={styles.point}>
                      {i === 0 && <span className={styles.primaryDetail}>{detail}</span>}
                      {i === 1 && <span className={styles.secondaryDetail}>{detail}</span>}
                      {i === 2 && (
                        <span className={styles.priceDetail}>
                          <span className={styles.originalPrice}>{detail.original}</span>{" "}
                          <span className={styles.discountedPrice}>{detail.discounted}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <button className={styles.learnNowButton}>Learn Now</button>
          </div>
        ))
      ) : (
        <p className={styles.noCourses}>No courses available for this category.</p>
      )}
    </div>
  );
};

export default CourseCard;
