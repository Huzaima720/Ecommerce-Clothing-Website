import React, { useState } from "react";

import styles from "./styles/ProductPage.module.css";

import Navbar from "../Components/Navbar";
import DiscountBanner from "../Components/DiscountBanner";
import ProductFilters from "../Components/ProductFilters";
import ProductSort from "../Components/ProductSort";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import Footer from "../Components/Footer";

import { products, categories, brands, audiences, sizes } from "../data/products";
let filters = {
  audiences: audiences,
  brands: brands,
  categories: categories,
  sizes: sizes,
};

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const productsPerPage = 9;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Navbar searchBox={true} bgColor="white" />
      <DiscountBanner />
      <div className={styles.productSection}>
        <ProductSort
          currentLength={currentProducts.length}
          fullLength={products.length}
          filters={filters}
        />
        <div className={styles.productListcontainer}>
          <div className={styles.sidebarFilter}>
            <ProductFilters
              filters={filters}
            />
          </div>
          <div className={styles.productList}>
            <ProductList products={currentProducts} />
            <Pagination
              currentPage={currentPage}
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
