import React from "react";
import { HeadComponent } from "../components";

import BGImageDesktop from "../assets/background-images/crew/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/crew/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/crew/bg-image-mobile.webp";

import styles from "../styles/pagesStyles/Crew.module.scss";

const crew = () => {
  return (
    <>
      <HeadComponent
        title="Space Tourism | Crew"
        description="A practice website for portfolio"
      />
      <picture>
        <source srcSet={BGImageMobile.src} media="(max-width: 480px)" />
        <source srcSet={BGImageTablet.src} media="(max-width: 800px)" />
        <source srcSet={BGImageDesktop.src} media="(min-width: 801px)" />
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

export default crew;
