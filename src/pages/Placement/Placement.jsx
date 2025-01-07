import React, { useEffect } from 'react';
import PlacementHero from '../../Components/Placement/PlacementHero';
import SearchTab from '../../Components/AllCourses/SearchTab';
import Placement from '../../Components/Placement/Placement';
import AdSection from '../../Components/AllCourses/AdSection';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';
import { use } from 'react';

const Placed = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div>
            <PlacementHero />
            <SearchTab flag = "placement"/>
            <Placement />
            <AdSection />
            <NewsletterSection />
        </div>
    );
};

export default Placed;