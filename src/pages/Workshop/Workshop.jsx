import React, { useEffect } from 'react'
import Hero from '../../Components/Workshop/Hero'
import Section from '../../Components/Workshop/Section'
import Benefits from '../../Components/Workshop/Benefits'
import Newsletter from '../../Components/Workshop/Newsletter'


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
    <Newsletter/>
    </>
  )
}

export default Workshop