import React from "react";
import Navbar from "../Components/Navbar";

import styles from "./styles/Hero.module.css";

// import HeroImg from "../assets/clothing images/Product 10.png";
import HeroImg from "../assets/clothing images/bohemian-man-with-his-arms-crossed.png";

const NavBg={
  backgroundColor: "var(--color-primary-light)"
}

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <Navbar bgColor={NavBg.backgroundColor}/>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Uncover And </h1>
          <h1>Cultivate Your</h1>
          <h1>Distinctive Style</h1>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur.
            <br />
            Faucibus Odio Gravida Amet Tellus
            <br />
            Adipiscing Donec Adipiscing Dignissim.
          </p>
          <button className={styles.exploreBtn}>EXPLORE NOW</button>
        </div>
        <div className={styles.heroImage}>
          {/* <div className={styles.imgBackground}> */}

          <img src={HeroImg} alt="Fashion Model" />
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}
