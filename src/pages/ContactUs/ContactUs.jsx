import React from 'react';
import ContactUs from '../../Components/ContactUs/ContactUs'
import Location from '../../Components/ContactUs/Location'
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'
import newContactUs from '../../Components/ContactUs/newContactUs';

const Course = () => {
    return (
        <div>
            <ContactUs />
            {/* <Location /> */}
            <newContactUs />
            {/* <Location /> */}
            <NewsletterSection />
        </div>
    );
};

export default Course;