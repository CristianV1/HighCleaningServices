import React from 'react'
import styles from "./AboutSection.module.css"

const AboutSection = () => {
  return (
    <div className={styles.sectionContainer}>
      <div>
        <h4>About us</h4>
        <span>High quality cleaning services is a company that aims to contribute
              to the best customer experience providing a clean and safe environment for our customers in their homes and businesses.</span>
      </div>
    </div>
  )
}

export default AboutSection