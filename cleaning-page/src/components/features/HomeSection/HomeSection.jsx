import React from 'react'
import image from "../../assets/woman-cleaning-house.jpg"
import styles from "./HomeSection.module.css"

const HomeSection = () => {
  return (
    <div className={styles.home}>
        <div className={styles.backgroundStyles}></div>
        <div className={styles.imageContainer}>
            <img src={image}/>
        </div>
        <div className={styles.textContainer}>
            <span>Want to clean your house </span>
            <span>But doesnt know who can?</span>
            <span>Contact us!</span>
        </div>
    </div>
  )
}

export default HomeSection