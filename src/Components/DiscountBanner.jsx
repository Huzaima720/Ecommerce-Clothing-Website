import React from "react";

import styles from "./styles/DiscountBanner.module.css"

export default function DiscountBanner() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>Ladies Top</h2>
      <p className={styles.description}>
        Slash Sales begins in August. Get up to 80% Discount on all products
        <a > Read More</a>
      </p>
    </div>
  );
}
