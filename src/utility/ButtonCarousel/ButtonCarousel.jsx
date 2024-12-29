import React, { useEffect, useState } from 'react';
import styles from './ButtonCarousel.module.css';

function ButtonCarousel({ children, autoslide = false, autoslideTime = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if(!autoslide) return;

        const interval = setInterval(nextSlide , autoslideTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div
                className={styles.carousel}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {React.Children.map(children, (child) => (
                    <div className={styles.slide}>{child}</div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={prevSlide} className={styles.button}>
                    {`<`}
                </button>
                <button onClick={nextSlide} className={styles.button}>
                    {`>`}
                </button>
            </div>
        </div>
    );
}

export default ButtonCarousel;
