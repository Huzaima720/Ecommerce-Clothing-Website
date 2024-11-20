import React, { useState } from "react";
import styles from "./styles/BestsellersGallery.module.css";

import ProductCard from "./ProductCard";

import Product1 from "../assets/clothing images/Product 1.png";
import Product2 from "../assets/clothing images/Product 2.png";
import Product3 from "../assets/clothing images/Product 3.png";
import Product4 from "../assets/clothing images/Product 4.png";
import Product5 from "../assets/clothing images/Product 5.png";
import Product6 from "../assets/clothing images/Product 6.png";
import Product7 from "../assets/clothing images/Product 7.png";
import Product8 from "../assets/clothing images/Product 8.png";
import Product9 from "../assets/clothing images/Product 9.png";
import Product10 from "../assets/clothing images/Product 10.png";
import Product11 from "../assets/clothing images/Product 11.png";

export default function BestsellersGallery() {
  const categories = ["SALE", "HOT", "NEW ARRIVAL", "ACCESSORIES"];

  const [activeCategory, setActiveCategory] = useState("NEW ARRIVAL");

  const products = [
    {
      id: 1,
      name: "Name of the Product",
      price: "31.99",
      rating: "4.2",
      image: Product1,
    },
    {
      id: 2,
      name: "Name of the Product",
      price: "38.99",
      rating: "4.5",
      image: Product2,
    },
    {
      id: 3,
      name: "Name of the Product",
      price: "50.00",
      rating: "4.0",
      image: Product3,
    },
    {
      id: 4,
      name: "Name of the Product",
      price: "42.09",
      rating: "5.0",
      image: Product4,
    },
    {
      id: 5,
      name: "Name of the Product",
      price: "41.03",
      rating: "5.0",
      image: Product5,
    },
    {
      id: 6,
      name: "Name of the Product",
      price: "29.99",
      rating: "4.5",
      image: Product6,
    },
    {
      id: 7,
      name: "Name of the Product",
      price: "24.54",
      rating: "3.8",
      image: Product7,
    },
    {
      id: 8,
      name: "Name of the Product",
      price: "38.99",
      rating: "5.0",
      image: Product8,
    },
  ];

  return (
    <section className={styles.sellersGallery}>
      <h2 className={styles.title}>Best Selling</h2>
      <div className={styles.categoryTabs}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tabButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
