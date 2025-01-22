import React, { useRef, useState, useEffect, useContext } from "react";
import styles from "./ContinuousVideo.module.css";
import { AuthService } from "../../axios/User";
import { Link } from "react-router-dom";
import NotLogedIn from "../../UI/NotLogedIn";
import { UserContext } from "../../context/userContext";


const ContinuousVideo = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noCourses, setNoCourses] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  const apiClass = new AuthService();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClass.getUserCourses();
        setCourses(response.course || []);
        setNoCourses(response.course.length === 0);
        setIsLoading(false);
      } catch (error) {
        setNoCourses(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const updateScrollButtons = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      setCanScrollLeft(carousel.scrollLeft > 0);
      setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollButtons();
      carousel.addEventListener("scroll", updateScrollButtons);
      return () => {
        carousel.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, [courses]);

  const handleScroll = (direction) => {
    const carousel = carouselRef.current;
    const cardWidth = 320; // Card width (300px) + gap (20px)
    if (carousel) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.section}>
      {isLoading ? (
        <h2>Welcome, ready for Learning lessons?</h2>
      ) : (
        <h2>Welcome back buddy, ready for Learning lessons?</h2>
      )}
      <div className={styles.carousel}>
        <div className={styles.cardContainer} ref={carouselRef}>
          {!isLoggedIn ? (
            <NotLogedIn />
          ) : isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <div
                  className={styles.image}
                  style={{ backgroundColor: "#f0f0f0" }}
                ></div>
                <h3
                  className={styles.title}
                  style={{ backgroundColor: "#f0f0f0" }}
                ></h3>
                <div className={styles.details}>
                  <span
                    className={styles.instructor}
                    style={{ backgroundColor: "#f0f0f0" }}
                  ></span>
                  <div
                    className={styles.progressBar}
                    style={{ backgroundColor: "#f0f0f0" }}
                  >
                    <div
                      className={styles.progress}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))
          ) : 
          noCourses ? (
            <div className={styles.card}>
              <div className={styles.image}></div>
              <h3 className={styles.title}>No courses found</h3>
              <div className={styles.details}>
                <span className={styles.instructor}>Please buy a course</span>
              </div>
            </div>
          ) :
          (
            courses.map((lesson) => (
              <div key={lesson.id} className={styles.card}>
                <Link
                  to={`/view-lectures/${lesson.title}`}
                  className={styles.link}
                  state={{ courseId: lesson.courseId }}
                >
                  <img
                    src={lesson.thumbnail}
                    alt={lesson.title}
                    className={styles.image}
                  />
                  <h3 className={styles.title}>{lesson.title}</h3>
                  <div className={styles.details}>
                    <span className={styles.instructor}>
                      {lesson.instructor}
                    </span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progress}
                        style={{
                          width: `${
                            (lesson.progress / lesson.totalLessons) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className={styles.progressText}>LIVE</span>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
        {isLoggedIn && courses.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default ContinuousVideo;
