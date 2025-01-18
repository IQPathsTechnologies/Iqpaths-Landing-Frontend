import React,{ useState, useEffect} from 'react';
import styles from './Banner.module.css';
import ButtonCarousel from '../../utility/ButtonCarousel/ButtonCarousel';
import { AuthService } from '../../axios/User';
 
const imagesTemp = [
    '/Banner/1.png',
    '/Banner/1.png',
    '/Banner/1.png',
];

const apiClass = new AuthService(); 

const Banner = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getBannerImages = async () => {
            try {
                const response = await apiClass.getBanners();
                // console.log('Banner :: getBannerImages :: response', response);
                const banners = response.banners.map((banner) => banner.imageUrl);
                // console.log('Banner :: getBannerImages :: response', banners);
                setImages(banners);
            } catch (error) {
                console.log('Banner :: getBannerImages :: error', error);
            }
        };
        getBannerImages();
    }
    , []);

    return (
        console.log('Banner :: images', images),
        <div className={styles.carousel}>
            <ButtonCarousel autoslide={true}>
                {images.map((image, index) =>{
                    // console.log(image);
                    return <img src={image} alt="carousel" className={styles.carouselImage} key={index} />;
                })}
            </ButtonCarousel>
            
        </div>
    );
};

export default Banner; 