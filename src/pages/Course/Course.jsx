import React from 'react';
import styles from './Course.module.css';
import CourseSection from '../../Components/CourseSection/CourseSection'
import CourseDetails from '../../Components/CourseSection/CourseDetails'
import Roadmap from '../../Components/Roadmap/Roadmap'
import Certificate from '../../Components/Certificate/Certificate'
import Instructor from '../../Components/Instructor/Instructor'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'

const Course = () => {
    return (
        <div>
            <div className={styles.course}>
                <div className={styles.details}>
                    <CourseSection />
                </div>
                {/* <CourseDetails /> */}
                <div className={styles.roadmap}>
                    <Roadmap />
                </div>
            </div>

            <Certificate />
            <Instructor />
            <SimilarCourses />
        </div>
    );
};

export default Course;