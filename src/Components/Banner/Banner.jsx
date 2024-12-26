import React, { useState } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const images = [
        'src/assets/Banner/1.png',
        'src/assets/Banner/1.png',
        'src/assets/Banner/1.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={styles.carousel}>
            {/* <button onClick={prevSlide} className={styles.carouselButton}>Previous</button> */}
            <img src={images[currentIndex]} alt="carousel" className={styles.carouselImage} />
            {/* <button onClick={nextSlide} className={styles.carouselButton}>Next</button> */}
        </div>
    );
};

export default Banner;