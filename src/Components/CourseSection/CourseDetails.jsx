import React, { useState, useRef , useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import styles from './CourseDetails.module.css'; 
import VideoPop from './VideoPop';

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // State to manage current page of reviews
    const [courseDetails, setCourseDetails] = useState([]);
    const [review, setReview ] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const popupRef = useRef(null);
    const [popupContent, setPopupContent] = useState('');

    const reviewsPerPage = 3;

    
    const { title, id } = useParams();
    // console.log(title, id);  



    const allReviews = [
        { name: "Guy Hawkins", date: "October 03, 2022", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Jacob Jones", date: "October 03, 2023", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
        { name: "Laura Hipster", date: "October 03, 2024", comment: "Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
    ];  

    const overallRating = [
        { stars: 5, percentage: 90 },
        { stars: 4, percentage: 5 },
        { stars: 3, percentage: 2 },
        { stars: 2, percentage: 2 },
        { stars: 1, percentage: 1 },
    ]

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);

    // Change page

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const apiClass = new AuthService();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
          try {
            const response = await apiClass.getCourseDetails(id);
            console.log("CourseSection :: useEffect :: response ye card k liye", response);
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
            console.log("CourseSection :: useEffect :: response ye card k liye review aa gaye hai ", response);
            setReview(response.review);    
          } catch (error) {
            console.log("CourseSection :: useEffect :: error", error);
          }
        }
        fetchData();
    }
    , [id]);

    // const handleLectureClick = (lectureTitle) => {
    //   setPopupContent(`You selected: ${lectureTitle}`);
    //   setPopupVisible(true);

    //   setTimeout(() => {
    //     setPopupVisible(false);
    //   }, 60000); 
    // };

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

    const handleLectureClick = (lessonId) => {
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
          <p>
          Unlock the power of data with our comprehensive Machine Learning course, featuring a well-structured curriculum that blends theoretical foundations with hands-on experience to equip you with the skills needed to build cutting-edge models and advance your career in AI and data science.
          </p>
          {courseDetails?.chapters?.map((section, index) => (
            <div key={index} className={styles.section}>
              <div
                className={styles.sectionHeader}
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <span>{section.name}</span>
                <span>
                  {section.lectures.length} Lessons
                </span>
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
                {section?.lectures?.map((lesson, idx) => (
                  <div key={idx} className={styles.lesson} onClick={() => handleLectureClick(lesson.id)}>
                    <div className={styles.lessons}>
                      <img src="/lesson.png" alt="Lesson" />
                      <span className={styles.name}>{lesson.title}</span>
                    </div>
                    <div className={styles.button}>
                      <button className={styles.previewButton}>
                        {lesson.preview ? "Preview" : "LIVE"}
                      </button>
                      <span className={styles.lessonTime}>{lesson.duration} lecture</span>
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
            </div>
          )}
        </div>
      ))}

      {isPopupOpen && (
        <div className={styles.popup} ref={popupRef}>
          <div className={styles.popupContent}>
            <p>Lesson Details</p>
            {/* Add content related to the selected lesson */}
            <button onClick={() => setIsPopupOpen(false)}>Close</button>
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
              <span className={styles.ratingScore}>4.0</span>
              <div className={styles.count}>
                <div className={styles.stars}>★★★★☆</div>
                <p className={styles.ratingCount}>based on 146,951 ratings</p>
              </div>
            </div>
            <div className={styles.ratingBreakdown}>
              {overallRating.map((rating, index) => (
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
            {review.map((review, index) => (
              <div key={index} className={styles.comment}>
                <div className={styles.commentHeader}>
                  <img
                    src="/user.png"
                    alt="User"
                    className={styles.commentAvatar}
                  />
                  <div className={styles.names}>
                    <h4 className={styles.commentName}>{review.name}</h4>
                    <p className={styles.commentDate}>{new Date(review.updatedAt).toLocaleDateString()}</p>
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
              &lt; {/* Left Arrow (Backward) */}
            </button>
            <span className={styles.pageNumber}>{currentPage}</span>
            <span className={styles.totalPages}>
              / {Math.ceil(allReviews.length / reviewsPerPage)}{" "}
              {/* Total Pages */}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(allReviews.length / reviewsPerPage)
              }
              className={styles.paginationButton}
            >
              &gt; {/* Right Arrow (Forward) */}
            </button>
          </div>
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
