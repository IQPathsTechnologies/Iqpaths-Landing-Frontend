import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from './ContinuousVideo.module.css';
import { AuthService } from '../../axios/User';
import UserContext from '../../context/userContext';

const lessons = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    instructor: "Lina",
    progress: 5,
    totalLessons: 7,
    image: "/learning.png",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    instructor: "Lina",
    progress: 5,
    totalLessons: 7,
    image: "/learning.png",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    instructor: "Lina",
    progress: 5,
    totalLessons: 7,
    image: "/learning.png",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    instructor: "Lina",
    progress: 5,
    totalLessons: 7,
    image: "/learning.png",
  },
];

const ContinuousVideo = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  // const [lessons, setLessons] = useState([]);


  const { user } = useContext(UserContext);
  const apiClass = new AuthService();


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const response = await apiClass.getMyCourses({ userId: user._id });
  //       setLessons(response.lessons);
  //     } catch (error) {
  //       console.error("Error fetching lessons", error);
  //     }
  //   };
  // }, [user._id]);
  


  const updateScrollButtons = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 0);
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
  };

  useEffect(() => {
    updateScrollButtons();
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", updateScrollButtons);
    return () => {
      carousel.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = 320; // Card width (300px) + gap (20px)
    if (direction === "left") {
      carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else if (direction === "right") {
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.section}>
      <h2>Welcome back, ready for your next lesson?</h2>
      <div className={styles.carousel}>
        <div className={styles.cardContainer} ref={carouselRef}>
          {lessons.map((lesson) => (
            <div key={lesson.id} className={styles.card}>
              <img src={lesson.image} alt={lesson.title} className={styles.image} />
              <h3 className={styles.title}>{lesson.title}</h3>
              <div className={styles.details}>
                <span className={styles.instructor}>{lesson.instructor}</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: `${(lesson.progress / lesson.totalLessons) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className={styles.progressText}>
                  Lesson {lesson.progress} of {lesson.totalLessons}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.navigationButtons}>
          <button
            className={`${styles.navigationButton} ${
              !canScrollLeft ? styles.disabled : ""
            }`}
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
          >
            &lt;
          </button>
          <button
            className={`${styles.navigationButton} ${
              !canScrollRight ? styles.disabled : ""
            }`}
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContinuousVideo;
