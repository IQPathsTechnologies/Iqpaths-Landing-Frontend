import React from 'react'
import {  useNavigate } from 'react-router-dom';
import styles from './Notbought.module.css'


export default function Notbought() {
    const navigate = useNavigate();
    const handleloginbutton = ()=>{
        navigate('/courses');
    }
  return (
    <div className={styles.notlogedin}>
        <div className={styles.container}>
            <div className={styles.message}>
                <h1>Enroll in Course to view</h1>
                <p>explore our courses here!!</p>
                <button className={styles.loginButton} onClick={handleloginbutton}>View Courses</button>
            </div>
        </div>
        </div>
  )
}
