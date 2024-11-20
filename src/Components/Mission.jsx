import React from "react";
import styles from "./styles/Mission.module.css";

import img from "../assets/clothing images/IMG-20240723-WA0026.jpg";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <h1 className={styles.title}>Our Mission</h1>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="Mission" className={styles.img} />
        </div>
        <div className={styles.text}>
          <p className={styles.description}>
            Our mission is simple: to inspire and empower youngsters to express
            themselves through fashion. Whether you're looking for the perfect
            outfit for a night out, a casual day at school, or anything in
            between, Logo has you covered. We believe in fashion as a form of
            self-expression, and our diverse range of clothing is designed to
            cater to every mood and moment.
          </p>
        </div>
      </div>
    </div>
  );
}
