import React from 'react';
import CourseSection from '../../Components/CourseSection/CourseSection'
import CourseDetails from '../../Components/CourseSection/CourseDetails'
import Certificate from '../../Components/Certificate/Certificate'
import Instructor from '../../Components/Instructor/Instructor'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'

const Course = () => {
    return (
        <div>
            <CourseSection />
            <CourseDetails />
            <Certificate />
            <Instructor />
            <SimilarCourses />
        </div>
    );
};

export default Course;