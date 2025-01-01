import React from 'react';
import AboutHero from '../../Components/AboutUs/AboutHero';
import EducationSection from '../../Components/AboutUs/EducationSection';
import AboutBenefit from '../../Components/AboutUs/AboutBenefit';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';

const About = () => {
    return (
        <div>
            <AboutHero />
            <EducationSection />
            <AboutBenefit />
            <NewsletterSection />
        </div>
    );
};

export default About;