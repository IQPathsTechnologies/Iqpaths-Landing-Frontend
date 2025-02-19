import React, { useEffect } from 'react'
import Hero from '../../Components/Workshop/Hero'
import Section from '../../Components/Workshop/Section'
import Benefits from '../../Components/Workshop/Benefits'
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'


const Workshop = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}
, []);

  return (
    <>
    <Hero />
    <Section />
    <Benefits />
    <NewsletterSection/>
    </>
  )
}

export default Workshop