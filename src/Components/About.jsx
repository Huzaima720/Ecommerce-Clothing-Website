import React from 'react'
import styles from './styles/About.module.css'

import img from '../assets/clothing images/IMG-20240723-WA0024.jpg'
export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            Welcome to Logo – your ultimate destination for cool and trendy fashion! At Logo, we are dedicated to providing the latest styles that resonate with the vibrant and dynamic spirit of today's youth. Our collection is carefully curated to ensure that every piece embodies the cutting-edge trends and timeless coolness that define your unique style.
          </p>
        </div>
        <div className={styles.image}>
          <img src={img} alt="Fashion" className={styles.img} />
        </div>
      </div>
    </div>
  )
}
