import React, { useEffect } from 'react';
import First from '../../Components/Internship1/first';
import Second from '../../Components/Internship1/second';
import Third from '../../Components/Internship1/third';
import Fourth from '../../Components/Internship1/fourth';
import Roadmap from '../../Components/Internship1/Roadmap';
import Slider from '../../Components/Internship1/slider';
import Last from '../../Components/Internship1/last';

const Intern = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Roadmap />
            <Slider />
            <Last />
        </div>
    );
};

export default Intern;