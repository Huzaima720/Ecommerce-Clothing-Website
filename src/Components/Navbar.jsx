import React ,{useState} from "react";
import styles from "./styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { PiHandbagBold } from "react-icons/pi";
import { FiMenu } from "react-icons/fi"; 
import { FiX } from "react-icons/fi"; 
import { FiSearch } from "react-icons/fi";


export default function Navbar({searchBox , bgColor}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  return (
    <header className={styles.header} style={{backgroundColor : bgColor}}>
      <NavLink to="/" className={styles.logo}>LOGO</NavLink>
      {searchBox && (
          <div className={styles.searchContainer}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchBox}
            placeholder="Search for an item..."
          />
        </div>
        )}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ""}`} style={{backgroundColor : bgColor}}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}>
          HOME
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}>
          SHOP
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}>
          ABOUT
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? `${styles.activeLink}` : "")}>
          CONTACT
        </NavLink>
        <PiHandbagBold className={styles.cartIcon} />

        <NavLink to="/login" className={styles.loginBtn}>LOGIN</NavLink>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>
    </header>
  );
}
