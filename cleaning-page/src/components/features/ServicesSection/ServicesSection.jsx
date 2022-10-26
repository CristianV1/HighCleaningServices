import React from 'react'
import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={styles.sectionContainer}>
        <div className={styles.grid}>
            <div className={styles.grid_child_1}>
                <h3>Our services</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dicta laudantium dolor perferendis ad architecto eos fuga aliquid soluta blanditiis veniam.</p>
            </div>
            <div>
                <h4>Service 1</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam totam autem quae dolores, beatae nesciunt! Natus excepturi 
                nobis iusto! Aliquam rerum suscipit laudantium iste maiores odio, aperiam fugiat dolorum?</p>
            </div>
            <div>
                <h4>Service 2</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam totam autem quae dolores, beatae nesciunt! Natus excepturi 
                nobis iusto! Aliquam rerum suscipit laudantium iste maiores odio, aperiam fugiat dolorum?</p>
            </div>
            <div>
                <h4>Service 3</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam totam autem quae dolores, beatae nesciunt! Natus excepturi 
                nobis iusto! Aliquam rerum suscipit laudantium iste maiores odio, aperiam fugiat dolorum?</p>
            </div>
            <div>
                <h4>Service 4</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aperiam totam autem quae dolores, beatae nesciunt! Natus excepturi 
                nobis iusto! Aliquam rerum suscipit laudantium iste maiores odio, aperiam fugiat dolorum?</p>
            </div>
        </div>
    </div>
  )
}

export default ServicesSection