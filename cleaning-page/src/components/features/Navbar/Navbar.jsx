import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <ul className={styles.right__items}>
            <li>logo</li>
        </ul>
        <ul className={styles.left__items}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
    </div>
  )
}

export default Navbar