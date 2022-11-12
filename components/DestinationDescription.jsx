import React from "react";

import { DestinationText } from "../data/DestinationData";

import styles from "../styles/componentStyles/DestinationDescription.module.scss";

export const DestinationDescription = ({ click }) => {
  return (
    <section className={styles.container} data-click={click}>
      {DestinationText.map((destination) => {
        return (
          <div key={destination.place}>
            <h2 className={styles.heading}>{destination.place}</h2>
            <p className={styles.text}>{destination.description}</p>
            <div className={styles.line} />
            <div className={styles.distance}>
              <p className={styles.subheading02}>AVG. DISTANCE</p>
              <p className={styles.subheading01}>{destination.distance}</p>
            </div>
            <div className={styles.time}>
              <p className={styles.subheading02}>EST. TRAVEL TIME</p>
              <p className={styles.subheading01}>{destination.travelTime}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
