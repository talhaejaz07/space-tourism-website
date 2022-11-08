import React from "react";
import Image from "next/image";

import { HeadComponent } from "../components";

import BGImageDesktop from "../assets/background-images/destination/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/destination/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/destination/bg-image-mobile.webp";

import Moon from "../assets/destination-pictures/moon.webp";

import styles from "../styles/pagesStyles/Destination.module.scss";

const destination = () => {
  return (
    <>
      <HeadComponent
        title="Space Tourism | Destination"
        description="A practice website for portfolio"
      />
      <picture>
        <source srcSet={BGImageMobile.src} media="(max-width: 550px)" />
        <source srcSet={BGImageTablet.src} media="(max-width: 850px)" />
        <source srcSet={BGImageDesktop.src} media="(min-width: 851px)" />
        <img
          className="backgroundImage"
          src={BGImageDesktop.src}
          alt="Background"
        />
      </picture>
      <main className={styles.container}>
        <div className={styles.destination}>
          <h5>
            <span>01 </span>Pick your destination
          </h5>
          <Image src={Moon} />
        </div>
        <div className={styles.description}></div>
      </main>
    </>
  );
};

export default destination;
