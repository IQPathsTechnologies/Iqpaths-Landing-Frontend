import React, { useEffect } from 'react'


import Form from '../../Components/Form/Form';

const Forms = () => {
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

export default Forms