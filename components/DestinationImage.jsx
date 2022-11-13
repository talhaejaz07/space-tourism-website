import React from "react";
import Image from "next/image";

import Moon from "../assets/destination-pictures/moon.webp";
import Mars from "../assets/destination-pictures/mars.webp";
import Europa from "../assets/destination-pictures/europa.webp";
import Titan from "../assets/destination-pictures/titan.webp";

import styles from "../styles/componentStyles/DestinationImage.module.scss";

export const DestinationImage = ({ click }) => {
  const destination = [
    {
      place: Moon,
      alt: "Moon",
    },
    {
      place: Mars,
      alt: "Mars",
    },
    {
      place: Europa,
      alt: "Europa",
    },
    {
      place: Titan,
      alt: "Titan",
    },
  ];
  return (
    <section className={styles.container}>
      <Image src={destination[click].place} alt={destination[click].alt} />
    </section>
  );
};
