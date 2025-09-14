import React, { useState, useRef, useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import styles from './CourseDetails.module.css';

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [courseDetails, setCourseDetails] = useState({});
  const [review, setReview] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);

  const { id } = useParams();
  const apiClass = new AuthService();
  const reviewsPerPage = 3;

  const colors = ["#F44336", "#E91E63", "#9C27B0", "#3F51B5", "#2196F3", "#009688", "#4CAF50", "#FF9800", "#795548"];
  const getRandomColor = (name) => {
    const charCodeSum = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  };

  // Pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = review.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fetch course details
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchCourseDetails() {
      try {
        const response = await apiClass.getCourseDetails(id);
        setCourseDetails(response.details || {});
      } catch (error) {
        console.log("Error fetching course details:", error);
      }
    }
    fetchCourseDetails();
  }, [id]);

  // Fetch reviews
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await apiClass.getReviews(id);
        setReview(response.review || []);
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    }
    fetchReviews();
  }, [id]);

  // Popup close
  const handlePopupClose = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopupOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handlePopupClose);
    return () => document.removeEventListener("click", handlePopupClose);
  }, []);

  const handleLectureClick = (lesson) => {
    setPopupContent(lesson);
    setIsPopupOpen(true);
  };

  const overallRating = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  const tabContent = {
    Overview: (
      <div className={styles.overview}>
        <p>{courseDetails.overview}</p>
      </div>
    ),

    Curriculum: (
      <div className={styles.curriculum}>
        {courseDetails?.chapters?.map((section, index) => {
          const lecturesToShow = section.lectures.map((lecture, idx) => ({
            ...lecture,
            preview: index === 0 && idx < 2 ? true : false
          }));
          return (
            <div key={index} className={styles.section}>
              <div
                className={styles.sectionHeader}
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <span>{section.name}</span>
                <span>{section.lectures.length} Lessons</span>
                <span className={styles.arrowIcon}>
                  {openDropdown === index ? <img src="/upArrow.png" alt="Up" /> : <img src="/downArrow.png" alt="Down" />}
                </span>
              </div>
              {openDropdown === index && (
                <div className={styles.sectionContent}>
                  {lecturesToShow.map((lesson, idx) => (
                    <div key={idx} className={styles.lesson}>
                      <div className={styles.lessons}>
                        <img src="/lesson.png" alt="Lesson" />
                        <span className={styles.name}>{lesson.title}</span>
                      </div>
                      <div className={styles.button}>
                        <button
                          className={styles.previewButton}
                          onClick={() => lesson.preview && handleLectureClick(lesson)}
                        >
                          {lesson.preview ? "Preview" : "LIVE"}
                        </button>
                        <span className={styles.lessonTime}>{lesson.duration} lecture</span>
                        {lesson.preview && <span className={styles.lessonCheck}><img src="/tick.png" alt="Tick" /></span>}
                        {!lesson.preview && <span className={styles.lessonLock}><img src="/lock.png" alt="Lock" /></span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {isPopupOpen && popupContent && (
          <div className={styles.popup} ref={popupRef}>
            <div className={styles.popupContent}>
              <h3>{popupContent.title}</h3>
              <video
                src={popupContent.videoUrl}
                controls
                autoPlay
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <button onClick={() => setIsPopupOpen(false)} className={styles.closeButton}>Close</button>
            </div>
          </div>
        )}
      </div>
    ),

    Instructor: (
      <div className={styles.instructor}>
        <div className={styles.instructorHeader}>
          <img
            src={courseDetails.instructor?.profilePhoto || "/instructor.png"}
            alt="Instructor Logo"
            className={styles.instructorLogo}
          />
          <div className={styles.instructorInfo}>
            <h3>{courseDetails?.instructor?.name}</h3>
            <p>{courseDetails?.instructor?.description}</p>
            <div className={styles.instructorStats}>
              <span><img src="/studentIcon.png" alt="Students" /> 100+ Students Taught</span>
              <span><img src="/lessonIcon.png" alt="Lessons" /> 20 Lessons</span>
            </div>
          </div>
        </div>
      </div>
    ),

    FAQs: (
      <div className={styles.faqs}>
        {courseDetails?.faq?.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqHeader}
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            >
              <span className={`${styles.faqQuestion} ${openDropdown === index ? styles.activeQuestion : ""}`}>
                {faq.question}
              </span>
              <span className={styles.arrows}>
                {openDropdown === index ? <img src="/upArrow.png" alt="Collapse" /> : <img src="/downArrow.png" alt="Expand" />}
              </span>
            </div>
            {openDropdown === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    ),

    Reviews: (
      <div className={styles.reviews}>
        <div className={styles.ratingSection}>
          <div className={styles.averageRating}>
            <span className={styles.ratingScore}>5.0</span>
            <div className={styles.count}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.ratingCount}>based on {review.length}+ ratings</p>
            </div>
          </div>
          <div className={styles.ratingBreakdown}>
            {overallRating.map((rating, index) => (
              <div key={index} className={styles.ratingBarRow}>
                <span>{rating.stars} ★</span>
                <div className={styles.ratingBar}>
                  <div className={styles.ratingFill} style={{ width: `${rating.percentage}%` }}></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.commentSection}>
          {currentReviews.map((review, index) => (
            <div key={index} className={styles.comment}>
              <div className={styles.commentHeader}>
                <div
                  className={styles.commentAvatar}
                  style={{ backgroundColor: getRandomColor(review.name) }}
                >
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.names}>
                  <h4 className={styles.commentName}>{review.name}</h4>
                  <p className={styles.commentDate}>{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <p className={styles.commentText}>{review.comment}</p>
            </div>
          ))}
        </div>

        <div className={styles.pagination}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
          <span>{currentPage}</span>
          <span>/ {Math.ceil(review.length / reviewsPerPage)}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(review.length / reviewsPerPage)}
          >&gt;</button>
        </div>
      </div>
    ),
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        {Object.keys(tabContent).map(tab => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabContent[activeTab]}</div>
    </div>
  );
};

export default CourseDetails;
