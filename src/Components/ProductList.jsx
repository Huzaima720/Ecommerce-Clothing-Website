import React from "react";

import ProductCard from "./ProductCard"
import Product5 from "../assets/clothing images/Product 5.png";
import styles from "./styles/ProductList.module.css";


export default function ProductList({products}) {
  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
