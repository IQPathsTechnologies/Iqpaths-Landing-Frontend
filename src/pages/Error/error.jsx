import React from 'react';
import styles from './error.module.css';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorTitle}>404 - Page Not Found</h1>
            <p className={styles.errorMessage}>Sorry, the page you are looking for does not exist.</p>
            <button className={styles.goBackButton} onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;