import React, {useState, useEffect} from "react";
import styles from "./Instructor.module.css";
import { useParams } from "react-router-dom";
import { AuthService } from '../../axios/User';

const instructorData = {
  title: "Our Instructor",
  description:
    "Discover brilliance in code with our expert instructor. Passionate mentors dedicated to fulfilling your coding journey at IQPaths.",
  instructorName: "Dr. Tejalal Choudhary",
  instructorTitle: "Data Scientist, Ph.D. (Bennett University)",
  instructorDescription:
    "Sanket Gupta is an ace software engineer working in the role of Computer Science at Medi-Caps University and a popular machine learning instructor at IQPaths.",
  instructorImage: "/instructorCourse.png", // Replace with the correct image path
};

const Instructor = () => {
  // Dynamic data for the component
  const [instructorDetails, setInstructorDetails] = useState({});

  const { id } = useParams();
  const courseId = id;
  const apiClass = new AuthService();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await apiClass.getCourseDetails(courseId);
        console.log("CourseSection :: useEffect :: response ye card k liye jo instructor k liey hai ", response.details.instructor);
        setInstructorDetails(response.details.instructor);
      } catch (error) {
        console.log("CourseSection :: useEffect :: error", error);
      }
    }
    fetchData();
  }, [id]);




  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Our Instructor</h2>
        <p className={styles.description}>Discover brilliance in code with our expert instructor. Passionate mentors dedicated to fulfilling your coding journey at IQPaths.</p>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <h3 className={styles.instructorName}>{instructorDetails.name}</h3>
        <p className={styles.instructorTitle}>{instructorDetails.designation}</p>
        <p className={styles.instructorDescription}>
          {instructorDetails.description}
        </p>
        <div className={styles.imageWrapper}>
          <img
            src={instructorDetails.profilePhoto}
            alt={instructorDetails.name}
            className={styles.instructorImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
