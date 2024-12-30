import React from 'react';
// import LectureHeader from '../../Components/ViewLectures/LectureHeader';
import Lecture from '../../Components/ViewLectures/Lecture'
import LectureHeader from '../../Components/ViewLectures/LectureHeader';
import LectureLeft from '../../Components/ViewLectures/LectureLeft';
import LectureRight from '../../Components/ViewLectures/LectureRight';

const ViewLectures = () => {
    return (
        <div>
            <Lecture />
            {/* <LectureHeader />
            <LectureLeft />
            <LectureRight /> */}
        </div>
    );
};

export default ViewLectures;