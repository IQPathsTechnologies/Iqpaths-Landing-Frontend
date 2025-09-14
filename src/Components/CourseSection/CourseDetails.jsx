import React, { useState, useRef, useEffect } from "react";
import { AuthService } from "../../axios/User";
import { useParams } from "react-router-dom";
import styles from "./CourseDetails.module.css";

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page of reviews
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
      name: "Shruti Sharma",
      date: "2025-04-28",
      comment:
        "Main ne Aptitude crash course liya tha placement ke liye. Bahut helpful raha.",
    },
    {
      name: "Rohit Singh",
      date: "2025-03-18",
      comment: "Web Development bootcamp beginner-friendly hai.",
    },
    {
      name: "Neha Kumari",
      date: "2025-02-06",
      comment: "Coding se dar rahi thi pehle, lekin confidence aaya.",
    },
    {
      name: "Arjun Yadav",
      date: "2025-01-21",
      comment: "Mock Interviews se kaafi help mili. Feedback genuine tha.",
    },
    {
      name: "Simran Kapoor",
      date: "2024-12-17",
      comment: "Python course projects ache level ke the.",
    },
    {
      name: "Vikas Chauhan",
      date: "2024-11-11",
      comment: "Resume building session practical tha.",
    },
    {
      name: "Riya Mehra",
      date: "2024-10-03",
      comment: "Course content updated hai, placement prep ke liye best.",
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
  const currentReviews = allReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const apiClass = new AuthService();
  const [showToast, setShowToast] = useState(false);

  const handleLockedLecture = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 sec
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
    console.log("🎬 handleLectureClick ->", lesson); // Preview lecture clicked
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
                if (isPreview) {
                  console.log("🟢 Preview Lecture Found:", lecture);
                }
                return {
                  ...lecture,
                  preview: isPreview,
                  locked: !isPreview,
                };
              }) || [];

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
                                : (console.log("🔒 Locked Lecture Clicked:", lesson.title), handleLockedLecture())
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
              <span>
                <img
                  src="/studentIcon.png"
                  alt="Students Icon"
                  className={styles.icon}
                />
                100+ Students Taught
              </span>
              <span>
                <img
                  src="/lessonIcon.png"
                  alt="Lessons Icon"
                  className={styles.icon}
                />
                20 Lessons
              </span>
            </div>
          </div>
        </div>
        <div className={styles.instructorDescription}>
          <p>
            Our instructor at IQPaths is a seasoned professional with extensive
            experience in the field. With a passion for teaching and a deep
            understanding of the subject matter, they have successfully guided
            numerous students towards achieving their learning goals. Their
            engaging teaching style, combined with practical insights and
            real-world examples, which ensures that students not only grasp
            theoretical concepts but also learn how to apply them effectively.
          </p>
        </div>
      </div>
    ),
    FAQs: (
      <div className={styles.faqs}>
        {courseDetails?.faq?.map((faq, index) => (
          <div key={faq._id} className={styles.faqItem}>
            <div
              className={styles.faqHeader}
              onClick={() =>
                setOpenDropdown(openDropdown === index ? null : index)
              }
            >
              <span
                className={`${styles.faqQuestion} ${
                  openDropdown === index ? styles.activeQuestion : ""
                }`}
              >
                {faq.question}
              </span>
              <span className={styles.arrows}>
                {openDropdown === index ? (
                  <img src="/upArrow.png" alt="Collapse" />
                ) : (
                  <img src="/downArrow.png" alt="Expand" />
                )}
              </span>
            </div>
            {openDropdown === index && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    ),
    Reviews: (
      <div className={styles.reviews}>
        <div className={styles.comments}> Comments </div>
        <div className={styles.ratingSection}>
          <div className={styles.averageRating}>
            <span className={styles.ratingScore}>5.0</span>
            <div className={styles.count}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.ratingCount}>based on 1,500+ ratings</p>
            </div>
          </div>
          <div className={styles.ratingBreakdown}>
            {overallRating?.map((rating, index) => (
              <div key={index} className={styles.ratingBarRow}>
                <span>{rating.stars} ★</span>
                <div className={styles.ratingBar}>
                  <div
                    className={styles.ratingFill}
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.commentSection}>
          {currentReviews?.map((review, index) => (
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
                  <p className={styles.commentDate}>
                    {" "}
                    {new Date(review.date).toLocaleDateString()}{" "}
                  </p>
                </div>
              </div>
              <p className={styles.commentText}>{review.comment}</p>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {[...Array(Math.ceil(allReviews.length / reviewsPerPage)).keys()].map(
            (page) => (
              <button
                key={page}
                onClick={() => paginate(page + 1)}
                className={currentPage === page + 1 ? styles.activePage : ""}
              >
                {page + 1}
              </button>
            )
          )}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(allReviews.length / reviewsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{courseDetails.name}</h2>
          <div className={styles.tabSection}>
            {["Overview", "Curriculum", "Instructor", "FAQs", "Reviews"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`${styles.tabButton} ${
                    activeTab === tab ? styles.activeTab : ""
                  }`}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenDropdown(null);
                  }}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className={styles.tabContent}>{tabContent[activeTab]}</div>
        </div>

        <div className={styles.right}>
          <img
            src={courseDetails.image || "/defaultCourseImage.png"}
            alt={courseDetails.name}
            className={styles.courseImage}
          />
          <h3>₹{courseDetails.price}</h3>
          <button className={styles.enrollButton}>Enroll Now</button>
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
