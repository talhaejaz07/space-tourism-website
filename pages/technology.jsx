import React from "react";
import { HeadComponent } from "../components";

import BGImageDesktop from "../assets/background-images/technology/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/technology/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/technology/bg-image-mobile.webp";

import styles from "../styles/pagesStyles/Technology.module.scss";

const technology = () => {
  return (
    <>
      <HeadComponent
        title="Space Tourism | Technology"
        description="A practice website for portfolio"
      />
      <picture>
        <source srcSet={BGImageMobile.src} media="(max-width: 550px)" />
        <source srcSet={BGImageTablet.src} media="(max-width: 850px)" />
        <source srcSet={BGImageDesktop.src} media="(min-width: 851px)" />
        <img
          className={styles.backgroundImage}
          src={BGImageDesktop.src}
          alt="Background"
        />
      </picture>
      <main className={styles.container}></main>
    </>
  );
};

export default technology;
