import React, { useEffect } from 'react';
import Third from '../../Components/Internship1/Third';
import Fourth from '../../Components/Internship1/Fourth';
import Roadmap from '../../Components/Internship1/Roadmap';
import Slider from '../../Components/Internship1/Slider';
import Last from '../../Components/Internship1/Last';
import First from '../../Components/Internship1/First';
import Second from '../../Components/Internship1/second';

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