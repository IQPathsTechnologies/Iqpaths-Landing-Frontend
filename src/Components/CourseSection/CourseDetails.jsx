import React, { useState } from 'react';
import styles from './CourseDetails.module.css';

const CourseDetails = () => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [openDropdown, setOpenDropdown] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // State to manage current page of reviews
    const reviewsPerPage = 3;

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

    const tabContent = {
        Overview: (
            <div className={styles.overview}>
                <p>
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.
                </p>
                <p>
                    LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?
                    No comments yet! You be the first to comment.
                </p>
             </div>
        ),
        Curriculum: (
            <div className={styles.curriculum}>
                <p>
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                </p>
                {[{ id: 1, title: "Lessons With Video Content", lessons: 5, duration: "45 Mins" }, { id: 2, title: "Lessons With Video Content", lessons: 3, duration: "45 Mins" }, { id: 3, title: "Lessons With Video Content", lessons: 5, duration: "45 Mins" }].map((section, index) => (
                    <div key={index} className={styles.section}>
                        <div className={styles.sectionHeader} onClick={() => setOpenDropdown(openDropdown === index ? null : index)}>
                            <span>{section.title}</span>
                            <span>
                                {section.lessons} Lessons | {section.duration}
                            </span>
                            <span className={styles.arrowIcon}>
                                {openDropdown === index ? <img src="src/assets/upArrow.png" alt="Up Arrow" /> : <img src="src/assets/downArrow.png" alt="Down Arrow" />}
                            </span>
                        </div>
                        {openDropdown === index && (
                            <div className={styles.sectionContent}>
                                {[{ id: 1, title: "Lesson 1", time: "12:30", preview: true }, { id: 2, title: "Lesson 2", time: "10:05", preview: true }, { id: 3, title: "Lesson 3", time: "2:25", locked: true }].map((lesson, idx) => (
                                    
                                    <div key={idx} className={styles.lesson}>
                                        <div className={styles.lessons}>
                                            <img src="src/assets/lesson.png" alt="Lesson" />
                                            <span className={styles.lessonTitle}>{lesson.title}</span>
                                        </div>
                                        <div className={styles.button}>
                                            <button className={styles.previewButton}>
                                                {lesson.preview ? "Preview" : "Locked"}
                                            </button>
                                            <span className={styles.lessonTime}>{lesson.time}</span>
                                            {lesson.preview && <span className={styles.lessonCheck}>
                                                <img src="src/assets/tick.png" alt="Tick" /></span>}
                                            {lesson.locked && <span className={styles.lessonLock}
                                            >
                                                <img src="src/assets/lock.png" alt="Lock" /></span>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        ),
        Instructor: (
            <div className={styles.instructor}>
                <div className={styles.instructorHeader}>
                    <img 
                        src="/src/assets/instructor.png" 
                        alt="Instructor Logo" 
                        className={styles.instructorLogo} 
                    />
                    <div className={styles.instructorInfo}>
                        <h3>ThimPress</h3>
                        <p>
                            LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                        </p>
                        <div className={styles.instructorStats}>
                            <span>
                                <img 
                                    src="/src/assets/studentIcon.png" 
                                    alt="Students Icon" 
                                    className={styles.icon} 
                                />
                                156 Students
                            </span>
                            <span>
                                <img 
                                    src="/src/assets/lessonIcon.png" 
                                    alt="Lessons Icon" 
                                    className={styles.icon} 
                                />
                                20 Lessons
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.instructorDescription}>
                    LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
                </div>
                <div className={styles.socialMedia}>
                    <span>Follow:</span>
                    <a href="#" className={styles.socialIcon}>
                        <img src="/src/assets/facebookIcon.png" alt="Facebook" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <img src="/src/assets/pinterestIcon.png" alt="Pinterest" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <img src="/src/assets/twitterIcon.png" alt="Twitter" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <img src="/src/assets/instagramIcon.png" alt="Instagram" />
                    </a>
                    <a href="#" className={styles.socialIcon}>
                        <img src="/src/assets/youtubeIcon.png" alt="YouTube" />
                    </a>
                </div>
            </div>
        ),
        FAQs: (
            <div className={styles.faqs}>
                {[
                    { id: 1, question: "What Does Royalty Free Mean?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
                    { id: 2, question: "What Does Royalty Free Mean?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
                    { id: 3, question: "What Does Royalty Free Mean?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
                    { id: 4, question: "What Does Royalty Free Mean?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
                ].map((faq, index) => (
                <div key={faq.id} className={styles.faqItem}>
                    <div
                        className={styles.faqHeader}
                        onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
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
                                <img src="/src/assets/upArrow.png" alt="Collapse" />
                            ) : (
                                <img src="/src/assets/downArrow.png" alt="Expand" />
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
                    {currentReviews.map((review, index) => (
                        <div key={index} className={styles.comment}>
                            <div className={styles.commentHeader}>
                                <img src="/src/assets/user.png" alt="User" className={styles.commentAvatar} />
                                <div className={styles.names}>
                                    <h4 className={styles.commentName}>{review.name}</h4>
                                    <p className={styles.commentDate}>{review.date}</p>
                                </div>
                            </div>
                            <p className={styles.commentText}>{review.comment}</p>
                            <div className={styles.reply}>
                                <img src="src/assets/reply.png" alt="Reply" />
                                <button className={styles.replyButton}>Reply</button>
                            </div>
                            
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
                        / {Math.ceil(allReviews.length / reviewsPerPage)} {/* Total Pages */}
                    </span>
                    <button 
                        onClick={() => paginate(currentPage + 1)} 
                        disabled={currentPage === Math.ceil(allReviews.length / reviewsPerPage)} 
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
            </div>
        </>
    );
};

export default CourseDetails;
