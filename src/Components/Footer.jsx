import React from 'react'
import styles from './styles/Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
        <div className={styles.row}>
            <div className={styles.column}>
                <h2 className={styles.logo}>LOGO</h2>
                <h3 className={styles.columnHeader}>SOCIAL MEDIA</h3>
                <div className={styles.socialIcons}>
                    <FaInstagram  className={styles.icon}/>
                    <FaFacebookF  className={styles.icon}/>
                    <FaXTwitter  className={styles.icon}/>
                </div>
            </div>
            <div className={styles.column}>
                <h3 className={styles.columnHeader}>SHOP</h3>
                <p>Products</p>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Releases</p>
            </div>

            <div className={styles.column}>
                <h3 className={styles.columnHeader}>COMPANY</h3>
                <p>About Us</p>
                <p>Contact</p>
                <p>News</p>
                <p>Support</p>
            </div>
            
            <div className={styles.subscribeColumn}>
                <h3 className={styles.columnHeader}>Stay up to date</h3>
                <form className={styles.subscribeForm}>
                    <input type="text" placeholder='Enter your email'/>
                    <button type="submit">SUBMIT</button>
                </form>
                
            </div>
        </div>
        
    </footer>
  )
}
