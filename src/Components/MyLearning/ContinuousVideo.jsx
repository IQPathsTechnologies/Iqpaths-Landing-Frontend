import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from './ContinuousVideo.module.css';
import { AuthService } from '../../axios/User';
import { Link } from 'react-router-dom';
import NotLogedIn from '../../UI/NotLogedIn';
import { UserContext } from '../../context/userContext';



const ContinuousVideo = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noCourses, setNoCourses] = useState(false);
  const { isLoggedIn } = useContext(UserContext);

  // const { user } = useContext(UserContext);
  const apiClass = new AuthService();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClass.getUserCourses();
        setCourses(response.course);
        setIsLoading(false);
        console.log("ContinuousVideo :: fetchData :: response", response);
      } catch (error) {
        setNoCourses(true);
        return;
      }
    };
    fetchData();
  }, []);
  //ye change karna jab user id context se aaye

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
      {isLoading ? (
        <h2>Welcome, ready for Learing lesson?</h2>
      ) : (
        <h2>Welcome back buddy, ready for Learing lesson?</h2>
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
                  <span
                    className={styles.progressText}
                    style={{ backgroundColor: "#f0f0f0" }}
                  ></span>
                </div>
              </div>
            ))
          ) : (
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
                    <span className={styles.progressText}>
                      {/* Lesson {lesson.progress} of {lesson.totalLessons} */}
                      LIVE 
                    </span>
                  </div>
                </Link>
              </div>
            ))
          )}
          {/* {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.image} style={{ backgroundColor: "#f0f0f0" }}></div>
                <h3 className={styles.title} style={{ backgroundColor: "#f0f0f0" }}></h3>
                <div className={styles.details}>
                  <span className={styles.instructor} style={{ backgroundColor: "#f0f0f0" }}></span>
                  <div className={styles.progressBar} style={{ backgroundColor: "#f0f0f0" }}>
                    <div className={styles.progress} style={{ width: "0%" }}></div>
                  </div>
                  <span className={styles.progressText} style={{ backgroundColor: "#f0f0f0" }}></span>
                </div>
              </div>
            ))
          ) :   
            courses.map((lesson) => (
              <div key={lesson.id} className={styles.card}>
                <Link to={`/view-lectures/${lesson.courseId}`} className={styles.link}>
                <img src={lesson.thumbnail} alt={lesson.title} className={styles.image} />
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
                </Link>
              </div>
            ))
          } */}
        </div>
        {isLoading && isLoggedIn ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ContinuousVideo;
