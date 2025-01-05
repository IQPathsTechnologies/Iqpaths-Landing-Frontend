import React, { useEffect } from 'react';
import PlacementHero from '../../Components/Placement/PlacementHero';
import SearchTab from '../../Components/AllCourses/SearchTab';
import Cards from '../../Components/AllCourses/Cards';
import AdSection from '../../Components/AllCourses/AdSection';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';
import { use } from 'react';

const Placement = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div>
            <PlacementHero />
            <SearchTab />
            <Cards />
            <AdSection />
            <NewsletterSection />
        </div>
    );
};

export default Placement;