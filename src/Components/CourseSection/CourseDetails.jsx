import React, { useState, useRef , useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import styles from './CourseDetails.module.css'; 
import VideoPop from './VideoPop';

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  
    const [courseDetails, setCourseDetails] = useState({}); // Initialized as object
    const [review, setReview ] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const [popupContent, setPopupContent] = useState(null); // store clicked lecture

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

    function getRandomColor(name) {
      const charCodeSum = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
      return colors[charCodeSum % colors.length];
    }

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
      setPopupContent(lesson); // store clicked lecture
      setIsPopupOpen(true);
    };

    const tabContent = {
      Overview: (
        <div className={styles.overview}>
          <p>{courseDetails.overview}</p>
          {/* <p>{courseDetails.description}</p>
          <p>{courseDetails.description}</p> */}
        </div>
      ),
      Curriculum: (
<div className={styles.curriculum}>
  {courseDetails?.chapters?.map((section, sectionIndex) => (
    <div key={sectionIndex} className={styles.section}>
      {/* Section Header */}
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

      {/* Section Content */}
      {openDropdown === sectionIndex && (
        <div className={styles.sectionContent}>
          {section.lectures.map((lesson, lectureIndex) => {
            const isPreview = sectionIndex === 0 && lectureIndex < 2;

            // Console log here
           console.log(`Lecture: ${lesson.title}, preview: ${isPreview}, videoUrl: ${lesson.videoUrl || lesson.video}`);


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

                  <span className={styles.lessonTime}>{lesson.duration} lecture</span>

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

  {/* Video Popup */}
{isPopupOpen && popupContent && (
  <div className={styles.popup} ref={popupRef}>
    <div className={styles.popupContent}>
      <h3>{popupContent.title}</h3>

      {console.log("Popup videoUrl:", popupContent.videoUrl)}

      <iframe
        src={popupContent.videoUrl}
        width="100%"
        height="400"
        allow="autoplay"
        allowFullScreen
        style={{ borderRadius: "8px" }}
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
              // src="/instructor.png"
              src= {courseDetails.instructor?.profilePhoto || "/instructor.png"}
              alt="Instructor Logo"
              className={styles.instructorLogo}
            />
            <div className={styles.instructorInfo}>
              <h3>{courseDetails?.instructor?.name}</h3>
              <p>
              
              {courseDetails?.instructor?.description}
              </p>
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
            Our instructor at IQPaths is a seasoned professional with extensive experience in the field. With a passion for teaching and a deep understanding of the subject matter, they have successfully guided numerous students towards achieving their learning goals. Their engaging teaching style, combined with practical insights and real-world examples, which ensures that students not only grasp theoretical concepts but also learn how to apply them effectively.
          </p>
          </div>
          {/* <div className={styles.socialMedia}>
            <span>Follow:</span>
            <a href="#" className={styles.socialIcon}>
              <img src="/facebookIcon.png" alt="Facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/pinterestIcon.png" alt="Pinterest" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/twitterIcon.png" alt="Twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/instagramIcon.png" alt="Instagram" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/youtubeIcon.png" alt="YouTube" />
            </a>
          </div> */}
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
              {/* ☆ */}
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
                  {/* <img
                    src="/user.png"
                    alt="User"
                    className={styles.commentAvatar}
                  /> */}
                  <div
                    className={styles.commentAvatar}
                    style={{ backgroundColor: getRandomColor(review.name) }}
                  >
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className={styles.names}>
                    <h4 className={styles.commentName}>{review.name}</h4>
                    <p className={styles.commentDate}> {new Date(review.date).toLocaleDateString()} </p>
                  </div>
                </div>
                <p className={styles.commentText}>{review.comment}</p>
                {/* <div className={styles.reply}>
                  <img src="/reply.png" alt="Reply" /> 
                  <button className={styles.replyButton}>Reply</button>
                </div> */}
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.paginationButton}
            >
              &lt; 
            </button>
            <span className={styles.pageNumber}>{currentPage}</span>
            <span className={styles.totalPages}>
              / {Math.ceil(allReviews.length / reviewsPerPage)}{" "}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(allReviews.length / reviewsPerPage)
              }
              className={styles.paginationButton}
            >
              &gt;
            </button>
          </div>
        </div>
      ),
    };

    return (
        <>
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

                {/* {isPopupVisible && <VideoPop content={popupContent} />} */}
            </div>
        </>
    );
};

export default CourseDetails;
