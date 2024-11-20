import React from "react";
import styles from "./styles/ProductCard.module.css"
import { Link } from "react-router-dom";

export default function ProductCard({product}) {
  return (
    <Link to="/product-details" className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <p className={styles.productName}>{product.name}</p>
      <div className={styles.productInfo}>
        <span className={styles.price}>${product.price}</span>
        <span className={styles.verticalLine}>|</span>
        <span className={styles.rating}> {product.rating}⭐</span>
      </div>
    </Link>
  );
}
