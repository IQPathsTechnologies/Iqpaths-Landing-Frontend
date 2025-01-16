import React, {useContext, useEffect} from 'react';
import styles from './Course.module.css';
import CourseSection from '../../Components/CourseSection/CourseSection'
import CourseSectionmob from '../../Components/CourseSection/CourseSectionmob'
import CourseDetails from '../../Components/CourseSection/CourseDetails'
import Roadmap from '../../Components/Roadmap/Roadmap'
import Certificate from '../../Components/Certificate/Certificate'
import Instructor from '../../Components/Instructor/Instructor'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'
import { UserContext } from '../../context/userContext';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'


const Course = () => {


    

    const { userId } = useContext(UserContext);

    return (
        <div>
            <div className={styles.course}>
                <div className={styles.details}>
                    <CourseSection userId={userId}/>
                    <CourseSectionmob userId={userId}/>
                </div>
                {/* <CourseDetails /> */}
                <div className={styles.roadmap}>
                    <Roadmap />
                </div>
            </div>

            <Certificate />
            <Instructor />
            {/* <SimilarCourses /> */}
            <NewsletterSection />
        </div>
    );
};

export default Course;