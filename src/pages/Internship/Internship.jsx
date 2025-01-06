import React, { useEffect } from 'react';
import InternshipHero from '../../Components/Internship/InternshipHero';
import SearchTab from '../../Components/AllCourses/SearchTab';
import Internship from '../../Components/Internship/Internship';
import AdSection from '../../Components/AllCourses/AdSection';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';
import { use } from 'react';

const Intern = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div>
            <InternshipHero />
            <SearchTab />
            <Internship />
            <AdSection />
            <NewsletterSection />
        </div>
    );
};

export default Intern;