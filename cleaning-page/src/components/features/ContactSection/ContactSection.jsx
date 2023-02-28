import React from 'react'
import styles from "./ContactSection.module.css";

const ContactSection = () => {

  let phone = "215 240 9917";
  let email = "hqcleaning@gmail.com"

  return (
    <div className={styles.sectionContainer}>
        <div className={styles.textContainer}>
            <h3>Conctact us!</h3>
            <p>
                Our phone line is open 24/7,
                feel free to call to ${phone} or email us to ${email} and your request will be answered the same day!
                Because your comfort is our top priority too!
            </p>
        </div>
    </div>
  )
}

export default ContactSection