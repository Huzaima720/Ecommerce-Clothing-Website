import React from 'react'
import ProductCard from './ProductCard'
import styles from "./styles/RelatedProducts.module.css";

import Product1 from "../assets/clothing images/closeup-attractive-beautiful-woman-smiling-with-black-hat-isolated-white-background.jpg";
import Product2 from "../assets/clothing images/woman-green-dress-hat-yellow-background.jpg";
import Product3 from "../assets/clothing images/woman-model-demonstrating-winter-cloths.jpg";
import Product4 from "../assets/clothing images/amazing-pretty-young-woman-showing-rock-gesture.jpg";

export default function RelatedProducts({heading}) {
  
  const products = [
    {
      id: 1,
      name: "Name of the product",
      price: "38.99",
      rating: "5.0",
      image: Product1,
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
    <div className={styles.relatedProductsContainer}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.productGallery}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>
  )
}
