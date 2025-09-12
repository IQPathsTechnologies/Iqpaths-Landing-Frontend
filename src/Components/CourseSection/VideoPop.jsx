import React from 'react';
import styles from './VideoPop.module.css';

const VideoPop = ({ content }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupContent}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default VideoPop;
