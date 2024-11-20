import React from "react";

import styles from "./styles/BestSellingShowcase.module.css";
import { FaArrowRightLong } from "react-icons/fa6";

import ProductCard from "./ProductCard";

import Product1 from "../assets/clothing images/closeup-attractive-beautiful-woman-smiling-with-black-hat-isolated-white-background.jpg";
import Product2 from "../assets/clothing images/woman-green-dress-hat-yellow-background.jpg";
import Product3 from "../assets/clothing images/woman-model-demonstrating-winter-cloths.jpg";
import Product4 from "../assets/clothing images/amazing-pretty-young-woman-showing-rock-gesture.jpg";
import Product5 from "../assets/clothing images/young-woman-talking-by-mobile-phone-drinking-coffee-posing-isolated-grey-wall.jpg";
import Product6 from "../assets/clothing images/young-woman-red-dress.jpg";
import Product7 from "../assets/clothing images/beautiful-woman-sweater-skirt.jpg";


export default function BestSellingShowcase() {
  const products = [
    {
      id: 1,
      name: "Name of the product",
      price: "38.99",
      rating: "5.0",
      image: Product7,
    },
    {
      id: 2,
      name: "Name of the product",
      price: "38.99",
      rating: "5.0",
      image: Product2,
    },
    {
      id: 3,
      name: "Name of the product",
      price: "56.59",
      rating: "5.0",
      image: Product3,
    },
    {
      id: 4,
      name: "Name of the product",
      price: "38.99",
      rating: "5.0",
      image: Product4,
    },
  ];
  return (
    <section className={styles.showcase}>
      <h2 className={styles.title}>Best Selling</h2>
      <p className={styles.subtitle}>
        Get in on the trend with our curated selection of best-selling items.
      </p>
      <div className={styles.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.seeMoreButton}>
        <button>
          See more <FaArrowRightLong className={styles.icon} />
        </button>
      </div>
    </section>
  );
}
