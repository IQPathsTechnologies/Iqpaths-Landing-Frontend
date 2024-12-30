import React from 'react';
import ContinuousVideo from '../../Components/MyLearning/ContinuousVideo'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'

const Course = () => {
    return (
        <div>
            <ContinuousVideo />
            <SimilarCourses />
            <NewsletterSection />
        </div>
    );
};

export default Course;