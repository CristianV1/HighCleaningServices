import React from 'react'
import styles from "./ServiceCard.module.css"

const ServiceCard = ({title,image,link}) => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.titleContainer}>{title}</div>
        <div className={styles.imageContainer}>
            <img src={image}/>
        </div>
    </div> 
  )
}

export default ServiceCard