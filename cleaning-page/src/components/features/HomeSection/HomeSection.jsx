import React from 'react'
import image from "../../assets/cleaningphoto.jpg"
import image2 from '../../assets/clean2.jpg'
import image3 from '../../assets/clean3.jpeg'

import styles from "./HomeSection.module.css"

const HomeSection = () => {
  return (
    <div className={styles.home}>
        <div className={styles.backgroundStyles}></div>
        <div className={styles.imageContainer}>
          <div className={styles.slider}>
            <img  src={image}/>
            <img src={image2}/>
            <img src={image3}/>
          </div>
        </div>
        <div className={styles.textContainer}>
            <span>Provide the best cleaning service, our top priority </span>
            <span>Contact us today and get a free quote! </span>
        </div>
    </div>
  )
}

export default HomeSection