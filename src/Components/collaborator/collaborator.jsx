import React from 'react'
import styles from './collaborator.module.css'
import InfiniteCarouselRight from '../../utility/infiniteCarousel/infiniteCarouselRight'
import InfiniteCarouselLeft from '../../utility/infiniteCarousel/infiniteCarouselLeft'

const images = [
  "src/assets/collaborators/udemy.pg",
  "src/assets/collaborators/mii.jg",
  "src/assets/collaborators/udemy.pg",
  "src/assets/collaborators/mii.jg",
]

function collaborator() {
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