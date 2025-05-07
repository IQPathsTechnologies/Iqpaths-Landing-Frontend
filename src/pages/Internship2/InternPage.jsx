import React, { useState } from 'react'
import ApplicationForm from '../../Components/Internship2/ApplicationForm';
import FAQSection from '../../Components/Internship2/FAQSection'
import InternHero from '../../Components/Internship2/InternHero'


function InternPage() {
  const [selectedInternshipId, setSelectedInternshipId] = useState(null);
  
  
  return (
    <>
      <InternHero />
      <ApplicationForm className  selectedInternshipId={selectedInternshipId} />
      <FAQSection />
    </>
  );
}

export default InternPage