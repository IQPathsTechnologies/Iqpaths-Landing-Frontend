import React from 'react';
import CourseSection from '../../Components/CourseSection/CourseSection'
import CourseDetails from '../../Components/CourseSection/CourseDetails'
import Roadmap from '../../Components/Roadmap/Roadmap'
import Certificate from '../../Components/Certificate/Certificate'
import Instructor from '../../Components/Instructor/Instructor'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'
import TempCompo from '../../Components/tempCompo/tempCompo'

const Course = () => {
    return (
        <div>
            <CourseSection />
            {/* <CourseDetails /> */}
            <Roadmap />
            <Certificate />
            <Instructor />
            <SimilarCourses />
            {/* <TempCompo /> */}
        </div>
    );
};

export default Course;