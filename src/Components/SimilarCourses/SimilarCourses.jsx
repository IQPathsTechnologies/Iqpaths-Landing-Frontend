import React, { useState } from "react";
import styles from "./SimilarCourses.module.css";

const SimilarCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Masterclass in Design Thinking, Innovation & Creativity",
      instructor: "Ana Kursova",
      image: 'src/assets/highlightedCourse.jpg', // Replace with actual image path
    },
    {
      id: 2,
      title: "Design Fundamentals",
      instructor: "Kitani Studio",
      image: "src/assets/sideCourse1.png", // Replace with actual image path
      content: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "24.92",
      originalPrice: "32.90",
      stars: 4.5,
      ratings: "(1.2k)",
      tags: ["Best Seller", "20% OFF"],
    },
    {
      id: 3,
      title: "Ionic - Build iOS, Android & Web...",
      instructor: "Kitani Studio",
      image: "src/assets/sideCourse2.png", // Replace with actual image path
      content: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "24.92",
      originalPrice: "32.90",
      stars: 4.5,
      ratings: "(1.2k)",
      tags: ["Best Seller", "20% OFF"],
    },
    {
      id: 4,
      title: "Bootcamp Vue.js Web Framework",
      instructor: "Kitani Studio",
      image: "src/assets/sideCourse3.png", // Replace with actual image path
      content: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "24.92",
      originalPrice: "32.90",
      stars: 4.5,
      ratings: "(1.2k)",
      tags: ["Best Seller", "20% OFF"],
    },
    {
      id: 5,
      title: "VUE JAVASCRIPT COURSE",
      instructor: "Kitani Studio",
      image: "src/assets/sideCourse4.png", // Replace with actual image path
      content: "More than 8yr Experience as Illustrator. Learn how to becoming professional Illustrator Now...",
      price: "24.92",
      originalPrice: "32.90",
      stars: 4.5,
      ratings: "(1.2k)",
      tags: ["Best Seller", "20% OFF"],
    },
  ]);

  const [highlightedCourse, setHighlightedCourse] = useState({
    id: 1,
    title: "Masterclass in Design Thinking, Innovation & Creativity",
    instructor: "Ana Kursova",
    image: "src/assets/highlightedCourse.jpg", // Replace with actual image path
    price: "19.99", // Add details similar to other cards
    originalPrice: "29.99",
    reviews: "(2k)",
    stars: 4.8,
    tags: ["Editor's Choice", "30% OFF"],
  });

  const handleCardClick = (clickedCourse) => {
    const updatedCourses = courses.filter(
      (course) => course.id !== clickedCourse.id && course.id !== highlightedCourse.id
    );

    // Ensure the highlighted course being added to the right section contains all the details
    const updatedHighlightedCourse = {
      ...clickedCourse,
      price: clickedCourse.price || "19.99", // Set a default value if not present
      originalPrice: clickedCourse.originalPrice || "29.99",
      reviews: clickedCourse.reviews || "(2k)",
      stars: clickedCourse.stars || 4.8,
      tags: clickedCourse.tags || ["Editor's Choice", "30% OFF"],
    };

    setCourses([highlightedCourse, ...updatedCourses, updatedHighlightedCourse]);
    setHighlightedCourse(clickedCourse);
  };

  return (
    <div className={styles.container}>
      <h2>Similar Courses</h2>
      <div className={styles.content}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.left}>
          <img
            src={highlightedCourse.image}
            alt={highlightedCourse.title}
            className={styles.leftImage}
          />
          <div className={styles.leftInfo}>
            <p className={styles.instructor}>{highlightedCourse.instructor}</p>
            <h3 className={styles.title}>{highlightedCourse.title}</h3>
            <div className={styles.extraInfo}>
            <p className={styles.price}>
              <span className={styles.discountedPrice}>${highlightedCourse.price}</span>{" "}
              <span className={styles.originalPrice}>
                ${highlightedCourse.originalPrice}
              </span>
            </p>
            <p className={styles.reviews}>
              <span className={styles.stars}>
                {"⭐".repeat(Math.floor(highlightedCourse.stars || 0))}
              </span>{" "}
              {highlightedCourse.reviews}
            </p>
            </div>
          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {courses
            .filter((course) => course.id !== highlightedCourse.id)
            .map((course) => (
              <div
                key={course.id}
                className={styles.card}
                onClick={() => handleCardClick(course)}
              >
                <img src={course.image} alt={course.title} className={styles.cardImage} />
                <div className={styles.cardInfo}>
                  <p className={styles.tags}>
                    {course.tags?.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span> 
                    ))}
                  </p>
                  <h4 className={styles.cardTitle}>{course.title}</h4>
                  <p className={styles.cardInstructor}>by {course.instructor}</p>
                  <p className={styles.content}>{course.content}</p>
                  <p className={styles.reviews}>
                    <span className={styles.stars}>
                      {"⭐".repeat(Math.floor(course.stars || 0))}
                    </span>{" "}
                    {course.ratings}
                  </p>
                  <p className={styles.cardPrice}>
                    {course.price && (
                      <>
                        <span className={styles.discountedPrice}>${course.price}</span>{" "}
                        <span className={styles.originalPrice}>
                          ${course.originalPrice}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarCourses;
