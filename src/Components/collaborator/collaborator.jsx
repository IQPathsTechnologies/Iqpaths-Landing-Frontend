import React, {useState, useEffect} from 'react'
import styles from './collaborator.module.css'
import InfiniteCarouselRight from '../../utility/infiniteCarousel/infiniteCarouselRight'
import InfiniteCarouselLeft from '../../utility/infiniteCarousel/infiniteCarouselLeft'
import { AuthService } from '../../axios/User';


const images = [
  "src/assets/collaborators/udemy.pg",
  "src/assets/collaborators/mii.jg",
  "src/assets/collaborators/udemy.pg",
  "src/assets/collaborators/mii.jg",
]

const apiClass = new AuthService();

function collaborator() {

  const [images, setImages] = useState();

  useEffect(() => {
    const getCollaboratorImages = async () => {
      try {
        const response = await apiClass.getCollaborators();
        const logos = response.map((collaborator) => collaborator.logo);
        // console.log('Collaborator :: getCollaboratorImages :: response', logos);
        setImages(logos);
      }
      catch (error) {
        console.log('Collaborator :: getCollaboratorImages :: error', error);
      }
    }
    getCollaboratorImages();
  }
  , []);

  return (
    <div className={styles.container}>
        <div className={styles.title}>
            We Partners with More Than 10+ Companies
        </div>
        <div className={styles.carousel}>
            <InfiniteCarouselLeft
                  images={images}
             />
        </div>
    </div>
  )
}

export default collaborator