import React, { useEffect } from 'react';
import AboutHero from '../../Components/AboutUs/AboutHero';
import EducationSection from '../../Components/AboutUs/EducationSection';
import AboutBenefit from '../../Components/AboutUs/AboutBenefit';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';

const About = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }
        , []);
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