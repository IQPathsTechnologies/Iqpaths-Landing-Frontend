import React from 'react';
import HeroSection from '../../Components/AllCourses/HeroSection'
import SearchTab from '../../Components/AllCourses/SearchTab';
import Cards from '../../Components/AllCourses/Cards';
import CourseFilter from '../../Components/AllCourses/CourseFilter';
import CourseCard from '../../Components/AllCourses/CourseCard';
import AdSection from '../../Components/AllCourses/AdSection';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'

const Courses = () => {
    return (
        <div>
            <HeroSection />
            <SearchTab />
            <Cards />
            {/* <CourseFilter /> */}
            {/* <CourseCard /> */}
            <AdSection />
            <NewsletterSection />
        </div>
    );
};

export default Courses;