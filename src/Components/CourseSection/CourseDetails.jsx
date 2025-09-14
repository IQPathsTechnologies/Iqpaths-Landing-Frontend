import React, { useState, useRef , useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import styles from './CourseDetails.module.css'; 
import VideoPop from './VideoPop';

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [courseDetails, setCourseDetails] = useState([]);
    const [review, setReview ] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');  // to store fetched video URL
    const popupRef = useRef(null);

    const reviewsPerPage = 3;
    const { title, id } = useParams();

    const allReviews = [ /*...your reviews...*/ ];
    const overallRating = [ /*...your ratings...*/ ];
    const colors = [ /*...your colors...*/ ];

    function getRandomColor(name) {
      const charCodeSum = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
      return colors[charCodeSum % colors.length];
    }

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const apiClass = new AuthService();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchData() {
          try {
            const response = await apiClass.getCourseDetails(id);
            setCourseDetails(response.details);    
          } catch (error) {
            console.log("Error fetching course details", error);
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
            console.log("Error fetching reviews", error);
          }
        }
        fetchData();
    }, [id]);

    const handlePopupClose = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsPopupOpen(false);
        setVideoUrl('');
      }
    };

    useEffect(() => {
      document.addEventListener("click", handlePopupClose);
      return () => {
        document.removeEventListener("click", handlePopupClose);
      };
    }, []);

    const handleLectureClick = async (lessonId) => {
      try {
        // Assuming getPurchases returns video details or URL for the lessonId
        const response = await apiClass.getPurchases(lessonId); // modify as per your API signature
        // Example: response.videoUrl
        setVideoUrl(response.videoUrl || '');
        setIsPopupOpen(true);
      } catch (error) {
        console.error("Failed to fetch video for lesson", error);
        alert("Video not available.");
      }
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
            Unlock the power of data with our comprehensive Machine Learning course...
          </p>
          {courseDetails?.chapters?.map((section, index) => (
            <div key={index} className={styles.section}>
              <div
                className={styles.sectionHeader}
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <span>{section.name}</span>
                <span>{section.lectures.length} Lessons</span>
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
                  {section?.lectures?.slice(0,4).map((lesson, idx) => (
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
                <p>Lesson Video</p>
                {/* Video player - simple HTML5 video or your VideoPop component */}
                {videoUrl ? (
                  <video width="100%" controls autoPlay>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>Loading video...</p>
                )}
                <button onClick={() => { setIsPopupOpen(false); setVideoUrl(''); }}>Close</button>
              </div>
            </div>
          )}
        </div>
      ),
      // Keep other tabs (Instructor, FAQs, Reviews) unchanged or you can add them as needed
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
