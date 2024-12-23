import React from 'react';
import styles from './CourseSection.module.css';

const CourseSection = ({
  programName = "Data Science",
  courseTitle = "Data Science using Python",
  description = "Learn DS with Python, master data analysis with Python, and explore more courses to gain essential skills.",

}) => {
  return (
    <>
      <div className={styles.courseHeading}>
        <div className={styles.courseDetails}>
          <p className={styles.heading}>All Program &gt; {programName}</p>
          <h6 className={styles.title}> {courseTitle} </h6>
          <p className={styles.description}> {description} </p>
        </div>
      </div>
    </>
  )
}

export default CourseSection;