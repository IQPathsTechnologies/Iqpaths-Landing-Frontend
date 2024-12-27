import React from 'react';
import HeroSection from '../../Components/AllCourses/HeroSection'
import SearchTab from '../../Components/AllCourses/SearchTab';
import CourseFilter from '../../Components/AllCourses/CourseFilter';
import CourseCard from '../../Components/AllCourses/CourseCard';

const Courses = () => {
    return (
        <div>
            <HeroSection />
            <SearchTab />
            <CourseFilter />
            <CourseCard />
        </div>
    );
};

export default Courses;