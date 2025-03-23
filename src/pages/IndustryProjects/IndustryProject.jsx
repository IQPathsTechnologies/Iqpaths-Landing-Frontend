import React, { useEffect } from 'react'
import Hero from '../../Components/IndustryProjects/Hero';
import Section from '../../Components/IndustryProjects/Section';
import AboutBenefit from '../../Components/AboutUs/AboutBenefit';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection';

const IndustryProject = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}
, []);

  return (
    <>
    <Hero />
    <Section />
    <AboutBenefit/>
    <NewsletterSection/>
    </>
  )
}

export default IndustryProject