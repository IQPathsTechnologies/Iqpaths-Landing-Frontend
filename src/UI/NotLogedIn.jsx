import React from 'react'
import styles from './notLogedin.module.css';
import {  useNavigate } from 'react-router-dom';
export default function NotLogedIn() {
    const navigate = useNavigate();
    const handleloginbutton = ()=>{
        navigate('/login');
    }
  return (
    <div className={styles.notlogedin}>
        <div className={styles.container}>
            <div className={styles.message}>
                <h1>You are not logged in</h1>
                <p>Please log in to continue.</p>
                <button className={styles.loginButton} onClick={handleloginbutton}>Login</button>
            </div>
        </div>
        </div>
  )
}
