import React, { useState } from 'react'
import ApplicationForm from '../../Components/Internship2/ApplicationForm';
import FAQSection from '../../Components/Internship2/FAQSection'
import InternHero from '../../Components/Internship2/InternHero'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function InternPage() {
  const [selectedInternshipId, setSelectedInternshipId] = useState(null);

    const location = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  
  return (
    <div className='section'>
      <InternHero />
      <ApplicationForm className  selectedInternshipId={selectedInternshipId} />
      <FAQSection />
    </div>
  );
}

export default InternPage