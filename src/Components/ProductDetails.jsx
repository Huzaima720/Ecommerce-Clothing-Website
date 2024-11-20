import React from "react";
import styles from "./styles/ProductDetails.module.css";

import ProductImg from "../assets/clothing images/Product 5.png";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDetails() {
  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.productImageContainer}>
        <div className={styles.sideImages}>
          <div className={styles.miniImg}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.miniImg}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.miniImg}>
            <img src={ProductImg} alt="" />
          </div>
          <div className={styles.miniImg}>
            <img src={ProductImg} alt="" />
          </div>
        </div>
        <div className={styles.mainImg}>
          <img src={ProductImg} alt="" />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>Product Name</h2>
        <h5 className={styles.brandName}>Brand Name</h5>
        <p className={styles.sellerName}>Sold by: Seller Name</p>
        <div className={styles.ratingsContainer}>
          <span className={styles.ratingStars}>★★★★☆</span>
          <span className={styles.ratingValue}>4.5</span>
          <span className={styles.reviewCount}>120 reviews</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.newPrice}>$100</span>
          <span className={styles.oldPrice}>$120</span>
          <span className={styles.discount}>(20% Off)</span>
        </div>
        <div className={styles.sizesContainer}>
          <h2>Select Size</h2>
          <div className={styles.options}>
            <div className={styles.option}>XS</div>
            <div className={styles.option}>S</div>
            <div className={styles.option}>M</div>
            <div className={styles.option}>L</div>
            <div className={styles.option}>XL</div>
          </div>
        </div>
        <div className={styles.colorsContainer}>
          <h2>Select Color</h2>
          <div className={styles.colors}>
            <div
              className={styles.color}
              style={{ backgroundColor: "#FF0000" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#00FF00" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#0000FF" }}
            ></div>
          </div>
        </div>
        <div className={styles.offersContainer}>
          <h2>Best Offers</h2>
          <div className={styles.offers}>
            <div className={styles.offer}>
              <span className={styles.offerType}>Special offer</span>
              <span className={styles.offerDetails}>Get 25% off T&C</span>
            </div>
            <div className={styles.offer}>
              <span className={styles.offerType}>Special offer</span>
              <span className={styles.offerDetails}>Get 25% off T&C</span>
            </div>
            <div className={styles.offer}>
              <span className={styles.offerType}>Bank offer</span>
              <span className={styles.offerDetails}>
                Get 30% off on Axis Bank Credit card T&C
              </span>
            </div>
            <div className={styles.offer}>
              <span className={styles.offerType}>Wallet offer</span>
              <span className={styles.offerDetails}>Get 40% cashback</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.addToCart}>Add to Cart</button>
      
            <FaRegHeart  className={styles.wishlistIcon}/> 
      
        </div>
      </div>
    </div>
  );
}
