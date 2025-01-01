import React, { useState, useEffect } from 'react';
import styles from './Mentor.module.css';
import InfiniteCarouselRight from '../../utility/infiniteCarousel/infiniteCarouselRight';
import MentorPopup from './MentorPopup';
import { AuthService } from '../../axios/User';


const images = [
  'src/assets/Mentors/mentor1.jpg',
  'src/assets/Mentors/mentor2.jpg',
  'src/assets/Mentors/mentor3.jpeg',
  'src/assets/Mentors/mentor4.jpg',
  'src/assets/Mentors/mentor5.jpg',
];

const apiClass = new AuthService();

function Mentor() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState();

  useEffect(() => {
    const getMentorImages = async () => {
      try {
        const response = await apiClass.getMentor();
        // console.log('Mentor :: getMentorImages :: response', photos);
        const photos = response.map((mentor) => mentor.profilePhoto);
        setImages(photos);
      } catch (error) {
        console.log('Mentor :: getMentorImages :: error', error);
      }
    };
    getMentorImages();
  }, []);



  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Mentors</h1>
        <p>
          Our mentors are industry experts with years of experience in their
          respective fields. They are dedicated to providing personalized
          guidance and support to help you achieve your career goals.
        </p>
      </div>
      <div className={styles.carousel}>
        <InfiniteCarouselRight
          images={images}
          onImageClick={openPopup} // Handle image click
        />
      </div>
      {selectedImage && (
        <MentorPopup image={selectedImage} onClose={closePopup} />
      )}
    </div>
  );
}

export default Mentor;
