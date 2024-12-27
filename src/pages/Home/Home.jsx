import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import Service from '../../Components/ServicesOffered/Service';
import BeniftsSection from '../../Components/BenifitsSection/BeniftsSection';
import Banner from '../../Components/Banner/Banner';
import Mentor from '../../Components/Mentors/Mentor';
import Collaborator from '../../Components/Collaborator/Collaborator';
import Testimonials from '../../Components/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Service />
            <BeniftsSection />
            <Banner />
            <Mentor />
            <Collaborator />
            <Testimonials />
        </div>
    );
};

export default Home;