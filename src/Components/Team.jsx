import React from "react";
import styles from "./styles/Team.module.css";

import img1 from "../assets/clothing images/IMG-20240723-WA0020.jpg";
import img2 from "../assets/clothing images/IMG-20240723-WA0022.jpg";


export default function Team() {
  return (
    <div className={styles.team}>
      <h1 className={styles.title}>Our Team</h1>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img1} alt="Team" className={styles.img} />
        </div>
        <div className={styles.image}>
          <img src={img2} alt="Team" className={styles.img} />
        </div>
        <div className={styles.image}>
          <img src={img1} alt="Team" className={styles.img} />
        </div>
        <div className={styles.image}>
          <img src={img2} alt="Team" className={styles.img} />
        </div>

        
      </div>
    </div>
  );
}
