import React from 'react';
import styles from './CourseSection.module.css';

const CourseSection = ({
  programName = "Data Science",
  courseTitle = "Data Science using Python",
  description = "Learn DS with Python, master data analysis with Python, and explore more courses to gain essential skills.",
  duration = "2Weeks",
  students = "156 Students",
  levels = "All levels",
  lessons = "20 Lessons",
  quizzes = "3 Quizzes",
  rating = "4.5",

}) => {
  return (
    <>
      <div className={styles.courseHeading}>
        <div className={styles.courseDetails}>
          <p className={styles.heading}>All Program &gt; {programName}</p>
          <h6 className={styles.title}> {courseTitle} </h6>
          <p className={styles.description}> {description} </p>

          <div className={styles.extraInfo}>
            <div className={styles.info}>
              <img src="src/assets/duration.png" alt="Duration" />
              <p> {duration} </p>
            </div>
            <div className={styles.info}>
              <img src="src/assets/students.png" alt="Students" />
              <p> {students} </p>
            </div>
            <div className={styles.info}>
              <img src="src/assets/levels.png" alt="Levels" />
              <p> {levels} </p>
            </div>
            <div className={styles.info}>
              <img src="src/assets/lessons.png" alt="Lessons" />
              <p> {lessons} </p>
            </div>
            <div className={styles.info}>
              <img src="src/assets/quizzes.png" alt="Quizzes" />
              <p> {quizzes} </p>
            </div>
          </div>

          <div className={styles.rating}>
            <p> {rating} </p>
            <img src="src/assets/rating.png" alt="ratings" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseSection;