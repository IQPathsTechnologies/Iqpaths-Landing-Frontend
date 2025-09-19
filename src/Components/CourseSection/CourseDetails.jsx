import React, { useState, useRef, useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from './CourseDetails.module.css';

const CourseInstructor = ({ courseDetails, setCourseDetails }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { id: courseId } = useParams(); // Current course ID
  const apiClass = new AuthService();

  const handleInstructorCreate = async (e) => {
    e.preventDefault();
    if (!name) return setMessage('Instructor name is required!');
    setLoading(true);
    setMessage('');

    try {
      // 1️⃣ Create Instructor
      const response = await axios.post('/api/instructors/createInstructor', {
        name,
        description,
        profilePhoto,
      });
      const newInstructorId = response.data.data._id;

      // 2️⃣ Assign Instructor to Course
      await axios.post('/api/instructors/assignInstructorToCourse', {
        courseId,
        instructorId: newInstructorId,
      });

      setMessage('Instructor created and assigned successfully!');

      // 3️⃣ Update courseDetails locally
      const updatedCourse = await apiClass.getCourseDetails(courseId);
      setCourseDetails(updatedCourse.details);

      // Reset form
      setName('');
      setDescription('');
      setProfilePhoto('');
    } catch (err) {
      console.error(err);
      setMessage('Error creating or assigning instructor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.instructorTab}>
      <h2>Instructor Details</h2>

      {courseDetails.instructor ? (
        <div className={styles.instructorInfo}>
          <img
            src={courseDetails.instructor.profilePhoto || '/instructor.png'}
            alt="Instructor"
            className={styles.instructorLogo}
          />
          <h3>{courseDetails.instructor.name}</h3>
          <p>{courseDetails.instructor.description}</p>
        </div>
      ) : (
        <p>No instructor assigned yet.</p>
      )}

      <form className={styles.instructorForm} onSubmit={handleInstructorCreate}>
        <h3>Create & Assign New Instructor</h3>
        <input
          type="text"
          placeholder="Instructor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Instructor Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile Photo URL"
          value={profilePhoto}
          onChange={(e) => setProfilePhoto(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Create & Assign'}
        </button>
      </form>

      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [courseDetails, setCourseDetails] = useState({});
  const [review, setReview] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(null);
  const popupRef = useRef(null);

  const reviewsPerPage = 3;
  const { id } = useParams();
  const apiClass = new AuthService();

  const colors = ["#F44336", "#E91E63", "#9C27B0", "#3F51B5", "#2196F3", "#009688", "#4CAF50", "#FF9800", "#795548"];
  function getRandomColor(name) {
    const charCodeSum = Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colors[charCodeSum % colors.length];
  }

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = review.slice(indexOfFirstReview, indexOfLastReview);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchCourse() {
      try {
        const response = await apiClass.getCourseDetails(id);
        setCourseDetails(response.details);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }
    fetchCourse();
  }, [id]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await apiClass.getReviews(id);
        setReview(response.review);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    }
    fetchReviews();
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
              onClick={() => setOpenDropdown(openDropdown === sectionIndex ? null : sectionIndex)}
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
                  const isPreview = sectionIndex === 0 && lectureIndex < 2;
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

        {isPopupOpen && popupContent && (
          <div className={styles.popup} ref={popupRef}>
            <div className={styles.popupContent}>
              <h3>{popupContent.title}</h3>
              <iframe
                src={popupContent.videoUrl || popupContent.video}
                width="100%"
                height="400"
                allow="autoplay"
                allowFullScreen
                style={{ borderRadius: "8px" }}
              />
              <button onClick={() => setIsPopupOpen(false)} className={styles.closeButton}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    ),
    Instructor: <CourseInstructor courseDetails={courseDetails} setCourseDetails={setCourseDetails} />,
    FAQs: (
      <div className={styles.faqs}>
        {courseDetails?.faq?.map((faq, index) => (
          <div key={faq._id} className={styles.faqItem}>
            <div
              className={styles.faqHeader}
              onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
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
            {openDropdown === index && <div className={styles.faqAnswer}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    ),
    Reviews: (
      <div className={styles.reviews}>
        {/* Reviews UI here */}
      </div>
    ),
  };

  return (
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
    </div>
  );
};

export default CourseDetails;
