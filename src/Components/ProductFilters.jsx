import React, { useState } from "react";
import styles from "./styles/ProductFilters.module.css";
import { Range } from "react-range";

export default function ProductFilters({ filters , children  }) {
  const { audiences, brands, categories, sizes } = filters;
  console.log(audiences, categories, sizes);
  const [values, setValues] = useState([80  , 300]);
  const MIN = 0;
  const MAX = 500;

  return (
    <div className={styles.productFilters}>
      {children}
      <div className={styles.filterSection}>
        <h4>PRICES</h4>
        <div className={styles.range}>
          <p>Range</p>
          <span>
            ${values[0]} - ${values[1]}
          </span>
        </div>
        <div>
         
          <Range
            step={10} 
            min={MIN}
            max={MAX}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
               
                  height: "4px",
                  background: "#ddd",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    background: "#f00",
                    left: `${((values[0] - MIN) / (MAX - MIN)) * 100}%`,
                    width: `${((values[1] - values[0]) / (MAX - MIN)) * 100}%`,
                  }}
                />
                {children}
              </div>
            )}
            renderThumb={({ props , isDragged  }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  marginLeft: "0",
                  marginTop: "0",
                  position: "absolute",
                  height: "10px",
                  width: "10px",
                  borderRadius: "50%",
                  backgroundColor: isDragged ? "#fff" : "#f00",
                  outline: "none",
                  border: "1px solid #fff",
           
            
                }}
              />
            )}
          />
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4>Filters</h4>
        <div className={styles.options}>
          {audiences.map((audienc, index) => (
            <label key={index}>
              <input type="checkbox" className={styles.checkbox} /> {audienc}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4>BRANDS</h4>
        <div className={styles.options}>
          {brands.map((brand, index) => (
            <label key={index}>
              <input type="checkbox" className={styles.checkbox} /> {brand}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4>Categories</h4>
        <div className={styles.options}>
          {categories.map((category, index) => (
            <label key={index}>
              <input type="checkbox" className={styles.checkbox} /> {category}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4>Size</h4>
        <div className={styles.options}>
          {sizes.map((size, index) => (
            <label key={index}>
              <input type="checkbox" className={styles.checkbox} /> {size}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
