import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ComingSoon.module.css';


const ComingSoonPage = () => {
    const navigate = useNavigate();
    

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.comingSoonPage}>
            <div className={styles.content}>
                <h1 className={styles.comingSoonTitle}>Coming Soon</h1>
                <p className={styles.comingSoonMessage}>
                    We're crafting something amazing just for you. Stay connected for updates!
                </p>
                <button
                    className={styles.notifyButton}   onClick={goBack}
                >
                    Go Back 
                </button>
            </div>
            <div className={styles.backgroundOverlay}></div>
        </div>
    );
};

export default ComingSoonPage;
