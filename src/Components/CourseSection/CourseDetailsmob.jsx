import React, { useState, useRef, useEffect } from 'react';
import { AuthService } from '../../axios/User';
import { useParams } from 'react-router-dom';
import styles from './CourseDetails.module.css';
import VideoPop from './VideoPop';

const CourseDetailsmob = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // State to manage current page of reviews
  const [courseDetails, setCourseDetails] = useState({});
  const [review, setReview] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const [popupContent, setPopupContent] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);
  
  const { title, id } = useParams();
  const apiclassName = new AuthService();
  
  const reviewsPerPage = 3;

  // Fetch course details
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await apiclassName.getCourseDetails(id);
        setCourseDetails(response.details);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    }
    fetchData();
  }, [id]);

  // Fetch reviews
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiclassName.getReviews(id);
        setReview(response.review);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
    fetchData();
  }, [id]);

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = review.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const overallRating = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handlePopupClose = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlePopupClose);
    return () => {
      document.removeEventListener('click', handlePopupClose);
    };
  }, []);

  const handleLectureClick = (lessonId) => {
    setIsPopupOpen(true);
  };

  const tabs = [
    {
      title: 'Overview',
      description: courseDetails?.overview || 'No overview available',
    },
    {
      title: 'Curriculum',
      description: (
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
                  {section.lectures.length} Lessons | {section.duration}
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
                    <div
                      key={idx}
                      className={styles.lesson}
                      onClick={() => handleLectureClick(lesson.id)}
                    >
                      <div className={styles.lessons}>
                        <img src="/lesson.png" alt="Lesson" />
                        <span className={styles.name}>{lesson.title}</span>
                      </div>
                      <div className={styles.button}>
                        <button className={styles.previewButton}>
                          {lesson.preview ? 'Preview' : 'Locked'}
                        </button>
                        <span className={styles.lessonTime}>{lesson.duration} hour</span>
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
    },
    {
      title: 'Instructor',
      description: (
        <div className={styles.instructor}>
          <div className={styles.instructorHeader}>
            <img
              src={courseDetails.instructor?.profilePhoto || '/instructor.png'}
              alt="Instructor Logo"
              className={styles.instructorLogo}
            />
            <div className={styles.instructorInfo}>
              <p>
                LearnPress is a comprehensive WordPress LMS Plugin for
                WordPress. This is one of the best WordPress LMS Plugins which
                can be used to easily create & sell courses online.
              </p>
              <div className={styles.instructorStats}>
                <span>
                  <img
                    src="/studentIcon.png"
                    alt="Students Icon"
                    className={styles.icon}
                  />
                  156 Students
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
              real-world examples, ensures that students not only grasp theoretical
              concepts but also learn how to apply them effectively.
            </p>
          </div>
          <div className={styles.socialMedia}>
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
          </div>
        </div>
      ),
    },
    {
      title: 'FAQs',
      description: (
        <div className={styles.faqs}>
          {courseDetails?.faq?.map((faq, index) => (
            <div key={faq._id} className={styles.faqItem}>
              <div
                className={styles.faqHeader}
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <span
                  className={`${styles.faqQuestion} ${openDropdown === index ? styles.activeQuestion : ''}`}
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
    },
    {
      title: 'Reviews',
      description: (
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
            {currentReviews.map((review, index) => (
              <div key={index} className={styles.comment}>
                <div className={styles.commentHeader}>
                  <img
                    src="/user.png"
                    alt="User"
                    className={styles.commentAvatar}
                  />
                  <div className={styles.names}>
                    <h4 className={styles.commentName}>{review.name}</h4>
                    <p className={styles.commentDate}>
                      {new Date(review.updatedAt).toLocaleDateString()}
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
              className={styles.paginationButton}
            >
              &lt;
            </button>
            <span className={styles.pageNumber}>{currentPage}</span>
            <span className={styles.totalPages}>
              / {Math.ceil(review.length / reviewsPerPage)}{' '}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(review.length / reviewsPerPage)}
              className={styles.paginationButton}
            >
              &gt;
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.tabscontainerMob}>
      <ul className={styles.tabul}>
        {tabs.map((tab, index) => (
          <li className={styles.tabli} key={index}>
            <div 
              className={styles.tittle} 
              onClick={() => handleToggle(index)}
            >
              <p className={styles.text}>{tab.title}</p>
              <p 
                className={styles.icon} 
                style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.595991 0.609198C0.904971 0.295713 1.38882 0.266876 1.72998 0.522922L1.82772 0.608282L9.34654 8.21367L16.854 0.597115C17.163 0.283631 17.6469 0.254794 17.988 0.51084L18.0858 0.5962C18.3952 0.909225 18.4237 1.3994 18.171 1.74501L18.0867 1.84404L9.9638 10.0854C9.65482 10.3989 9.17098 10.4277 8.82982 10.1716L8.73207 10.0863L0.596918 1.85703C0.256528 1.51271 0.256113 0.954031 0.595991 0.609198Z"
                    fill="#454555"
                  />
                </svg>
              </p>
            </div>
            {activeIndex === index && (
              <div className={styles.description}>{tab.description}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetailsmob;
