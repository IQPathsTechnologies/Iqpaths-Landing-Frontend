import React from 'react';
import ReactPlayer from 'react-player';
import styles from './VideoPop.module.css';

const VideoPop = ({ url, onClose }) => {
    return (
        <div className={styles.popup} onClick={onClose}>
            <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                <ReactPlayer
                    url={url}
                    controls
                    playing
                    width="100%"
                    height="100%"
                    className={styles.player}
                />
            </div>
        </div>
    );
};

export default VideoPop;
