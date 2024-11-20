import React, { useState } from "react";
import styles from "./styles/Pagination.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination({totalProducts , productsPerPage , currentPage , paginate }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginationItems = [
    ...(currentPage + 2 < pageNumbers.length
      ? pageNumbers.slice(currentPage - 1, currentPage + 1) 
      : pageNumbers.slice(pageNumbers.length - 3, pageNumbers.length - 1)), 
    ...(currentPage + 2 < pageNumbers.length ? ['...'] : []), 
    pageNumbers[pageNumbers.length - 1], 
  ];
  


  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1); 
    }
  }
  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      console.log("Next page")
      paginate(currentPage + 1); 
    }
  }
  
  return (
    <div className={styles.pagination}>
      <div className={styles.button}>
        <FaChevronLeft className={styles.icon} onClick={handlePrevPage} />
      </div>
      {paginationItems.map(number => (
        <button key={number}
        onClick={() => paginate(number)}
         className={`${styles.button} ${
          number === currentPage ? styles.active : ""
        }`}>{number}</button>
      ))}
      <div className={styles.button}>
        <FaChevronRight className={`${styles.icon} ${currentPage === pageNumbers.length ? styles.disabled : ''}`} onClick={handleNextPage} />
      </div>
    </div>
  );
}
