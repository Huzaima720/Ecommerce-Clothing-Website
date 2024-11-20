import React from "react";

import styles from "./styles/Offer.module.css";
import offerImage from "../assets/clothing images/young-woman-beautiful-red-dress.jpg"

export default function Offer() {
  return (
    <section className={styles.banner}>
      <div className={styles.imageSection}>
        <img src={offerImage} alt="Fashion model" className={styles.image} />
      </div>
      <div className={styles.textSection}>
        <h2 className={styles.title}>Exclusive Offer</h2>
        <p className={styles.description}>
          Unlock the unlimited style upgrade with our exclusive offer. Enjoy
          savings of up to 40% off on your latest New Arrivals.
        </p>
        <div className={styles.timer}>
          <div className={styles.timerBox}>
            <span>05</span>
            <span>Days</span>
          </div>
          <div className={styles.timerBox}>
            <span>17</span>
            <span>Hours</span>
          </div>
          <div className={styles.timerBox}>
            <span>20</span>
            <span>Min</span>
          </div>
        </div>
        <button className={styles.button}>SHOP NOW</button>
      </div>
    </section>
  );
}
