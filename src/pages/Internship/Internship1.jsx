import React, { useEffect } from 'react';
import Roadmap from '../../Components/Internship1/Roadmap';
import Herosection from '../../Components/Internship1/Herosection';
import Collage from '../../Components/Internship1/Collage';
import Benifits from '../../Components/Internship1/Benifits';
import Position from '../../Components/Internship1/Position';
import Photos from '../../Components/Internship1/Photos';
import Slider from '../../Components/Internship1/slider';

const Intern = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div>
            <Herosection />
            <Collage />
            <Benifits />
            <Position />
            <Roadmap />
            <Slider />
            <Photos />
        </div>
    );
};

export default Intern;