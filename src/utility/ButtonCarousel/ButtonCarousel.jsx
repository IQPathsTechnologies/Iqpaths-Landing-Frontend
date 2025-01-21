import React, { useEffect, useState } from 'react';
import styles from './ButtonCarousel.module.css';
import { set } from 'react-hook-form';

function ButtonCarousel({ children, autoslide = false, autoslideTime = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);
    // console.log('ButtonCarousel :: autoslide', autoslide);
    // console.log('ButtonCarousel :: children', children);
    // console.log("current index",currentIndex)

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex == 0 ? slideCount - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        // console.log("total slide count",React.Children.count(children))
        setCurrentIndex((prevIndex) =>
            prevIndex >= React.Children.count(children) - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        setTimeout(() => {
            if(!autoslide) return;
    
            const interval = setInterval(nextSlide , autoslideTime);
    
            setSlideCount(React.Children.count(children));
    
            return () => clearInterval(interval);
            
        }, 1000);

    }, [autoslide, autoslideTime]);

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
                    <img src="/leftArrow.png" alt="leftArrow" />
                </button>
                <button onClick={nextSlide} className={styles.button}>
                    <img src="/rightArroww.png" alt="rightArrow" />
                </button> 
            </div>
        </div>
    );
}

export default ButtonCarousel;
