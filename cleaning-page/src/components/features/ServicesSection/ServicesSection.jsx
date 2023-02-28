import React from 'react'
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.textContainer}>
            <div className={styles.text}>
                <h3>Our services</h3>
                <p>
                HQ Cleaning services has the most capable professionals ready to provide you that service that you need.
                we specialize in comercial and residential cleaning in all Charlotte and surroundings areas
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection