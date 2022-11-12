import React from "react";

import {
  HeadComponent,
  PageMessage,
  DestinationImage,
  DestinationMenu,
  DestinationDescription,
} from "../components";

import BGImageDesktop from "../assets/background-images/destination/bg-image-desktop.webp";
import BGImageTablet from "../assets/background-images/destination/bg-image-tablet.webp";
import BGImageMobile from "../assets/background-images/destination/bg-image-mobile.webp";

import styles from "../styles/pagesStyles/Destination.module.scss";

const destination = () => {
  const { click, render } = DestinationMenu();
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
        <PageMessage number="01" text="PICK YOUR DESTINATION" />
        <DestinationImage {...{ click }} />
        {render}
        <DestinationDescription {...{ click }} />
      </main>
    </>
  );
};

export default destination;
