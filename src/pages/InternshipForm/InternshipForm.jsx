import React, { useEffect } from 'react'
import Form from '../../Components/InternshipForm/InternshipForm';



const InternshipForm = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
  }
  , []);
  
  return (
    <>
    <Form />
    </>
  )
}

export default InternshipForm