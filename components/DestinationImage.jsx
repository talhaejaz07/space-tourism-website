import React from "react";
import Image from "next/image";

import Moon from "../assets/destination-pictures/moon.webp";
import Mars from "../assets/destination-pictures/mars.webp";
import Europa from "../assets/destination-pictures/europa.webp";
import Titan from "../assets/destination-pictures/titan.webp";

import styles from "../styles/componentStyles/DestinationImage.module.scss";

export const DestinationImage = ({ click }) => {
  return (
    <section className={styles.container} data-click={click}>
      <Image src={Moon} alt="Moon" />
      <Image src={Mars} alt="Mars" />
      <Image src={Europa} alt="Europa" />
      <Image src={Titan} alt="Titan" />
    </section>
  );
};
