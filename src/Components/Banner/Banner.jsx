import React from 'react';
import styles from './Banner.module.css';
import ButtonCarousel from '../../utility/ButtonCarousel/ButtonCarousel';

const images = [
    'src/assets/Banner/1.png',
    'src/assets/Banner/1.png',
    'src/assets/Banner/1.png',
];
const Banner = () => {

    return (
        <div className={styles.carousel}>
            <ButtonCarousel autoslide={true}>
                {images.map((image, index) =>{
                    console.log(image);
                    return <img src={image} alt="carousel" className={styles.carouselImage} key={index} />;
                })}
            </ButtonCarousel>
            
        </div>
    );
};

export default Banner; 