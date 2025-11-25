import React, { useState, useRef , useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import styles from './CourseDetails.module.css'; 
import VideoPop from './VideoPop';

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  
    const [courseDetails, setCourseDetails] = useState({});
    const [review, setReview ] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const [popupContent, setPopupContent] = useState(null);

    const reviewsPerPage = 3;
    const { id } = useParams();
    const apiClass = new AuthService();

    const allReviews = [
        { name: "Aman Verma", date: "2025-05-10", comment: "Iqpaths ka Data Structures course bahut achha tha." },
        { name: "Shruti Sharma", date: "2025-04-28", comment: "Main ne Aptitude crash course liya tha placement ke liye. Bahut helpful raha." },
        { name: "Rohit Singh", date: "2025-03-18", comment: "Web Development bootcamp beginner-friendly hai." },
        { name: "Neha Kumari", date: "2025-02-06", comment: "Coding se dar rahi thi pehle, lekin confidence aaya." },
        { name: "Arjun Yadav", date: "2025-01-21", comment: "Mock Interviews se kaafi help mili. Feedback genuine tha." },
        { name: "Simran Kapoor", date: "2024-12-17", comment: "Python course projects ache level ke the." },
        { name: "Vikas Chauhan", date: "2024-11-11", comment: "Resume building session practical tha." },
        { name: "Riya Mehra", date: "2024-10-03", comment: "Course content updated hai, placement prep ke liye best." }
    ];

    const overallRating = [
        { stars: 5, percentage: 90 },
        { stars: 4, percentage: 5 },
        { stars: 3, percentage: 2 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 },
    ];

    const colors = ["#F44336", "#E91E63", "#9C27B0", "#3F51B5", "#2196F3", "#009688", "#4CAF50", "#FF9800", "#795548"];
    const getRandomColor = (name) => colors[Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % colors.length];

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
          try {
            const response = await apiClass.getCourseDetails(id);
            setCourseDetails(response.details);    
          } catch (error) {
            console.log("Error fetching course details:", error);
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
            console.log("Error fetching reviews:", error);
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
      return () => document.removeEventListener("click", handlePopupClose);
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
          {courseDetails?.chapters?.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.section}>
              <div
                className={styles.sectionHeader}
                onClick={() =>
                  setOpenDropdown(openDropdown === sectionIndex ? null : sectionIndex)
                }
              >
                <span>{section.name}</span>
                <span>{section.lectures.length} Lessons</span>
                <span className={styles.arrowIcon}>
                  {openDropdown === sectionIndex ? (
                    <img src="/upArrow.png" alt="Up Arrow" />
                  ) : (
                    <img src="/downArrow.png" alt="Down Arrow" />
                  )}
                </span>
              </div>

              {openDropdown === sectionIndex && (
                <div className={styles.sectionContent}>
                  {section.lectures.map((lesson, lectureIndex) => {
                    // Lecture free if lesson.free === true
                    const isPreview = lesson.free;

                    return (
                      <div key={lectureIndex} className={styles.lesson}>
                        <div className={styles.lessons}>
                          <img src="/lesson.png" alt="Lesson" />
                          <span className={styles.name}>{lesson.title}</span>
                        </div>

                        <div className={styles.button}>
                          <button
                            className={styles.previewButton}
                            onClick={() => isPreview && handleLectureClick(lesson)}
                            disabled={!isPreview}
                          >
                            {isPreview ? "Preview" : "Locked"}
                          </button>

                          <span className={styles.lessonTime}>{lesson.duration}</span>

                          {isPreview ? (
                            <span className={styles.lessonCheck}>
                              <img src="/tick.png" alt="Tick" />
                            </span>
                          ) : (
                            <span className={styles.lessonLock}>
                              <img src="/lock.png" alt="Lock" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {isPopupOpen && popupContent && (
            <div className={styles.popup} ref={popupRef}>
              <div className={styles.popupContent}>
                <h3>{popupContent.title}</h3>
                <iframe
                  src={popupContent.video || popupContent.videoUrl}
                  width="100%"
                  height="400"
                  allow="autoplay"
                  allowFullScreen
                  style={{ borderRadius: "8px" }}
                  title="Lecture Video"
                ></iframe>
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className={styles.closeButton}
                >
                  Close
                </button>
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
            </div>
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
                <span className={`${styles.faqQuestion} ${openDropdown === index ? styles.activeQuestion : ""}`}>
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
                  <p className={styles.commentDate}>{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <p className={styles.commentText}>{review.comment}</p>
            </div>
          ))}
        </div>
      )
    };

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabs}>
                {Object.keys(tabContent)?.map((tab) => (
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
