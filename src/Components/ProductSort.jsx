import { useState, useRef, useEffect } from "react";
import styles from "./styles/ProductSort.module.css";
import { FiFilter } from "react-icons/fi";
import ProductFilters from "./ProductFilters";

export default function ProductSort({ fullLength, currentLength, filters }) {
  const [sortOption, setSortOption] = useState("new");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const filterRef = useRef(null);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const handleFiltersToggle = () => {
    setFiltersVisible((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFiltersVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);
  return (
    <div className={styles.productSort}>
      <p>
        Showing {currentLength} out of {fullLength} Products
      </p>
      <SortOptions />

      <div className={styles.filterButton}>
        <FiFilter onClick={handleFiltersToggle} />
      </div>
      {filtersVisible && (
        <div className={styles.filters} ref={filterRef}>
          <Filters filters={filters} />
        </div>
      )}
    </div>
  );
}

function SortOptions() {
  return (
    <div className={styles.sortOptions}>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" name="sort">
        <option value="new">New Arrivals</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}

function Filters({ filters }) {
  return (
    <ProductFilters filters={filters}>
      <SortOptions />
    </ProductFilters>
  );
}
