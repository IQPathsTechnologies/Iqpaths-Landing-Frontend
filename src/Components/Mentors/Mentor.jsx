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
  const [mentorDetails, setmentorDetails] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null); 

  useEffect(() => {
    const getMentors = async () => {
      try {
        const response = await apiClass.getMentor();
        // console.log('Mentor :: getMentorImages :: response', photos);
        const photos = response.map((mentor) => mentor.profilePhoto);
        // console.log('Mentor :: getMentorImages :: response', response);
        setmentorDetails(response);
        setImages(photos);
      } catch (error) {
        console.log('Mentor :: getMentorImages :: error', error);
      }
    };
    getMentors();
  }, []);



  const openPopup = (image) => {
    setSelectedImage(image);
    const mentor = mentorDetails.find((mentor) => mentor.profilePhoto === image);
    setSelectedMentor(mentor)
  };

  const closePopup = () => {
    setSelectedImage(null);
    setSelectedMentor(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Our Mentors</h1>
        <p>
        At IQPaths, gain unparalleled learning opportunities from industry leaders with over a decade of experience, distinguished professors, and field experts who are deeply committed to sharing their expertise, guiding your growth, and ensuring your success in achieving your professional goals.
        </p>
      </div>
      <div className={styles.carousel}>
        <InfiniteCarouselRight
          images={images}
          onImageClick={openPopup} // Handle image click
        />
      </div>
      {selectedImage && (
        <MentorPopup image={selectedImage} details={selectedMentor} onClose={closePopup} />
      )}
    </div>
  );
}

export default Mentor;
