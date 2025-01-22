import React from 'react'
import styles from './NoCourseAvailable.module.css';
import {  useNavigate } from 'react-router-dom';
export default function NotLogedIn() {
    const navigate = useNavigate();
    const handleloginbutton = ()=>{
        navigate('/courses');
    }
  return (
    <div className={styles.notlogedin}>
        <div className={styles.container}>
            <div className={styles.message}>
                <h1>No Enrolled Courses</h1>
                <p>Explore Our Courses Here!!</p>
                <button className={styles.loginButton} onClick={handleloginbutton}>View Courses</button>
            </div>
        </div>
        </div>
  )
}
