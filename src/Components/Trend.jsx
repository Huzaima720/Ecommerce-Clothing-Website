import React from "react";
import styles from "./styles/Trend.module.css";

import Accessory1 from "../assets/clothing images/young-woman-model-wearing-long-gray-coat.jpg";
import Accessory2 from "../assets/clothing images/young-girl-dressed-summer-time.jpg";
import Accessory3 from "../assets/clothing images/woman-dress-with-flowers-bag.jpg";

export default function Trend() {
  const products = [
    {
      id: 1,
      title: "Accessories",
      description:
        "Lorem ipsum dolor sit amet consectetur. Mi enim a curabitur odio risus donec quis donec vel.",
      image: Accessory1,
    },
    {
      id: 2,
      title: "Accessories",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisl elit potenti diam quis condimentum sed purus suspendisse.",
      image: Accessory2,
    },
    {
      id: 3,
      title: "Accessories",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum dolor id cras in eu tempor euismod ac.",
      image: Accessory3,
    },
  ];

  return (
    <section className={styles.trendsSection}>
      <h2 className={styles.title}>Cool & Trendy Clothes For You</h2>
      <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur.</p>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.image}>
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className={styles.cardTitle}>{product.title}</h3>
            <p className={styles.cardDescription}>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
