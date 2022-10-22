import React from 'react'
import HomeSection from '../../features/HomeSection/HomeSection'
import styles from "./Home.module.css";
import ServiceCard from '../../features/ServiceCard/ServiceCard';
import image1 from "../../assets/aboutUs.jpg"
import image2 from "../../assets/contactPeople.jpg"
import image3 from "../../assets/disinfectingHome.jpg"



const Home = () => {
  let items = [
  {title:"About us",image: image1, link:""},
  {title:"Services",image: image2, link:""},
  {title:"Contact us",image: image3, link:""}
  ] 
  return (
    <div>
        <HomeSection/>
        <div className={styles.secondSection}>
          <div className={styles.cards}>
            {items.map((item)=><ServiceCard title={item.title} image={item.image}/>)}
          </div>
        </div>
    </div>
  )
}

export default Home