import React, { useState } from "react";
import styles from "./styles/ProductDesc.module.css";

export default function ProductDesc() {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className={styles.productDescContainer}>
      <div className={styles.tabs}>
        <span
          className={`${styles.tab} ${
            activeTab === "details" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("details")}
        >
          Product Details
        </span>
        <span
          className={`${styles.tab} ${
            activeTab === "specification" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("specification")}
        >
          Specification
        </span>
        <span
          className={`${styles.tab} ${
            activeTab === "reviews" ? styles.active : ""
          }`}
          onClick={() => handleTabChange("reviews")}
        >
          Ratings & Reviews
        </span>
      </div>

      {/* Product Details Tab */}
      {activeTab === "details" && (
        <div className={styles.tabContent}>
          <div>
            <h3>Product Details</h3>
            <p>
              Blue washed jacket, has a spread collar, 4 pockets, button
              closure, long sleeves, straight hem.
            </p>
          </div>
          <div>
            <h4>Size & Fit</h4>
            <p>The model (height 5'8") is wearing a size S.</p>
          </div>
          <div>
            <h4>Material & Care</h4>
            <p>100% cotton</p>
            <p>Machine wash</p>
          </div>
        </div>
      )}

      {/* Other Tabs (Specification and Reviews) */}
      {activeTab === "specification" && (
        <div className={styles.tabContent}>
          <h3>Specification</h3>
          <p>Product specifications will go here.</p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className={styles.tabContent}>
          <h3>Ratings & Reviews</h3>
          <p>Ratings and reviews will go here.</p>
        </div>
      )}
    </div>
  );
}
