import React, { useState, useRef, useEffect } from "react";
import { AuthService } from "../../axios/User";
import { useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [courseDetails, setCourseDetails] = useState([]);
  const [review, setReview] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const [popupContent, setPopupContent] = useState("");

  const reviewsPerPage = 3;
  const { title, id } = useParams();

  const allReviews = [
    {
      name: "Aman Verma",
      date: "2025-05-10",
      comment: "Iqpaths ka Data Structures course bahut achha tha.",
    },
    {
      name: "Divya Singh",
      date: "2025-04-25",
      comment: "Mujhe Machine Learning course ne bohot kuch sikhaya.",
    },
    {
      name: "Rahul Sharma",
      date: "2025-03-15",
      comment: "Course content simple aur easy to understand tha.",
    },
    {
      name: "Priya Patel",
      date: "2025-02-10",
      comment: "Best platform to learn coding.",
    },
    {
      name: "Karan Gupta",
      date: "2025-01-20",
      comment: "Instructor ne concepts ache tareeke se samjhaye.",
    },
  ];

  const overallRating = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  const colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#3F51B5",
    "#2196F3",
    "#009688",
    "#4CAF50",
    "#FF9800",
    "#795548",
  ];

  function getRandomColor(name) {
    const charCodeSum = Array.from(name).reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0
    );
    return colors[charCodeSum % colors.length];
  }

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const apiClass = new AuthService();
  const [showToast, setShowToast] = useState(false);

  const handleLockedLecture = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await apiClass.getCourseDetails(id);
        setCourseDetails(response.details);
      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiClass.getReviews(id);
        setReview(response.review);
      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);

  const handlePopupClose = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handlePopupClose);

    return () => {
      document.removeEventListener("click", handlePopupClose);
    };
  }, []);

  const handleLectureClick = (lesson) => {
    setPopupContent(lesson);
    setIsPopupOpen(true);
  };

  const tabContent = {
    Overview: (
      <div className={styles.overview}>
        <p>{courseDetails.overview}</p>
      </div>
    ),
    Curriculum: (
      <div className={styles.curriculum}>
        <p>
          Unlock the power of data with our comprehensive Machine Learning
          course...
        </p>

        {!courseDetails?.chapters || courseDetails.chapters.length === 0 ? (
          <p>Loading curriculum...</p>
        ) : (
          courseDetails.chapters.map((section, index) => {
            const lecturesToShow =
              section.lectures?.map((lecture, idx) => {
                const isPreview = index === 0 && idx < 2;
                return {
                  ...lecture,
                  preview: isPreview,
                  locked: !isPreview,
                };
              }) || [];

            // Preview lectures ka console log
            console.log(
              `Section ${index} Preview Lectures:`,
              lecturesToShow.filter((lec) => lec.preview)
            );

            return (
              <div key={index} className={styles.section}>
                <div
                  className={styles.sectionHeader}
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <span>{section.name}</span>
                  <span>{section.lectures?.length || 0} Lessons</span>
                  <span className={styles.arrowIcon}>
                    {openDropdown === index ? (
                      <img src="/upArrow.png" alt="Up Arrow" />
                    ) : (
                      <img src="/downArrow.png" alt="Down Arrow" />
                    )}
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
                            onClick={() =>
                              lesson.preview
                                ? handleLectureClick(lesson)
                                : handleLockedLecture()
                            }
                          >
                            {lesson.preview ? "Preview" : "LIVE"}
                          </button>
                          <span className={styles.lessonTime}>
                            {lesson.duration} lecture
                          </span>

                          {lesson.preview && (
                            <span className={styles.lessonCheck}>
                              <img src="/tick.png" alt="Tick" />
                            </span>
                          )}

                          {lesson.locked && (
                            <span className={styles.lessonLock}>
                              <img src="/lock.png" alt="Lock" />
                            </span>
                          )}
                        </div>
                      </div>
                    ))}

                    {lecturesToShow.length === 0 && <p>No lectures found.</p>}
                  </div>
                )}
              </div>
            );
          })
        )}

        {isPopupOpen && popupContent && popupContent.videoUrl ? (
          <div className={styles.popup} ref={popupRef}>
            <div className={styles.popupContent}>
              <h3>{popupContent.title}</h3>
              <video
                src={popupContent.videoUrl}
                controls
                autoPlay
                muted
                playsInline
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <button
                onClick={() => setIsPopupOpen(false)}
                className={styles.closeButton}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}

        {showToast && (
          <div className={styles.toast}>
            Please enroll to unlock this lecture.
          </div>
        )}
      </div>
    ),

    Instructor: (
      <div className={styles.instructor}>
        {/* Instructor details can go here */}
      </div>
    ),

    FAQs: (
      <div className={styles.faqs}>
        {/* FAQs content can go here */}
      </div>
    ),

    Reviews: (
      <div className={styles.reviews}>
        {/* Reviews content can go here */}
      </div>
    ),
  };

  return (
    <>
      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          {Object.keys(tabContent).map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>{tabContent[activeTab]}</div>
      </div>
    </>
  );
};

export default CourseDetails;
